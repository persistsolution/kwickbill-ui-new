import { FC, Fragment } from 'react';
import { Link } from 'react-router-dom';
import ALLImages from '../../common/ImageData';
import { Card, Col, Form, Row } from 'react-bootstrap';

interface ComponentProps { }

const Lockscreen: FC<ComponentProps> = () => {
    return (
        <Fragment>
            <div className="">
                <div className="text-center">
                    <Link to={`${import.meta.env.BASE_URL}Dashboard/IndexPage/`}><img src={ALLImages('logo1')} className="header-brand-img" alt="" /></Link>
                </div>
            </div>

            <div className="container-lg">
                <Row className="justify-content-center mt-4 mx-auto">
                    <Col xl={4} lg={6}>
                        <Card className="shadow-none">
                            <Card.Body className="p-sm-6">
                                <div className="text-center mb-4">
                                    <h4 className="mb-1">Lock Screen</h4>
                                    <p>Enter your password to unlock the screen.</p>
                                </div>
                                <div className="text-center mb-4">
                                    <img src={ALLImages('user21')} alt="lockscreen image" className="avatar avatar-xxl brround mb-2" />
                                    <h6>Percy Kewshun</h6>
                                </div>
                                <Row>
                                    <Col sm={12}>
                                        <div className="mb-3">
                                            <Form.Label className="mb-2 fw-500">Password<span className="text-danger ms-1">*</span></Form.Label>
                                            <Form.Control className="ms-0" type="email" placeholder="Enter your password" />
                                        </div>
                                    </Col>
                                    <Col xl={12}>
                                        <div className="d-grid mb-3">
                                            <Link to={`${import.meta.env.BASE_URL}Dashboard/IndexPage/`} className="btn btn-primary"> Unlock</Link>
                                        </div>
                                        <div className="text-center">
                                            <p className="mb-0 tx-14">I forgot password
                                                <Link to={`${import.meta.env.BASE_URL}Authentication/ForgotPassword/`} className="d-inline-flex tx-primary ms-1 text-decoration-underline">Give me Hint</Link>
                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Fragment>
    );
};

export default Lockscreen;