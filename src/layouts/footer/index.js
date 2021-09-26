import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';


const Footer = ({ className, ...rest }) => {

  return (
    <footer className="footer" >
        <section className="footer-top text-center py-3">
            <div >
                {/* <img src="/img/wevente.png" alt="wevente" width="100%"  /> */}
                <h4>Great Value</h4>
                <p><small>Lorem Ipsum is simply dummy text of the printing and typesetting industry. lorem Ipsum is</small></p>
            </div>
        </section>
        <section  className="footer-main py-5">
            <div className="container is-grid grid-5 gap-2 border-bottom"> 
                <article >
                    <div>
                        <a href="/home" className="block logo">
                            <img src="/img/logo-all-black.png" alt="wevente" width="100%" />
                            <small>Smarter Shopping, Better Living!</small>
                        </a>
                    </div>
                    <div className="py-3"><span>Stay connected</span></div>
                    <div className="social-media flex">
                        <ion-icon className="pr-3" name="logo-facebook"></ion-icon>
                        <ion-icon className="pr-3" name="logo-google"></ion-icon>
                        <ion-icon className="" name="logo-instagram"></ion-icon>
                        <ion-icon name="logo-whatsapp"></ion-icon>
                    </div>
                </article>
                <article >
                    <h4>title here</h4>
                    <ul>
                        <li><a href='#' >lorem ipsum</a> </li>
                        <li><a href='#' >lorem ipsum</a> </li>
                        <li><a href='#' >lorem ipsum</a> </li>
                        <li><a href='#' >lorem ipsum</a> </li>
                        <li><a href='#' >lorem ipsum</a> </li>
                        <li><a href='#' >lorem ipsum</a> </li>
                    </ul>
                </article>
                <article >
                    <h4>title here</h4>
                    <ul>
                        <li><a href='#' >lorem ipsum</a> </li>
                        <li><a href='#' >lorem ipsum</a> </li>
                        <li><a href='#' >lorem ipsum</a> </li>
                        <li><a href='#' >lorem ipsum</a> </li>
                        <li><a href='#' >lorem ipsum</a> </li>
                        <li><a href='#' >lorem ipsum</a> </li>
                    </ul>
                </article>
                <article >
                    <h4>title here</h4>
                    <ul>
                        <li><a href='#' >lorem ipsum</a> </li>
                        <li><a href='#' >lorem ipsum</a> </li>
                        <li><a href='#' >lorem ipsum</a> </li>
                        <li><a href='#' >lorem ipsum</a> </li>
                        <li><a href='#' >lorem ipsum</a> </li>
                        <li><a href='#' >lorem ipsum</a> </li>
                    </ul>
                </article>
                <article >
                    <h4>title here</h4>
                    <ul>
                        <li><a href='#' >lorem ipsum</a> </li>
                        <li><a href='#' >lorem ipsum</a> </li>
                        <li><a href='#' >lorem ipsum</a> </li>
                        <li><a href='#' >lorem ipsum</a> </li>
                        <li><a href='#' >lorem ipsum</a> </li>
                        <li><a href='#' >lorem ipsum</a> </li>
                    </ul>
                </article>
            </div>
        </section>
        <section className="footer-bottom text-center py-3 px-2 bg-dark text-white">
            <div className="container">
                <p>Intellectual Property Protection - Privacy Policy - Sitemap - Terms of Use - User Information Legal Enquiry Guide ©️2010-2020 AliExpress.com.
                        All rights reserved.</p>

            </div>
        </section>
    </footer> 
  );
};

Footer.propTypes = {
  className: PropTypes.string
};

export default Footer;
