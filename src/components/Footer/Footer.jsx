import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';
import { Container, Row , Col , ListGroup , ListGroupItem } from 'reactstrap';
const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className='footer'>
            <Container>
                <Row>
                    <Col lg="4" className='mb-4' md="6">
                      <div className="final_logo">
                      <h1 className='links_title'>Last Shop</h1>
                      <p className="footer_text mt-4">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptate, quaerat nemo deserunt dignissimos necessitatibus culpa, eaque asperiores fugit quam animi. Delectus laborum sequi libero eius quod eligendi laboriosam
                      </p>
                      </div>
                    </Col>

                    <Col lg="3">
                        <div className="footer_links">
                            <h4 className="links_title">Top Category</h4>
                            <ListGroup className='ps-0 border-0'>
                                <ListGroupItem>
                                    <Link to="#">Mobile Phones</Link>
                                </ListGroupItem>
                            </ListGroup>
                            <ListGroup className='ps-0 border-0'>
                                <ListGroupItem>
                                    <Link to="#">Modern Sofa</Link>
                                </ListGroupItem>
                            </ListGroup>
                            <ListGroup className='ps-0 border-0'>
                                <ListGroupItem>
                                    <Link to="#">Arm Chair</Link>
                                </ListGroupItem>
                            </ListGroup>
                            <ListGroup className='ps-0 border-0'>
                                <ListGroupItem>
                                    <Link to="#">Smart Watches</Link>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>

                    <Col lg="2">
                    <div className="footer_links">
                            <h4 className="links_title">Userful Links</h4>
                            <ListGroup className='ps-0 border-0'>
                                <ListGroupItem>
                                    <Link to="/shop">Shop</Link>
                                </ListGroupItem>
                            </ListGroup>
                            <ListGroup className='ps-0 border-0'>
                                <ListGroupItem>
                                    <Link to="/cart">Cart</Link>
                                </ListGroupItem>
                            </ListGroup>
                            <ListGroup className='ps-0 border-0'>
                                <ListGroupItem>
                                    <Link to="/login">Login</Link>
                                </ListGroupItem>
                            </ListGroup>
                            <ListGroup className='ps-0 border-0'>
                                <ListGroupItem>
                                    <Link to="#">Privacy Policy</Link>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col lg="3" >
                        <div className="footer_links">
                            <h4 className="links_title">Userful Links</h4>
                            <ListGroup className='footer_contact ps-0 border-0 d-flex align-items-center gap-2 '>
                                <ListGroupItem>
                                    <span><i class="ri-map-pin-line"></i></span>
                                    <p>123, Caracass , Venezuela</p>
                                </ListGroupItem>
                            </ListGroup>
                            <ListGroup className='footer_contact ps-0 border-0 d-flex align-items-center gap-2 '>
                                <ListGroupItem>
                                    <span><i class="ri-phone-line"></i></span>
                                    <p>+58 412 2329299</p>
                                </ListGroupItem>
                            </ListGroup>
                            <ListGroup className='footer_contact ps-0 border-0 d-flex align-items-center gap-2'>
                                <ListGroupItem>
                                    <span><i class="ri-mail-line"></i></span>
                                    <p>ing.sistemas2019@gmail.com</p>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col lg="12">
                        <p className="footer_copyright">Copyright {year} developed by Armando Sanchez</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
