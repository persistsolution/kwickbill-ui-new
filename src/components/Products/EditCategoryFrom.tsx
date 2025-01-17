import React, { Fragment, useEffect, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import Pageheader from "../../layouts/Component/PageHeader/PageHeader";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const EditCategoryFrom: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    icon: null,
    photo: null,
    photo2: null,
    featured: 0,
    prodtype: 0,
    status: 1,
    srno: 1.0,
    createddate: new Date().toISOString(),
    modifieddate: null,
    roll: 1,
    createdby: 2091,
    modifiedby: 0,
    push_flag: false,
    delete_flag: false,
    modified_time: new Date().toISOString(),
    categoryImage: "",
    categorySrno: 0,
    categoryName: "",
  });

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const { name, value } = e.target;
      console.log(`${name}: ${value}`);
    };
    
  const [message, setMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    handelFetchEditCategory();
  }, []);

  const handelFetchEditCategory = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/selling-product/category/edit/${id}`
      );
      const responceData = response.data;
      console.log(responceData, "responceData");
      if (response.status === 200) {
        setFormData((prev) => ({
          ...prev,
          categoryName: responceData?.Name,
          // categoryImage: responceData.Photo || "",
          categorySrno: responceData?.srno || 0,
          status: responceData?.Status || 1,
        }));
      } else {
        setMessage(
          `Error: ${response.data?.message || "Failed to Fetch Edit Category."}`
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (files && files.length > 0) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    setIsLoading(true);

    const raw = {
      Name: formData.categoryName,
      Icon: formData.icon,
      Photo: formData.categoryImage,
      Photo2: formData.photo2,
      Featured: formData.featured,
      ProdType: Number(formData.prodtype),
      Status: Number(formData.status),
      srno: Number(formData.categorySrno),
      CreatedDate: formData.createddate,
      ModifiedDate: formData.modifieddate,
      Roll: Number(formData.roll),
      CreatedBy: formData.createdby,
      push_flag: formData.push_flag ? 1 : 0,
      delete_flag: formData.delete_flag ? 1 : 0,
      modified_time: formData.modified_time,
    };
    try {
      const response = await axios.put(
        `http://localhost:3000/selling-product/category/update/${id}`,
        raw,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        setMessage("Category Edit successfully!");
        setFormData({
          name: "",
          icon: null,
          photo: null,
          photo2: null,
          featured: 0,
          prodtype: 0,
          status: 1,
          srno: 1.0,
          createddate: new Date().toISOString(),
          modifieddate: null,
          roll: 1,
          createdby: 2091,
          modifiedby: 0,
          push_flag: false,
          delete_flag: false,
          modified_time: new Date().toISOString(),
          categoryImage: "",
          categorySrno: 0,
          categoryName: "",
        });
        navigate("/Products/ViewCategory/");
      } else {
        setMessage(
          `Error: ${response.data?.message || "Failed To Edit Category."}`
        );
      }
    } catch (err) {
      console.error("Network error:", err);
      setMessage("Network error. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Fragment>
      <Pageheader
        heading="Edit Category"
        homepage="Forms"
        activepage="Edit Category"
      />
      <div className="main-container container-fluid">
        <Row>
          <Col xl={12}>
            <Card className="custom-card">
              <Card.Header>
                <div className="card-title">Edit Category</div>
              </Card.Header>
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
                          onChange={handleSelectChange}
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
                          className={`mt-3 ${
                            message.includes("successfully")
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

export default EditCategoryFrom;
