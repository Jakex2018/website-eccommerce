import React , {useState} from 'react';
import { Container ,Row , Col, Form , FormGroup} from 'reactstrap';
import '../styles/Addproducts.css';
import { motion } from 'framer-motion';
const Addproducts = () => {
  const[EnterTitle, setEnterTitle] = useState("");
  const[EnterShort , setEnterShort] = useState("");
  const[EnterDescription , setEnterDescription] = useState("");
  const[EnterPrice , setEnterPrice] = useState("");
  const[EnterCategory , setEnterCategory] = useState("");
  const[EnterImage , setEnterImage] =useState(null);

  const addProduct = async (e) =>{
    e.preventDefault()

    const product={
    productName: EnterTitle ,
    shortDesc: EnterShort,
    description: EnterDescription,
    price: EnterPrice,
    imgUrl: EnterImage
    }
    console.log(product);
  }
 






  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <h4>Add Product</h4>
            <Form className='form_content' onSubmit={addProduct}>
              <FormGroup className='form_item'>
                <span>Product Title</span>
                <input 
                  type="text" 
                  placeholder='Title....' 
                  value={EnterTitle} 
                  onChange={e => setEnterTitle(e.target.value)}  
                  />
              </FormGroup>
              <FormGroup className='form_item'>
                <span>Short Description</span>
                <input 
                  type="text" 
                  placeholder='Description.....' 
                  value={EnterShort}
                  onChange={e => setEnterShort(e.target.value)}  
                  />
              </FormGroup>
              <FormGroup className='form_item'>
                <span>Description</span>
                <input 
                  type="text" 
                  placeholder='Description.....' 
                  value={EnterDescription}
                  onChange={e => setEnterDescription(e.target.value)}  
                  />
              </FormGroup>
      

              <div 
                className='d-flex justify-content-between align-items-center gap-5'>
                <FormGroup className='form_item w-50'>
                  <span>Price</span>
                   <input 
                    type="text" 
                    placeholder='Price.....' 
                    value={EnterPrice}
                    onChange={e => setEnterPrice(e.target.value)}  
                    />
                </FormGroup>

                <FormGroup className='form_item w-50'>
                  <span>Category</span>
                  <select className='w-100 p-2' value={EnterCategory} onChange={e => setEnterCategory(e.target.value)} >
                    <option value="chair">Chair</option>
                    <option value="sofa">Sofa</option>
                    <option value="mobile">Mobile</option>
                    <option value="watch">Watch</option>
                    <option value="wireless">Wireless</option>
                 </select>
                </FormGroup>
              </div>
              <FormGroup className='form_item'>
                <span>Product Image</span>
                <input 
                  type="file" 
                  placeholder='Image....' 
                  value={EnterImage}
                  onChange={e => setEnterImage(e.target.files[0])}
                  required
                  />
              </FormGroup>
              <motion.button type="submit" whileTap={{ scale: 0.9 }} className='bottom_btn' >Add Product</motion.button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Addproducts;
