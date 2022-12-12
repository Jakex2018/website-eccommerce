
import { Container , Row  } from 'reactstrap';
import userIcon from '../assets/images/user-icon.png';

import '../styles/admin_nav.css';
import UseAuth from '../custom-hooks/UseAuth';
import { NavLink } from 'react-router-dom';

const admin_nav = [
  {
    display: 'Dashboard',
    path:"/dashboard"
  },
  {
    display: 'All_products',
    path:"/dashboard/all-products"
  },
  {
    display: 'Order',
    path:"/dashboard/orders"
  },
  {
    display:"Users",
    path:"/dashboard/users"
  },
]




const Adminnav = () => {

  const {CurrentUser} = UseAuth();

  return (
  <>
  <header className="admin_header">
    <div className="admin_nav_top">
      <Container>
        <div className="admin_nav_wrap_top">
          <div className="logo">
            <h2>Last Shop</h2>
          </div>

          <div className="search_box">
            <input type="text" placeholder='search....' />
            <span><i class="ri-search-2-line"></i></span>
          </div>

          <div className="admin_nav_right">
            <span><i class="ri-notification-2-line"></i></span>
            <span><i class="ri-settings-2-fill"></i></span>
            <img src={CurrentUser ?CurrentUser.photoURL : userIcon} alt="" />
          </div>
        </div>
      </Container>
    </div>
  </header>
  <section className="admin_menu p-0">
    <Container>
      <Row>
        <div className="admin_navigation">
          <ul className="admin_menu_list">
            {
              admin_nav.map((item , index)=>(
                <li className="admin_menu_options" key={index}>
                  <NavLink 
                    to={item.path}
                    className={(navClass) => navClass.isActive ? 'active_admin_menu' : ''}>{item.display}</NavLink>
                </li>
                
              ))
            }
          </ul>
        </div>
      </Row>
    </Container>
  </section>
  </>
  );
}   
export default Adminnav;
