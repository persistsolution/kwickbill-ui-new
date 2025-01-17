# Use a lightweight Node image with Bun pre-installed
FROM oven/bun:latest

WORKDIR /app

# Copy only the package files to leverage Docker caching
COPY bun.lockb package.json ./

# Install dependencies using Bun
RUN bun install

# Copy the rest of the application code
COPY . ./

# Expose the default development server port
EXPOSE 80

# Start the development server
CMD ["bun", "dev"]
