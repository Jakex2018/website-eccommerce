import React , {useState} from 'react';
import { Container , Row , Col, Form , FormGroup } from 'reactstrap';
import Head from '../components/head/Head';
import { motion } from 'framer-motion';
import '../styles/Login.css';
import { Link } from 'react-router-dom';
const Signup = () => {
    const [username , setUsername] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [files , setFiles] = useState(null);


    return <Head title="Signup">
        <section>
          <Container>
            <Row>
              <Col lg="6" className='m-auto text-center'>
                <h6 className='title'>Signup</h6>
                  
                  <Form className='form-box'>
                    <FormGroup className='form_group'>
                     <input 
                        type="text" 
                        placeholder='Username' 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)}           
                      />
                    </FormGroup>
                    <FormGroup className='form_group'>
                      <input 
                        type="text" 
                        placeholder='Enter your email' 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}           
                      />
                    </FormGroup>
                    <FormGroup className='form_group'>
                      <input 
                        type="text" 
                        placeholder='Enter your password' 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}           
                      />
                    </FormGroup>
                    <FormGroup className='form_group'>
                      <input 
                        type="file" 
                        value={files} 
                        onChange={(e) => setFiles(e.target.value)}           
                      />
                    </FormGroup>
                    <motion.button type="submit" whileTap={{ scale: 0.9 }} className='bottom_btn aug_btn' >Signup</motion.button>
                    <p>Do have an Account? <Link to={"/Login"}>Login now</Link></p>
                  </Form>
          
              </Col>
            </Row>
        </Container>
        </section>
    </Head>
}

export default Signup ;