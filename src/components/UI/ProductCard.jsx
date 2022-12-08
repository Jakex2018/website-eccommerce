import React from 'react';

import { Col } from 'reactstrap';
import { motion } from 'framer-motion';
import '../../styles/ProductCard.css';
import { Link } from 'react-router-dom';
import {cartAction} from '../../redux/slices/cartSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';


const ProductCard = ({item}) => {

  const dispatch = useDispatch();

  const addToCart =() =>{
    dispatch(cartAction.addItem({
      id: item.id,
      productName: item.productName,
      price: item.price,
      imgUrl: item.imgUrl,
    }))
    toast.success(" Product agree to the cart ")
  };

    return (
      <Col lg="3" md="4" className='mb-2'>
        <div className="item_content" >
          <div className="item_image">
            <motion.img whileTap={{ scale: 0.9 }} src={item.imgUrl} alt="" />
          </div>

          <div className='p-2 item_info'>
            <h3 className='product_name'><Link to={`/shop/${item.id}`}>{item.productName}</Link></h3>
            <span>{item.category}</span>
          </div>
          
          <div className="item_bottom d-flex align-items-center justify-content-between p-2">
            <span className='price'>${item.price}</span>
            <motion.span whileTap={{scale:1.1}}><i class="ri-add-line" onClick={addToCart}></i></motion.span>
          </div>

        </div>
      </Col>
      
    );
}

export default ProductCard;
