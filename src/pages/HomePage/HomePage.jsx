import React, { useEffect } from "react";
import user from "./images/user.svg";
import cart from "./images/cart.svg";
import cross from "./images/cross.svg";
import truck from "./images/truck.svg";
import bag from "./images/bag.svg";
import support from "./images/support.svg";
import returnimg from "./images/return.svg";
import envelope from "./images/envelope-outline.svg";
import Navbar from "../../components/Navbar/Navbar";
import { FaArrowRightLong } from "react-icons/fa6";
import AOS from "aos"
import "aos/dist/aos.css"; // Import AOS CSS file


const HomePage = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000
        });

        // Clean up AOS when component unmounts
        return () => {
            AOS.refresh(); // Refresh AOS to remove any applied styles
        };
    }, []);
  return (
    <>
    {/* <Navbar/> */}
      <nav
        class="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark"
        arial-label="Furni navigation bar"
      >
        <div class="container">
          <a class="navbar-brand" href="index.html">
            Furni<span>.</span>
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsFurni"
            aria-controls="navbarsFurni"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarsFurni">
            <ul class="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
              <li class="nav-item active">
                <a class="nav-link" href="index.html">
                  Home
                </a>
              </li>
              <li>
                <a class="nav-link" href="shop.html">
                  Shop
                </a>
              </li>
              <li>
                <a class="nav-link" href="about.html">
                  About us
                </a>
              </li>
              <li>
                <a class="nav-link" href="services.html">
                  Services
                </a>
              </li>
              <li>
                <a class="nav-link" href="blog.html">
                  Blog
                </a>
              </li>
              <li>
                <a class="nav-link" href="contact.html">
                  Contact us
                </a>
              </li>
            </ul>

            <ul class="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
              <li>
                <a class="nav-link" href="#">
                  <img src={user} />
                </a>
              </li>
              <li>
                <a class="nav-link" href="cart.html">
                  <img src={cart} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div class="hero">
        <div class="container ">
          <div class="row d-flex justify-content-between">
            <div class="col-lg-5 ">
              <div class="intro-excerpt">
                <h1>
                  Modern Interior <span clsas="d-block">Design Studio</span>
                </h1>
                <p class="mb-4">
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate velit imperdiet dolor tempor
                  tristique.
                </p>
                <p>
                  <a href="" class="btn btn-secondary me-2">
                    Shop Now
                  </a>
                  <a href="#" class="btn btn-white-outline">
                    Explore
                  </a>
                </p>
              </div>
            </div>
            <div class="col-lg-5 col-sm-7 col-10 p-0 ">
                <img src={require("./imgs/main.png")} class="img-fluid bk-img" />
              {/* <div className="col-12 hero-img-wrap bg-danger">
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div class="product-section" data-aos="fade-up" >
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-lg-3 mb-5 mb-lg-0">
              <h2 class="mb-4 section-title">
              The Carbon Heat Pump
              </h2>
              <p class="mb-4">
              Some say intelligent, affordable and carbon emission-free heating sounds too good to be true.{" "}
              </p>
              <p>
                <a href="shop.html" class="btn">
                  Explore
                </a>
              </p>
            </div>

            <div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0 p-sm-2 p-4 " >
              <a class="product-item" href="">
                <img
                  src={require("./imgs/heat4.jpg")}
                  class="img-fluid product-thumbnail"
                  style={{borderRadius:"10px"}}
                />
                <h3 class="product-title">Outdoor unit</h3>
                <span class="product-price p-2">The outdoor unit draws in and extracts heat from the fresh air outside to heat your home and hot water.</span>

                <span class="icon-cross">
                <FaArrowRightLong style={{color:"white"}} />
                </span>
              </a>
            </div>

            <div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0 p-sm-2 p-4 ">
              <a class="product-item" href="cart.html">
                <img
                  src={require("./imgs/indoor.jpg")}
                  class="img-fluid product-thumbnail"
                  style={{borderRadius:"10px"}}
                />
                <h3 class="product-title">Indoor units</h3>
                <span class="product-price ">Water heated by your outdoor unit is stored and distributed by two components installed inside your home; the Aira Indoor Unit and Buffer Tank.</span>

                <span class="icon-cross">
                <FaArrowRightLong style={{color:"white"}} />
                </span>
              </a>
            </div>

            <div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0 p-4 ">
              <a class="product-item" href="cart.html">
                <img
                  src={require("./imgs/app.png")}
                  class="img-fluid product-thumbnail"
                  style={{borderRadius:"10px"}}
                />
                <h3 class="product-title">Home Energy app</h3>
                <span class="product-price">system is full of clever features which heat your home with optimal efficiency.</span>

                <span class="icon-cross">
                <FaArrowRightLong style={{color:"white"}} />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="why-choose-section" style={{overflow:"hidden"}}>
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-lg-6" data-aos="fade-right">
              <h2 class="section-title">Why Choose Us</h2>
              <p>
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
              </p>

              <div class="row my-5">
                <div class="col-6 col-md-6">
                  <div class="feature">
                    <div class="icon">
                      <img src={truck} alt="Image" class="imf-fluid" />
                    </div>
                    <h3>Fast &amp; Free Shipping</h3>
                    <p>
                      Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                      aliquet velit. Aliquam vulputate.
                    </p>
                  </div>
                </div>

                <div class="col-6 col-md-6">
                  <div class="feature">
                    <div class="icon">
                      <img src={bag} alt="Image" class="imf-fluid" />
                    </div>
                    <h3>Easy to Shop</h3>
                    <p>
                      Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                      aliquet velit. Aliquam vulputate.
                    </p>
                  </div>
                </div>

                <div class="col-6 col-md-6">
                  <div class="feature">
                    <div class="icon">
                      <img src={support} alt="Image" class="imf-fluid" />
                    </div>
                    <h3>24/7 Support</h3>
                    <p>
                      Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                      aliquet velit. Aliquam vulputate.
                    </p>
                  </div>
                </div>

                <div class="col-6 col-md-6">
                  <div class="feature">
                    <div class="icon">
                      <img src={returnimg} alt="Image" class="imf-fluid" />
                    </div>
                    <h3>Hassle Free Returns</h3>
                    <p>
                      Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                      aliquet velit. Aliquam vulputate.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-5" data-aos="fade-left">
              <div class="img-wrap">
                <img
                  src={require("./imgs/cool.jpg")}
                  alt="Image"
                  class="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="we-help-section" style={{overflow:"hidden"}}>
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-lg-8 mb-5 mb-lg-0 " >
              <div class="imgs-grid" data-aos="fade-right">
                <div class="grid grid-1">
                  <img
                    src={require("./imgs/cool1.jpg")}
                    alt="Untree.co"
                  />
                </div>
                <div class="grid grid-2">
                  <img
                    src={require("./imgs/cool2.jpg")}
                    alt="Untree.co"
                  />
                </div>
                <div class="grid grid-3">
                  <img
                    src={require("./imgs/cool3.jpg")}
                    alt="Untree.co"
                  />
                </div>
              </div>
            </div>
            <div class="col-lg-4 ps-lg-5" data-aos="fade-left">
              <h2 class="section-title mb-4">
                We Help You Make Modern Interior Design
              </h2>
              <p>
                Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
                quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
                vulputate velit imperdiet dolor tempor tristique. Pellentesque
                habitant morbi tristique senectus et netus et malesuada
              </p>

              <ul class="list-unstyled custom-list my-4">
                <li>Donec vitae odio quis nisl dapibus malesuada</li>
                <li>Donec vitae odio quis nisl dapibus malesuada</li>
                <li>Donec vitae odio quis nisl dapibus malesuada</li>
                <li>Donec vitae odio quis nisl dapibus malesuada</li>
              </ul>
              <p>
                <a herf="#" class="btn">
                  Explore
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="popular-product">
        <div class="container">
          <div class="row" data-aos="fade-up">
            <div class="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0" >
              <div class="product-item-sm d-flex" >
                <div class="thumbnail d-flex align-items-center justify-content-center">
                  <img
                    src={require("./imgs/havells.png")}
                    alt="Image"
                    class="img-fluid"
                    style={{width:"50%"}}
                  />
                </div>
                <div class="pt-3">
                  <h3>Nordic Chair</h3>
                  <p>
                    Donec facilisis quam ut purus rutrum lobortis. Donec vitae
                    odio{" "}
                  </p>
                  <p>
                    <a href="#">Read More</a>
                  </p>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div class="product-item-sm d-flex">
                <div class="thumbnail d-flex align-items-center justify-content-center">
                  <img
                    src={require("./imgs/carbon.png")}
                    alt="Image"
                    class="img-fluid"
                    style={{width:"70%"}}
                  />
                </div>
                <div class="pt-3">
                  <h3>Kruzo Aero Chair</h3>
                  <p>
                    Donec facilisis quam ut purus rutrum lobortis. Donec vitae
                    odio{" "}
                  </p>
                  <p>
                    <a href="#">Read More</a>
                  </p>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div class="product-item-sm d-flex">
                <div class="thumbnail d-flex align-items-center justify-content-center">
                  <img
                   src={require("./imgs/carbon2.png")}
                    alt="Image"
                    class="img-fluid"
                    style={{width:"30%"}}
                  />
                </div>
                <div class="pt-3">
                  <h3>Ergonomic Chair</h3>
                  <p>
                    Donec facilisis quam ut purus rutrum lobortis. Donec vitae
                    odio{" "}
                  </p>
                  <p>
                    <a href="#">Read More</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div class="testimonial-section">
<div class="container">
    <div class="row">
        <div class="col-lg-7 mx-auto text-center">
            <h2 class="section-title">Testimonials</h2>
        </div>
    </div>

    <div class="row justify-content-center">
        <div class="col-lg-12">
            <div class="testimonial-slider-wrap text-center">

                <div id="testimonial-nav">
                    <span class="prev" data-controls="prev"><span class="fa fa-chevron-left"></span></span>
                    <span class="next" data-controls="next"><span class="fa fa-chevron-right"></span></span>
                </div>

                <div class="testimonial-slider">
                    
                    <div class="item">
                        <div class="row justify-content-center">
                            <div class="col-lg-8 mx-auto">

                                <div class="testimonial-block text-center">
                                    <blockquote class="mb-5">
                                        <p>&ldquo;Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.&rdquo;</p>
                                    </blockquote>

                                    <div class="author-info">
                                        <div class="author-pic">
                                            <img src="images/person-1.png" alt="Maria Jones" class="img-fluid"/>
                                        </div>
                                        <h3 class="font-weight-bold">Maria Jones</h3>
                                        <span class="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div> 
                    

                    <div class="item">
                        <div class="row justify-content-center">
                            <div class="col-lg-8 mx-auto">

                                <div class="testimonial-block text-center">
                                    <blockquote class="mb-5">
                                        <p>&ldquo;Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.&rdquo;</p>
                                    </blockquote>

                                    <div class="author-info">
                                        <div class="author-pic">
                                            <img src="images/person-1.png" alt="Maria Jones" class="img-fluid"/>
                                        </div>
                                        <h3 class="font-weight-bold">Maria Jones</h3>
                                        <span class="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div> 
                 

                    <div class="item">
                        <div class="row justify-content-center">
                            <div class="col-lg-8 mx-auto">

                                <div class="testimonial-block text-center">
                                    <blockquote class="mb-5">
                                        <p>&ldquo;Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.&rdquo;</p>
                                    </blockquote>

                                    <div class="author-info">
                                        <div class="author-pic">
                                            <img src="images/person-1.png" alt="Maria Jones" class="img-fluid"/>
                                        </div>
                                        <h3 class="font-weight-bold">Maria Jones</h3>
                                        <span class="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div> 
                    

                </div>

            </div>
        </div>
    </div>
</div>
</div> */}

      <div class="blog-section" data-aos="zoom-in">
        <div class="container">
          <div class="row mb-5">
            <div class="col-md-6">
              <h2 class="section-title">Recent Blog</h2>
            </div>
            <div class="col-md-6 text-start text-md-end">
              <a href="#" class="more">
                View All Posts
              </a>
            </div>
          </div>

          <div class="row">
            <div class="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
              <div class="post-entry">
                <a href="#" class="post-thumbnail">
                  {/* <img src={require('./images/post-1.jpg')} alt="Image" class="img-fluid" /> */}
                  <img src="https://www.airahome.com/_next/image?url=https%3A%2F%2Fcms-assets.prod.airahome.com%2FHome_in_Scottish_Highlands_for_heat_pump_installation_in_Scotland_9382f1a600.jpg&w=1200&q=75" alt="Image" class="img-fluid" />
                </a>
                <div class="post-content-entry">
                  <h3>
                    <a href="#">First Time Home Owner Ideas</a>
                  </h3>
                  <div class="meta">
                    <span>
                      by <a href="#">Kristin Watson</a>
                    </span>{" "}
                    <span>
                      on <a href="#">Dec 19, 2021</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
              <div class="post-entry">
                <a href="#" class="post-thumbnail">
                  {/* <img src={require('./images/post-2.jpg')} alt="Image" class="img-fluid" /> */}
                  <img src="https://www.airahome.com/_next/image?url=https%3A%2F%2Fcms-assets.prod.airahome.com%2FAira_Heat_Pump_Lifestyle_5cec089397.jpg&w=1200&q=75" alt="Image" class="img-fluid" />

                </a>
                <div class="post-content-entry">
                  <h3>
                    <a href="#">How To Keep Your Furniture Clean</a>
                  </h3>
                  <div class="meta">
                    <span>
                      by <a href="#">Robert Fox</a>
                    </span>{" "}
                    <span>
                      on <a href="#">Dec 15, 2021</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
              <div class="post-entry">
                <a href="#" class="post-thumbnail">
                  {/* <img src={require('./images/post-3.jpg')} alt="Image" class="img-fluid" /> */}
                  <img src="https://www.airahome.com/_next/image?url=https%3A%2F%2Fcms-assets.prod.airahome.com%2Faira_UK_CER_005_left_Right_single_Heat_Pump_Secondary_02b715099d.jpg&w=1200&q=75" alt="Image" class="img-fluid" />

                </a>
                <div class="post-content-entry">
                  <h3>
                    <a href="#">Small Space Furniture Apartment Ideas</a>
                  </h3>
                  <div class="meta">
                    <span>
                      by <a href="#">Kristin Watson</a>
                    </span>{" "}
                    <span>
                      on <a href="#">Dec 12, 2021</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer class="footer-section" data-aos="fade-up">
        <div class="container relative">
          <div class="sofa-img">
            <img style={{borderRadius:"10px"}} src={require('./imgs/heater1.png')} alt="Image" class="img-fluid" />
          </div>

          <div class="row">
            <div class="col-lg-8">
              <div class="subscription-form">
                <h3 class="d-flex align-items-center">
                  <span class="me-1">
                    <img
                      src={envelope}
                      alt="Image"
                      class="img-fluid"
                    />
                  </span>
                  <span>Subscribe to Newsletter</span>
                </h3>

                <form action="#" class="row g-3">
                  <div class="col-auto">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div class="col-auto">
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div class="col-auto">
                    <button class="btn btn-primary">
                      <span class="fa fa-paper-plane"></span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div class="row g-4 mb-5">
            <div class="col-lg-4">
              <div class="mb-4 footer-logo-wrap">
                <a href="#" class="footer-logo">
                  Furni<span>.</span>
                </a>
              </div>
              <p class="mb-4">
                Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
                quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
                vulputate velit imperdiet dolor tempor tristique. Pellentesque
                habitant
              </p>

              <ul class="list-unstyled custom-social">
                <li>
                  <a href="#">
                    <span class="fa fa-brands fa-facebook-f"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="fa fa-brands fa-twitter"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="fa fa-brands fa-instagram"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="fa fa-brands fa-linkedin"></span>
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-lg-8">
              <div class="row links-wrap">
                <div class="col-6 col-sm-6 col-md-3">
                  <ul class="list-unstyled">
                    <li>
                      <a href="#">About us</a>
                    </li>
                    <li>
                      <a href="#">Services</a>
                    </li>
                    <li>
                      <a href="#">Blog</a>
                    </li>
                    <li>
                      <a href="#">Contact us</a>
                    </li>
                  </ul>
                </div>

                <div class="col-6 col-sm-6 col-md-3">
                  <ul class="list-unstyled">
                    <li>
                      <a href="#">Support</a>
                    </li>
                    <li>
                      <a href="#">Knowledge base</a>
                    </li>
                    <li>
                      <a href="#">Live chat</a>
                    </li>
                  </ul>
                </div>

                <div class="col-6 col-sm-6 col-md-3">
                  <ul class="list-unstyled">
                    <li>
                      <a href="#">Jobs</a>
                    </li>
                    <li>
                      <a href="#">Our team</a>
                    </li>
                    <li>
                      <a href="#">Leadership</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                  </ul>
                </div>

                <div class="col-6 col-sm-6 col-md-3">
                  <ul class="list-unstyled">
                    <li>
                      <a href="#">Nordic Chair</a>
                    </li>
                    <li>
                      <a href="#">Kruzo Aero</a>
                    </li>
                    <li>
                      <a href="#">Ergonomic Chair</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="border-top copyright">
            <div class="row pt-4">
              <div class="col-lg-6">
                <p class="mb-2 text-center text-lg-start">
                  Copyright &copy;
                  <script>document.write(new Date().getFullYear());</script>.
                  All Rights Reserved. &mdash; Designed with love by{" "}
                  <a href="https://untree.co">Untree.co</a> Distributed By{" "}
                  <a hreff="https://themewagon.com">ThemeWagon</a>
                </p>
              </div>

              <div class="col-lg-6 text-center text-lg-end">
                <ul class="list-unstyled d-inline-flex ms-auto">
                  <li class="me-4">
                    <a href="#">Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HomePage;
