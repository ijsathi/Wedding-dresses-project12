import React from 'react';
import './BridalFooter.css';
import iconLogo from '../.././images/logo/icon-logo.png'

const BridalFooter = () => {
    return (
        <footer className='footer-area text-white'>
            <div className="footer-wave-box">
                <div className="footer-wave footer-animation">

                </div>
            </div>
            <div className="main">
                <div className="footer">
                    <div className="single-footer">
                        <ul>
                            <li><i className="fas fa-chevron-right"></i>Home</li>
                            <li><i className="fas fa-chevron-right"></i>Dress's</li>
                            <li><i className="fas fa-chevron-right"></i>Showroom</li>
                            <li><i className="fas fa-chevron-right"></i>About Us</li>
                            <li><i className="fas fa-chevron-right"></i>Contact Us</li>
                        </ul>
                        <div className="footer-social">
                            <a href="https://www.facebook.com/"><i className="fab fa-facebook"></i></a>
                            <a href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
                            <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/"><i className="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                    <div className="single-footer">
                        <h4 ><img style={{color:'white'}} className=' logo' src="https://bridey.leotheme.com/img/bridey-logo-1590373739.jpg" alt="" /></h4>
                        <img src={iconLogo} alt="" />
                    </div>
                    <div className="single-footer">
                        <ul>
                        <h4>Showroom</h4>
                            <li><i className="fas fa-map-marker-alt"></i>   Banani Level - 4, South Bridge Center, <br /> Road - 11, Building - 05, Block - G, Banani</li>
                            <li><i className="far fa-clock"></i> Monday - Friday: 8am - 4pm <br />
                                Saturday: 9am - 5pm</li>
                            <li><i className="far fa-envelope"></i>    bridaly@gmail.com</li>
                            <li><i className="fas fa-globe-europe"></i>     www.bridaly.info.com</li>
                        </ul>
                    </div>
                </div><hr />
                <div className="copy">
                    <p><small>&copy; Copyright © 2020 All Rights Reserved. <span style={{color:'#e9ac98'}}>Bridey</span></small></p>
                </div>
            </div>
        </footer>
    );
};

export default BridalFooter;