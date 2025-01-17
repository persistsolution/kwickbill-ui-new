import { FC, Fragment, useEffect, useState } from 'react';
import Pageheader from '../../layouts/Component/PageHeader/PageHeader';
import { Card, Col, Row } from 'react-bootstrap';
import { API_BASE_URL } from "../../config";
import {Link} from 'react-router-dom';

interface ComponentProps {}

const Indexpage: FC<ComponentProps> = () => {
  const [totalCategories, setTotalCategories] = useState<number>(0);
  const [totalSubCategories, setTotalSubCategories] = useState<number>(0);
  const [totalProducts, setTotalProducts] = useState<number>(0);
  const [loadingCategories, setLoadingCategories] = useState<boolean>(true);
  const [loadingSubCategories, setLoadingSubCategories] = useState<boolean>(true);
  const [loadingProducts, setLoadingProducts] = useState<boolean>(true);

  const CATEGORY_API_URL = `${API_BASE_URL}/selling-product/category/get`;
  const SUBCATEGORY_API_URL = `${API_BASE_URL}/selling-product/subcategory/get`;
  const PRODUCT_API_URL = `${API_BASE_URL}/selling-product/product/get`;

  // Fetch total categories
  useEffect(() => {
    const fetchTotalCategories = async () => {
      try {
        const response = await fetch(CATEGORY_API_URL);
        if (!response.ok) {
          throw new Error("Failed to fetch category data");
        }

        const data = await response.json();
        if (Array.isArray(data)) {
          setTotalCategories(data.length);
        } else {
          console.error("Invalid API response format for categories");
        }
      } catch (error) {
        console.error("Error fetching total categories:", error);
      } finally {
        setLoadingCategories(false);
      }
    };

    fetchTotalCategories();
  }, []);

  // Fetch total subcategories
  useEffect(() => {
    const fetchTotalSubCategories = async () => {
      try {
        const response = await fetch(SUBCATEGORY_API_URL);
        if (!response.ok) {
          throw new Error("Failed to fetch subcategory data");
        }

        const data = await response.json();
        if (Array.isArray(data)) {
          setTotalSubCategories(data.length);
        } else {
          console.error("Invalid API response format for subcategories");
        }
      } catch (error) {
        console.error("Error fetching total subcategories:", error);
      } finally {
        setLoadingSubCategories(false);
      }
    };

    fetchTotalSubCategories();
  }, []);

  // Fetch total products
  useEffect(() => {
    const fetchTotalProducts = async () => {
      try {
        const response = await fetch(PRODUCT_API_URL);
        if (!response.ok) {
          throw new Error("Failed to fetch product data");
        }

        const data = await response.json();
        if (Array.isArray(data)) {
          setTotalProducts(data.length);
        } else {
          console.error("Invalid API response format for products");
        }
      } catch (error) {
        console.error("Error fetching total products:", error);
      } finally {
        setLoadingProducts(false);
      }
    };

    fetchTotalProducts();
  }, []);

  return (
    <Fragment>
      <Pageheader heading="Dashboard" homepage="Admin" activepage="Dashboard" />

      <div className="main-container container-fluid">
        <Row>
          <Col xxl={9}>
            <Row>
              <Col xxl={5} xl={12}>
                <Row>
                  {/* Total Categories */}
                  <Col xl={3} lg={6} md={6} sm={6} xxl={6}>
                    <Card>
                      <Card.Body>
                      <Link to="/Products/ViewCategory"><div className="d-flex align-items-start">
                          <div className="flex-grow-1">
                            <p className="mb-0">Total Categories</p>
                            <div className="d-flex flex-wrap align-items-center">
                              <span className="fs-5">
                                {loadingCategories ? "Loading..." : totalCategories}
                              </span>
                            </div>
                          </div>
                          <div className="min-w-fit-content ms-3">
                            <span className="avatar avatar-md br-5 bg-primary-transparent text-primary">
                              <i className="fe fe-user fs-18"></i>
                            </span>
                          </div>
                        </div></Link>
                      </Card.Body>
                    </Card>
                  </Col>

                  {/* Total SubCategories */}
                  <Col xl={3} lg={6} md={6} sm={6} xxl={6}>
                    <Card>
                      <Card.Body>
                      <Link to="/Products/ViewSubCategory"><div className="d-flex align-items-start">
                          <div className="flex-grow-1">
                            <p className="mb-0">Total Sub Categories</p>
                            <div className="d-flex flex-wrap align-items-center">
                              <span className="fs-5">
                                {loadingSubCategories ? "Loading..." : totalSubCategories}
                              </span>
                            </div>
                          </div>
                          <div className="min-w-fit-content ms-3">
                            <span className="avatar avatar-md br-5 bg-secondary-transparent text-secondary">
                              <i className="fe fe-home fs-18"></i>
                            </span>
                          </div>
                        </div></Link>
                      </Card.Body>
                    </Card>
                  </Col>

                  {/* Total Products */}
                  <Col xl={3} lg={6} md={6} sm={6} xxl={6}>
                    <Card>
                      <Card.Body>
                        <div className="d-flex align-items-start">
                          <div className="flex-grow-1">
                            <p className="mb-0">Total Products</p>
                            <div className="d-flex flex-wrap align-items-center">
                              <span className="fs-5">
                                {loadingProducts ? "Loading..." : totalProducts}
                              </span>
                            </div>
                          </div>
                          <div className="min-w-fit-content ms-3">
                            <span className="avatar avatar-md br-5 bg-warning-transparent text-warning">
                              <i className="fe fe-credit-card fs-18"></i>
                            </span>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};

export default Indexpage;
