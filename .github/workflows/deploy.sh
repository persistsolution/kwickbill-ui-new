#!/bin/bash

# Variables
APP_NAME="kwickbill-ui-prod"
DIST_DIR="dist"
PORT=5173

# Functions
function install_dependencies() {
    echo "Installing dependencies..."
    export PATH=$HOME/.bun/bin:$PATH
    if bun --version &>/dev/null; then
        echo "Using Bun for dependencies installation."
        bun install || { echo "Bun installation failed. Falling back to npm."; npm install; }
    else
        echo "Bun not found. Using npm for dependencies installation."
        npm install
    fi
}

function build_application() {
    echo "Building the application..."
    export PATH=$HOME/.bun/bin:$PATH
    if bun --version &>/dev/null; then
        echo "Using Bun for build process."
        bun run build || { echo "Bun build failed. Falling back to npm."; npm run build; }
    else
        echo "Bun not found. Using npm for build process."
        npm run build
    fi
}

function restart_with_pm2() {
    echo "Restarting application with PM2..."
    # Ensure PM2 is installed
    if ! command -v pm2 &>/dev/null; then
        echo "PM2 not found. Installing..."
        npm install -g pm2
    fi

    # Stop existing process if running
    if pm2 list | grep -q $APP_NAME; then
        echo "Stopping existing PM2 process: $APP_NAME"
        pm2 delete $APP_NAME
    fi

    # Start or restart the application
    echo "Starting PM2 process for $APP_NAME..."
    pm2 start serve --name $APP_NAME -- -s $DIST_DIR -l $PORT || {
        echo "Failed to start PM2 process. Restarting..."
        pm2 restart $APP_NAME --update-env
    }

    # Save PM2 state
    pm2 save
    echo "PM2 processes:"
    pm2 list
}

# Main Script Execution
echo "Starting Deployment Script..."
install_dependencies
build_application
restart_with_pm2
echo "Deployment Complete."
