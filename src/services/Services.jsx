import React from 'react';
import { Container , Row , Col } from 'reactstrap';
import { motion } from 'framer-motion';
import './Services.css';
import ServicesData from '../assets/data/serviceData';

const Services = () => {
  return (
    <section className="services_container">
      <Container>
        <Row>
            {
              ServicesData.map((item,index)=>(
               <Col lg="3" md="4">
                  <motion.div whileHover={{ scale: 1.1 }} className="services_content" key={index} style={{background:`${item.bg}`}}>
                    <span to={item.icon}><i class="ri-truck-line"></i></span>
                      <div>
                        <h3>{item.title}</h3>
                        <p>{item.subtitle}</p>
                      </div>
                  </motion.div>
                </Col>
              ))
            }
                </Row>
        </Container>
    </section>
    );
}

export default Services;
