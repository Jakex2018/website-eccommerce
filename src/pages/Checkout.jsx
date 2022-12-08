import React from 'react';
import { Container , Row , Col, Form, FormGroup } from 'reactstrap';
import CommonSection from '../components/UI/CommonSection';
import Head from '../components/head/Head';
import { motion } from 'framer-motion';
import '../styles/Checkout.css';
import { useSelector } from 'react-redux';
const Checkout = () => {
    const TotalQty= useSelector((state) =>state.cart.totalQuantity);
    const totalAmount = useSelector((state) =>state.cart.totalAmount);

    return <Head title='Checkout'>
        <CommonSection title="CheckOut"/>
        <section>
            <Container>
                <Row>
                    <Col lg="8">
                        <div className="checkout_details">
                            <h6>Billing Information</h6>
                            <Form>
                                <FormGroup><input type="text" placeholder='Enter your Name' /></FormGroup>
                                <FormGroup><input type="text" placeholder='Enter your email' /></FormGroup>
                                <FormGroup><input type="text" placeholder='Phone Number' /></FormGroup>
                                <FormGroup><input type="text" placeholder='Street Adress' /></FormGroup>
                                <FormGroup><input type="text" placeholder='City' /></FormGroup>
                                <FormGroup><input type="text" placeholder='Postal Code' /></FormGroup>
                                <FormGroup><input type="text" placeholder='Country' /></FormGroup>
                            </Form>
                        </div>
                    </Col>

                    
                    <Col lg="4">
                        <div className="checkout_box">
                            <h6>Total Qty <span>{TotalQty} items</span></h6>
                            <h6>Subtotal <span>${totalAmount}</span></h6>
                            <h6>Shipping free <span>0</span></h6>
                            <h4>Total Cost <span>${totalAmount}</span></h4>
                            <motion.button whileTap={{ scale: 1.2 }} className='bottom_btn auth_bottom w-100'>Place an order</motion.button>
                        </div>
                        
                        
                    </Col>
                </Row>
            </Container>
        </section>
    </Head>
}

export default Checkout;
