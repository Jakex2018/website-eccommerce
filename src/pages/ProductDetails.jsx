import React , {useState , useEffect , useRef} from 'react';
import { useParams} from 'react-router-dom';
import products from '../assets/data/products';
import CommonSection from '../components/UI/CommonSection';
import Head from '../components/head/Head';
import { Container , Row , Col } from 'reactstrap';
import '../styles/ProductDetails.css';
import { motion } from 'framer-motion';
import ProductList from '../components/UI/ProductList';
import { useDispatch } from 'react-redux';
import {cartAction} from '../redux/slices/cartSlice';
import { toast } from 'react-toastify';


const ProductDetails = () => {
  const {id} = useParams()
  const product = products.find(item => item.id === id);
  const {imgUrl , productName , category , price , avgRating , reviews , description , shortDesc} = product;
  const [tab , setTab] = useState('desc');
  const reviewUser = useRef('');
  const reviewMsg = useRef('');
  const[rating , setRating] = useState(null);

  const dispatch = useDispatch();
  

  const relatedProducts = products.filter(item => item.category === category);

  const handleSubmit = (e) =>{
    e.preventDefault();
    const reviewUserName =  reviewUser.current.value;
    const reviewUsermsg = reviewMsg.current.value;

    const reviewObj ={
      useName: reviewUserName,
      text:reviewUsermsg,
      rating,
    }
    console.log (reviewObj);
    toast.success("review agree");
  }

  const addToCart =() =>{
    dispatch(
      cartAction.addItem({
        id,
        image : imgUrl,
        productName,
        price,
      })
    );
    toast.success(" Product agree to the cart ");
  };

  useEffect(() => {
    window.scrollTo(0,0);
  },[product]);

  return (
    <Head title={productName}>
      <CommonSection title={productName} />

      <section className='pt-0'>
        <Container>
          <Row>
            <Col lg="6">
              <img src={imgUrl} alt="" />
            </Col>

            <Col lg="6">
              <div className="product_details">
                <h1>{productName}</h1>
                <div className="product_ranking d-flex align-items-center gap-5 mb-3">
                  <div className="product_stars">
                    <span onClick={() => setRating(1)}><i class="ri-star-s-fill"></i></span>
                    <span onClick={() => setRating(2)}><i class="ri-star-s-fill"></i></span>
                    <span onClick={() => setRating(3)}><i class="ri-star-s-fill"></i></span>
                    <span onClick={() => setRating(4)}><i class="ri-star-s-fill"></i></span>
                    <span onClick={() => setRating(5)}><i class="ri-star-half-s-fill"></i></span>
                  </div>
                  <p>(<span>{avgRating}</span> Rating)</p>
                </div>
                <div className='d-flex align-items-center gap-5'>
                  <span className='product_price'>${price}</span>
                  <span> Category:{category.toUpperCase()}</span>
                </div>
                <p className='mt-3'>{shortDesc}</p>
                <motion.button whileTap={{scale:1.2}} className='bottom_btn' onClick={addToCart}>Add To Cart</motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="tab_wrapper d-flex align-items-center gap-5">
                <h6 className={`${tab === 'desc' ? 'active_tab' : ''}`} onClick={() => setTab('desc')}>Description</h6>
                <h6 className={`${tab === 'revi' ? 'active_tab' : ''}`} onClick={() => setTab('revi')}>review ({reviews.length})</h6>
              </div>

              {
                tab === 'desc' ? (
                  <div className="tab_content">
                    <p>{description}</p>
                  </div>
                ) : (
                  <div className="product_review">
                    <div className="review_wrapper">
                      <ul>
                        {
                          reviews?.map((item , index)=>(
                            <li key={index} className="mb-4">

                              <h6>Armando Sanchez</h6>
                              <span>{item.rating}(rating)</span>
                              <p>{item.text}</p>
                            </li>
                          ))
                        }
                      </ul>

                      <div className="review_form">
                        <h4>Leave Your Experience</h4>
                        <form action="#" onSubmit={handleSubmit}>
                          <div className="form_group">
                            <input type="text" 
                              placeholder='ingrese el nombre'
                              ref={reviewUser}
                              required
                            />
                          </div>
                          <div className="form_group d-flex align-item-center gap-5 rating_group">
                            <motion.span whileTap={{scale:1.1}} onClick={() => setRating(1)}>1<i class="ri-star-s-fill"></i></motion.span>
                            <motion.span whileTap={{scale:1.1}} onClick={() => setRating(2)}>2<i class="ri-star-s-fill"></i></motion.span>
                            <motion.span whileTap={{scale:1.1}} onClick={() => setRating(3)}>3<i class="ri-star-s-fill"></i></motion.span>
                            <motion.span whileTap={{scale:1.1}} onClick={() => setRating(4)}>4<i class="ri-star-s-fill"></i></motion.span>
                            <motion.span whileTap={{scale:1.1}} onClick={() => setRating(5)}>5<i class="ri-star-half-s-fill"></i></motion.span>
                          </div>

                          <div className="form_group mt-4">
                            <textarea rows={4} type="text" placeholder='Review the Message' ref={reviewMsg} required/>
                          </div>

                          <motion.button whileTap={{scale:1.2}} className='bottom_btn' >Submit</motion.button>
                        </form>
                      </div>
                    </div>
                  </div>
                )
              }
            </Col>
            <Col lg="12" className='mt-5'>
              <h2 className='related_title'>You might also like</h2>
            </Col>
            <ProductList data={relatedProducts}/>
          </Row>
        </Container>
      </section>
    </Head>
  );
};

export default ProductDetails;
