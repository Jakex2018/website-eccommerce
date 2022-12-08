import React, { useState } from 'react';
import Head from '../components/head/Head'
import CommonSection from '../components/UI/CommonSection';
import { Container , Row , Col } from 'reactstrap';
import '../styles/Shop.css';
import products from '../assets/data/products';
import ProductList from '../components/UI/ProductList';

const Shop = () => {
  const[productsData , setProductsdata] = useState(products);

  const handlefilter = (e) =>{
    const filtervalue = e.target.value;
    if (filtervalue === 'sofa'){
      const filteredProducts = products.filter((item) => item.category === 'sofa');
      setProductsdata(filteredProducts);
    }

    if (filtervalue === 'mobile'){
      const filteredProducts = products.filter((item) => item.category === 'mobile');
      setProductsdata(filteredProducts);
    }

    if (filtervalue === 'chair'){
      const filteredProducts = products.filter((item) => item.category === 'chair');
      setProductsdata(filteredProducts);
    }

    if (filtervalue === 'watch'){
      const filteredProducts = products.filter((item) => item.category === 'watch');
      setProductsdata(filteredProducts);
    }

    if (filtervalue === 'wireless'){
      const filteredProducts = products.filter((item) => item.category === 'wireless');
      setProductsdata(filteredProducts);
    }
  };

  const handlesearch = e =>{
    const searchvalue = e.target.value;
    const filtersearch = products.filter((item) => item.productName.toLowerCase().includes(searchvalue.toLowerCase()));

    setProductsdata(filtersearch);
    
  };




    return (
      <Head title='Shop'>
        <CommonSection title="Products"/>

          <section>
            <Container>
              <Row>
                <Col lg="3" md="3">
                  <div className="shop_box">
                    <select onClick={handlefilter}>
                      <option>Filter By Category</option>
                      <option value="sofa">Sofa</option>
                      <option value="mobile">Mobile</option>
                      <option value="chair">Chair</option>
                      <option value="watch">Watch</option>
                      <option value="wireless">Wireless</option>
                    </select>
                 </div>
              </Col>

            <Col lg="3" md="6" className='text-end'>
              <div className="shop_box">
                <select>
                    <option>Sort By</option>
                    <option value="ascending">Ascending</option>
                    <option value="descending">Descending</option>
                  </select>
                </div>
              </Col>

              <Col lg="6" md="12">
                <div className="search_box">
                  <input type="text" placeholder='Search......' onChange={handlesearch}/>
                  <span><i class="ri-search-line"></i></span>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className='pt-0'>
          <Container>
            <Row>
              {
                productsData.length === 0 ? <h1 className='text-center fs-4'>No products are found</h1> : <ProductList data={productsData}/> 
              }
            </Row>
          </Container>
        </section>
      </Head>
    );
}
export default Shop;
