import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link'
import {  ButtonBase } from '@material-ui/core';


const ProductCard = ({ className, product, ...rest}) => {
  const variants = product.variants.edges.map(({ node }) => node)
  const images = product.images.edges.map(({ node }) => node)
  return (
    <article className={className} {...rest} > 
        <div 
          className="product-img">
          <div className="offres">
            <a href="#" className="promo"> <ion-icon className="icon" name="pricetags-outline"></ion-icon><span>Promo</span> </a>
            <a href="#" className="pack"> <ion-icon className="icon" name="grid-outline"></ion-icon> <span>Pack</span> </a>
            <a href="#" className="icon-3"> <ion-icon className="icon" name="american-football-outline"></ion-icon> <span>foot</span> </a>
          </div>
          <div className="favoris">
            <button><ion-icon className="icon" name="heart-outline"></ion-icon></button>
          </div>
            <Link href={`/product/${product.handle}`}>
              <a>
                <img
                  alt="Product"
                  src={images[0].src}
                  className="w-100"
                />
              </a>
            </Link>
        </div>
        <div className="product-info">
          <Link href={`/product/${product.handle}`}>
            <a className="ellipsis">
                {product.title}
            </a>
          </Link>
          <h4>
            ${variants[0].price}
          </h4>
          <div>
            <small>Lorem Ipsum is  dummy</small>
          </div>
        </div>
        <div className="product-actions p-1">
            <ButtonBase  className="btn btn-primary round w-100 p-2 text=white">Add To Cart</ButtonBase>
        </div>
    </article> 
  );
};

ProductCard.propTypes = {
  className: PropTypes.string,
  product: PropTypes.object.isRequired
};

export default ProductCard;
