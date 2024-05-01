import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { MdOutlineLocalPhone } from 'react-icons/md';
import { IoEarth, IoMenu } from 'react-icons/io5';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
    useEffect(() => {
        AOS.init({ duration: 1000,
            easing: 'ease-in-out',
            delay: 200,}); 
    }, []);


    const [offcanvas, setOffcanvas] = useState(false);
    const [about, setabout] = useState(false);
    const [product, setproduct] = useState(false);
    const [price, setprice] = useState(false);


    const handleOpen = () => {
        setOffcanvas(!offcanvas);
    };
    const handleAbout = () => {
        setabout(!about);
    };
    const handleProduct = () => {
        setproduct(!product);
    };
    const handlePrice = () => {
        setprice(!price);
    };

    return (
        <>
            <div className='container-fluid bg-light p-4 d-flex justify-content-between align-items-center'>
                <span style={{ fontSize: "25px" }}>A I R A</span>
                <div className='d-md-flex justify-content-md-evenly align-items-center col-8 d-md-block d-none'>
                    <span className='nav-data' style={{ fontSize: "15px", fontWeight: "500", cursor: "pointer" }}>About Us</span>
                    <span className='nav-data' style={{ fontSize: "15px", fontWeight: "500", cursor: "pointer" }}>Products</span>
                    <span className='nav-data' style={{ fontSize: "15px", fontWeight: "500", cursor: "pointer" }}>Pricing</span>
                    <button className='p-2 btn-dark border-0 rounded get-btn'>Get a quote</button>
                    <span className='nav-data' style={{ fontSize: "15px", fontWeight: "500", cursor: "pointer" }}><MdOutlineLocalPhone style={{ fontSize: "20px", fontWeight: "500" }} /> 033 322 4439</span>
                    <IoEarth style={{ fontSize: "25px", fontWeight: "500", cursor: "pointer" }} />
                </  div>
                <div className='d-flex d-md-none d-block' onClick={handleOpen}>
                    <IoMenu onClick={handleOpen} style={{ fontSize: "29px", fontWeight: "500", cursor: "pointer" }} />
                </div>
                {offcanvas &&
                    <div data-aos="fade-right" className='p-3 offcanvas-div'>

                        <div className='container-fluid d-flex justify-content-between align-items-center'>
                        <span style={{ fontSize: "25px" }}>A I R A</span>
                        <button className="btn-close  d-flex align-items-end" onClick={handleOpen}></button>
                        </div>

                        <div className="offcanvas-body d-flex flex-column gap-4">
                            {/* Offcanvas content goes here */}
                           
                            <span  style={{ fontSize: "15px", fontWeight: "500", cursor: "pointer" }} onClick={handleAbout}>About Us
                                
                                {about &&
                                  <div style={{borderBottom:"1px solid black"}}  className='container gap-2 d-flex flex-column p-2 ' data-aos="fade-up">
                                     <span  style={{ fontSize: "15px", fontWeight: "300", cursor: "pointer" }}>About Aira</span>
                                     <span  style={{ fontSize: "15px", fontWeight: "300", cursor: "pointer" }}>Contact Aira</span>
                                     <span  style={{ fontSize: "15px", fontWeight: "300", cursor: "pointer" }}>Blog</span>
                                     <span  style={{ fontSize: "15px", fontWeight: "300", cursor: "pointer" }}>News</span>
                                         
                                  </div>
                                }
                            </span>
                    <span  style={{ fontSize: "15px", fontWeight: "500", cursor: "pointer" }} onClick={handleProduct}>Products
                    {product &&
                                  <div style={{borderBottom:"1px solid black"}}  className='container gap-2 d-flex flex-column p-2 ' data-aos="fade-up">
                                     <span  style={{ fontSize: "15px", fontWeight: "300", cursor: "pointer" }}>About Aira</span>
                                     <span  style={{ fontSize: "15px", fontWeight: "300", cursor: "pointer" }}>Contact Aira</span>
                                     <span  style={{ fontSize: "15px", fontWeight: "300", cursor: "pointer" }}>Blog</span>
                                     <span  style={{ fontSize: "15px", fontWeight: "300", cursor: "pointer" }}>News</span>
                                         
                                  </div>
                                }
                    </span>
                    <span  style={{ fontSize: "15px", fontWeight: "500", cursor: "pointer" }} onClick={handlePrice}>Pricing
                    {price &&
                                  <div style={{borderBottom:"1px solid black"}}  className='container gap-2 d-flex flex-column p-2 ' data-aos="fade-up">
                                     <span  style={{ fontSize: "15px", fontWeight: "300", cursor: "pointer" }}>About Aira</span>
                                     <span  style={{ fontSize: "15px", fontWeight: "300", cursor: "pointer" }}>Contact Aira</span>
                                     <span  style={{ fontSize: "15px", fontWeight: "300", cursor: "pointer" }}>Blog</span>
                                     <span  style={{ fontSize: "15px", fontWeight: "300", cursor: "pointer" }}>News</span>
                                         
                                  </div>
                                }
                    </span>
                    <button className='p-2 btn-dark border-0 rounded get-btn'>Get a quote</button>
                    <span style={{ fontSize: "15px", fontWeight: "500", cursor: "pointer" }}><MdOutlineLocalPhone style={{ fontSize: "20px", fontWeight: "500" }} /> 033 322 4439</span>
                    <IoEarth style={{ fontSize: "25px", fontWeight: "500", cursor: "pointer" }} />

                        </div>
                    </div>
                }
            </div>
        </>
    );
};

export default Navbar;
