import React, { Fragment } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import useCategoryForm from "../../Hook/useCategoryForm";
import Pageheader from "../../../layouts/Component/PageHeader/PageHeader";

const AddCategoryForm: React.FC = () => {
  const { formData, message, isLoading, handleChange, handleSubmit } =
    useCategoryForm();
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    console.log(`${name}: ${value}`);
  };

  return (
    <Fragment>
      <Pageheader
        heading="Add Category"
        homepage="Forms"
        activepage="Add Category"
      />

      <div className="main-container container-fluid">
        <Row>
          <Col xl={12}>
            <Card className="custom-card">
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Row className="gy-4">
                    <Col xl={6}>
                      <Form.Group controlId="name">
                        <Form.Label>Category Name *</Form.Label>
                        <Form.Control
                          type="text"
                          name="categoryName"
                          placeholder="Enter Category Name"
                          value={formData.categoryName}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col xl={6}>
                      <Form.Group controlId="name">
                        <Form.Label>Category Image *</Form.Label>
                        <Form.Control
                          type="file"
                          name="categoryImage"
                          placeholder="Enter Category Name"
                          // value={formData.categoryImage}
                          onChange={handleChange}
                          accept="image/*"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col xl={6}>
                      <Form.Group controlId="name">
                        <Form.Label>Sr No *</Form.Label>
                        <Form.Control
                          type="text"
                          name="categorySrno"
                          placeholder="Enter Category Name"
                          value={formData.categorySrno}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col xl={6}>
                      <Form.Group controlId="name">
                        <Form.Label>Status *</Form.Label>
                        <Form.Select
                          name="status"
                          value={formData.status}
                          onChange={handleSelectChange }
                          required
                        >
                          <option value="">Select </option>
                          <option value={1}>Active</option>
                          <option value={0}>Not Active</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mt-4">
                    <Col>
                      <Button
                        type="submit"
                        className="btn btn-primary"
                        disabled={isLoading}
                      >
                        {isLoading ? "Submitting..." : "Submit"}
                      </Button>
                      {message && (
                        <p
                          className={`mt-3 ${message.includes("successfully")
                            ? "text-success"
                            : "text-danger"
                            }`}
                        >
                          {message}
                        </p>
                      )}
                    </Col>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};

export default AddCategoryForm;
