import React from 'react';
import Head from '../components/head/Head'
import '../styles/Cart.css';
import CommonSection from '../components/UI/CommonSection';
import {Container ,Row, Col } from 'reactstrap';
/*import images from '../assets/images/double-sofa-02.png';*/
import { useDispatch, useSelector } from 'react-redux';
import {cartAction} from '../redux/slices/cartSlice';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';




const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const TotalAmount = useSelector((state)=>state.cart.totalAmount);
    return <Head title={"Cart"}>
        <CommonSection title={"Shopping Cart"} />
        <section>
            <Container>
                <Row>
                    <Col lg="9">
                      {
                        cartItems.length === 0 ? (
                          <h2 className='fs-4 text-center'>No item founded</h2>
                        ):(
                          <table className="table bordered">
                        <thead>
                          <tr>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Delete</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            cartItems.map((item , index) =>(
                              <Tr item={item} key={index}></Tr>
                            ))
                          }
                            
                        </tbody>
                          </table>
                        )
                      }
                      
                    </Col>

                    <Col lg="3">
                      <div>
                        <h6 className='d-flex align-items-center justify-content-between'>
                          Subtotal
                          <span className='fs-4 fw-bold'>${TotalAmount}</span>
                          </h6>
                        <p className='fs-6 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <div>
                          <motion.button whileTap={{ scale: 1.2 }} className='bottom_btn w-100'><Link to="/shop">Continue Shooping</Link></motion.button>
                          <motion.button whileTap={{ scale: 1.2 }} className='bottom_btn w-100'><Link to="/checkout">Checkout</Link></motion.button>
                        </div>
                      </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </Head>
};

const Tr = ({item, index}) =>{
  const dispatch=useDispatch();
  const deleteItem = () =>{
    dispatch(cartAction.deleteItem(item.id));
  }

  return <tr key={index} >
    <td><img src={item.imgUrl} alt="" /></td>
    <td>{item.productName}</td>
    <td>${item.price}</td>
    <td>{item.quantity}</td>
    <td onClick={ deleteItem}><i class="ri-delete-bin-line"></i></td>
  </tr>
}

 


export default Cart;
