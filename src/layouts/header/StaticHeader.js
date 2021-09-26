import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import SearchInput from "../../components/SearchInput";
import Link from "next/link";

const StaticHeader = ({ className,isSticky}) => {
  return (
    <header className={'header ' + (className ? className :'')}>
      <div className="container">
        <section className='flex fy-center '>
          <div style={{ width: "20%", paddingRight: 40 }}>
            <Link  href="/">
              <a className="block logo">
                <img src={isSticky ? "/img/logo-all-black.png" : "/img/wevente.png"} alt="wevente" width="100%" />
              </a>
            </Link>
          </div>
          <div className='mx-2' style={{ width: "62%" }}>
            <SearchInput />
          </div>
          <div style={{ width: "18%" }}>
            <div className='flex fx-end'>
              <Button style={{ borderRadius: 50, textTransform: "inherit", padding: "2px 5px" }}
                className="px-3"
                startIcon={
                  <div className="relative mr-2"  style={{top: 4}}>
                    <div className='cart-count'>4</div>
                    <svg xmlns='http://www.w3.org/2000/svg' className='svg-icon' style={{width: 26}} viewBox='0 0 512 512'>
                      <circle cx='176' cy='416' r='16' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32'/>
                      <circle cx='400' cy='416' r='16' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32'/>
                      <path fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M48 80h64l48 272h256'/>
                      <path d='M160 288h249.44a8 8 0 007.85-6.43l28.8-144a8 8 0 00-7.85-9.57H128' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32'/>
                  </svg>
                  </div>
                }
              >
              
                <div  style={{ lineHeight: "16px", textAlign: "left" }}>
                  <div>
                    <small>Your</small>
                  </div>
                  <div>
                    <b>Cart</b>
                  </div>
                </div>
              </Button>
              <Button
              className="px-3"
                style={{
                  borderRadius: 50,
                  textTransform: "inherit",
                  padding: "2px 5px",
                }}
                startIcon={
                  <svg xmlns='http://www.w3.org/2000/svg' className='svg-icon' style={{width: 26}} viewBox='0 0 512 512'><title>Person</title><path d='M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32'/><path d='M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z' fill='none' stroke='currentColor' strokeMiterlimit='10' strokeWidth='32'/></svg>
                }
              >
                <div style={{ lineHeight: "16px", textAlign: "left" }}>
                  <div>
                    <small>Hello,</small>
                  </div>
                  <div>
                    <b>Sign in</b>
                  </div>
                </div>
              </Button>
            </div>
          </div>
        </section>
        
        {
          !isSticky && <section className='header-menu'>
            <div style={{ width: "20%", paddingRight: 40 }}></div>
            <div className='mx-2' style={{ width: "62%" }}>
              <ul className='flex ' py="2px">
                <li>
                  <Link href="/collections">
                    <a className='btn'>
                      <span>Best Seller</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/collections/all">
                    <a className='btn'>
                      <span>Collection all</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a className='btn'>
                      <span>home</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/collections">
                    <a className='btn'>
                      <span>Best Seller</span>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div style={{ width: "18%" }}></div>
          </section>
        }
      </div>
    </header>
  );
};

StaticHeader.propTypes = {
  className: PropTypes.string,
};

export default StaticHeader;
