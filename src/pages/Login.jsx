import React , {useState} from 'react';
import { Container , Row , Col, Form , FormGroup } from 'reactstrap';
import Head from '../components/head/Head';
import { motion } from 'framer-motion';
import '../styles/Login.css';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase_config';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  const [loading ,setLoading] = useState(false);
  const navigate = useNavigate();

  const login = async (e) =>{
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(auth , email , password)

      const user = userCredential.user


      console.log(user)
      setLoading(false)
      toast.success("Succesfully logged in")
      navigate('/checkout')

    } catch (error) {
      setLoading(false)
      toast.error(error.message)
    }
  }


    return <Head title="Login">
        <section>
          <Container>
            <Row>
              {
                loading ? <Col lg="12" className='text-center'><h5 className='fw-bold'>Loading.......</h5></Col> : (
                  <Col lg="6" className='m-auto text-center'>
                    <h6 className='title'>Login</h6>
                  
                    <Form className='form-box' onSubmit={login}>
                      <FormGroup className='form_group'>
                        <input 
                        type="email" 
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
                      <motion.button type="submit" whileTap={{ scale: 0.9 }} className='bottom_btn aug_btn' >Login</motion.button>
                      <p>Don't have an Account? <Link to={"/Signup"}>Create an Account</Link></p>
                  </Form>
              </Col>
                )
              }
            </Row>
        </Container>
        </section>
    </Head>
}

export default Login;
