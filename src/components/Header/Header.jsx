import React , {useRef} from 'react';
import '../Header/Header.css';
import { Link, NavLink , useNavigate} from 'react-router-dom';
import {Container , Row} from 'reactstrap';
import logo from '../../assets/images/eco-logo.png';
import UserIcon from '../../assets/images/user-icon.png';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import UseAuth from '../../custom-hooks/UseAuth';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase_config';
import { toast } from 'react-toastify';

const nav_option = [
    {
        path:"home",
        display:'Home'
    },
    {
        path:"shop",
        display:'Shop'
    },
    {
        path:"cart",
        display:'Cart'
    },
]


const Header = () => {
    const menuRef = useRef(null);
    const profileActionsRef = useRef(null);
    const menuToggle = () => menuRef.current.classList.toggle('active_menu');
    const navigate = useNavigate();
    const totalQuantity = useSelector(state => state.cart.totalQuantity);
    const {currentUser} = UseAuth();

    const NavigateToCart = () =>{
        navigate("/cart");
    }

    const toogleProfileActions = () => profileActionsRef.current.classList.toggle('show_profileActions');


    const logout = () =>{
        signOut(auth).then(()=>{
            toast.success("Logout")
            navigate("/home")
        }).catch((err) =>{
            toast.error(err.message)
        })
    }

    return <header className="header">
        <Container>
            <Row>
                <div className="menu_container">
                    <div className="logo">
                        <img src={logo} alt="" />
                        <div>
                            <h1>Last Shop</h1>
                        </div>
                    </div>
                    <div className="navigation" ref={menuRef} onClick={menuToggle}>
                        <ul className="menu">

                            {
                                nav_option.map((item , index) =>(
                                    <li className="nav_links" key={index}>
                                    <NavLink
                                      to={item.path}
                                      className={(navClass) => navClass.isActive ? 'nav_active' : ''}
                                    >{item.display}
                                    </NavLink>
                                    </li>
                                ))
                            }
                            
                        </ul>
                    </div>
                    <div className="menu_icons">
                        <span className="heart_icon">
                          <i class="ri-heart-line"></i>
                          <span className="badge">1</span>
                        </span>
                        <span className="cart_icon" onClick={NavigateToCart}>
                          <i class="ri-shopping-bag-line"></i>
                          <span className="badge">{totalQuantity}</span>
                        </span>
                        <div className='profile'>
                          <motion.img 
                            whileTap={{ scale: 1.1 }} 
                            src={currentUser ? currentUser.photoURL : UserIcon} 
                            alt="" onClick={toogleProfileActions}/>
                    
                          <div className="profile_actions" ref={profileActionsRef} onClick={toogleProfileActions}>
                            {
                              currentUser ? (<span onClick={logout}>Logout</span>): (<div 
                              className='d-flex justify-content-center flex-column align-items-center'>


                                <Link to="/signup">Signup</Link>
                                <Link to="/login">Login</Link>
                                <Link to="/dashboard">Dashboard</Link>
                              </div> )
                            }
                          </div>
                        </div>
                        <div className="menu_mobile">
                          <span onClick={menuToggle}><i class="ri-menu-line"></i></span>
                        </div>
                    </div>
                </div>
            </Row>
        </Container>
    </header>
}

export default Header;