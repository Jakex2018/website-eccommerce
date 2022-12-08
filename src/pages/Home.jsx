import React,{useState , useEffect} from 'react';
import Head from '../components/head/Head';
import { Container , Row , Col } from 'reactstrap';
import image from '../assets/images/hero-img.png';
import '../styles/Home.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Services from '../services/Services';
import products from '../assets/data/products';
import ProductList from '../components/UI/ProductList';
import imageTimer from '../assets/images/counter-timer-img.png';
import Clock from '../components/UI/Clock';
const Home = () => {
  const [filtertrending , setFiltertrending] = useState([]);
  const [filterbestsales , setFilterbestsales] = useState([]);
  const [filternewphones , setFilternewarrivals] = useState([]);
  const[filternewireless , setFilternewireless] = useState([]);
  const[filternewatch , setFilternewatch] = useState([]);

  useEffect(() => {
    const filtertrending = products.filter(
      (item) => item.category === "chair"
    );

    const filterbestsales = products.filter(
      (item) => item.category === "sofa"
    );

    const filternewphones = products.filter(
      (item) => item.category === "mobile"
    );

    const filternewireless = products.filter(
      (item) => item.category === "wireless"
    );

    const filternewatch = products.filter(
      (item) => item.category === "watch"
    );
      setFiltertrending(filtertrending);
      setFilterbestsales(filterbestsales);
      setFilternewarrivals(filternewphones);
      setFilternewireless(filternewireless);
      setFilternewatch(filternewatch);
  },[]);

    const year = new Date().getFullYear();
    return ( 
    <Head title={"Home"}>
      <section className="hero_container">
            <Container>
            <Row>
                <Col lg="6" md="6">

                <div className="hero_content">
                    <p>Trending your products in {year}</p>
                    <h2>Make Your Interior More Minimalistic & Modern</h2>
                    <p className='subtitle'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, repellat perferendis! Excepturi porro inventore architecto, ducimus sunt hic quasi laborum reprehenderit commodi cum accusantium, aut recusandae, dolorem fugit. Id, veniam?</p>
                    <motion.button whileTap={{ scale: 1.2 }} className='bottom_btn'><Link to="/shop">SHOP NOW</Link></motion.button>
                </div>
                </Col>

                <Col lg="6" md="6">
                    <div className="hero_image">
                      <img src={image} alt="" />
                    </div>
                </Col>
            </Row> 
            </Container>
      </section>  
      <Services />
      <section className="trending_products">
        <Container>
          <Row>
            <Col lg="12" className='text-center'>
            <h2 className='section_title'>Trending Products</h2>
            </Col>
            <ProductList data={filtertrending}/>
          </Row>
        </Container>
      </section>
      <section className="best_sales">
        <Container>
          <Row>
            <Col lg="12" className='text-center'>
              <h2 className='section_title'>Best Sales</h2>
            </Col>
            <ProductList data={filterbestsales}/>
          </Row>
        </Container>
      </section>
      <section className="timer_content">
        <Container>
          <Row>
            <Col lg="6" md="12" className='count_down-col'>
              <div className="clock_item">
                <h4 className='text-white fs-6 mb-2'>Limite Offers</h4>
                <h3 className='text-white fs-5 mb-3'>Quality Armchair</h3>
                <Clock />
                <motion.button whileTap={{scale: 1.2}} className='bottom_btn store_btn'><Link to="/shop">Visit Store</Link></motion.button>
              </div>
            </Col>
            <Col lg="6" md="12" className='text-end image_timer'>
              <img src={imageTimer} alt="" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="new_merch">
      <Container>
          <Row>
            <Col lg="12" className='text-center'>
              <h2 className='section_title'>New Arrivals</h2>
            </Col>
            <ProductList data={filternewphones}/>
            <ProductList data={filternewireless}/>
          </Row>
      </Container>
      </section>
      <section className="popular_category">
      <Container>
          <Row>
            <Col lg="12" className='text-center'>
              <h2 className='section_title'>Popular in Category</h2>
            </Col>
            <ProductList data={filternewatch}/>
          </Row>
      </Container>
      </section>
    </Head>
    );
}

export default Home;
