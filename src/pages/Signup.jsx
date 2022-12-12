import React , {useState} from 'react';
import { Container , Row , Col, Form , FormGroup } from 'reactstrap';
import Head from '../components/head/Head';
import { motion } from 'framer-motion';
import '../styles/Login.css';
import { Link } from 'react-router-dom';
import { auth } from '../firebase_config';
import { createUserWithEmailAndPassword , updateProfile} from "firebase/auth";
import {ref , uploadBytesResumable , getDownloadURL} from "firebase/storage";
import{setDoc , doc} from "firebase/firestore";
import { db } from '../firebase_config';
import { storage } from '../firebase_config';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [username , setUsername] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [files , setFiles] = useState(null);
    const[loading , setLoading] = useState(false);
    const navigate = useNavigate();

    const signup = async(e) =>{
      e.preventDefault();  
      setLoading(true);
      try {
        const userDates = await createUserWithEmailAndPassword(auth, email, password);
        const user = userDates.user;
        

        const storageRef = ref(storage , `images/${Date.now() + username}`);
        const uploadItem = uploadBytesResumable(storageRef , files);
        uploadItem.on((error)=>{
          toast.error(error.message)
        },()=>{
          getDownloadURL(uploadItem.snapshot.ref).then(async(downloadURL)=>{
            
            await updateProfile(user, {
              displayName:username,
              photoURL:downloadURL,
            });

            await setDoc(doc(db , "users" , user.id),{
              uid:user.id,
              displayName:username,
              email,
              photoURL:downloadURL
            })
          });
        });

        setLoading(false);
        toast.success("account created!")
        navigate("/login");
      } catch (error) {
        toast.error("something whante wrong");
        setLoading(false);
      }
    }


    return <Head title="Signup">
        <section>
          <Container>
            <Row>
              {
                loading ? <Col lg="12" className='text-center'><h5 className='fw-bold mt-20'>Loading........</h5></Col> :
                (
                  <Col lg="6" className='m-auto text-center'>
                    <h6 className='title'>Signup</h6>
                  
                    <Form className='form-box' onSubmit={signup}>
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
                        type="password" 
                        placeholder='Enter your password' 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}           
                      />
                     </FormGroup>
                     <FormGroup className='form_group'>
                      <input 
                        type="file" 
                    
                        onChange={(e) => setFiles(e.target.files[0])}           
                      />
                     </FormGroup>
                     <motion.button type="submit" whileTap={{ scale: 0.9 }} className='bottom_btn aug_btn' >Signup</motion.button>
                     <p>Do have an Account? <Link to={"/Login"}>Login now</Link></p>
                  </Form>
              </Col>
                )}
            </Row>
        </Container>
        </section>
    </Head>
}

export default Signup ;