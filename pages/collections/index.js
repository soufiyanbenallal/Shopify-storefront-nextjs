import React, { useEffect, useState } from 'react';
import {
  makeStyles
} from '@material-ui/core';
import Sidebar from '../../src/components/collections/Sidebar';
import ProductCard from '../../src/components/collections/ProductCard';
import Api from '../../src/mixins/Api';
import { Waypoint } from 'react-waypoint';
import Head from 'next/head';
import Layout from '../../src/layouts';
const ProductsLoad = () => (
    <div className="">
      <div className="skeleton-content mb-1 s-square"></div>
      <div className="skeleton-content mb-2 s-text-1 w-100"></div>
      <div className="skeleton-content mb-2 s-text-2 s-btn "></div>
      <div className="skeleton-content mb-2 s-text-3 w-75"></div>
      <div className="skeleton-content mb-2 s-text-4 w-100"></div>
    </div>
)

const ProductList = () => {
  const [products,setproducts] = useState([]);
  const [cursor,setcursor] = useState({});
  const [showLoading, setshowLoading] = useState(false)
  const first = 10
 
  const fetchProducts = (loadMore = false) => {
    setshowLoading(true)
    const variables = {
      first: first,
      query: '',
      sortKey: "BEST_SELLING",
      reverse: true
    }
    if (loadMore &&  cursor.id && cursor.pageInfo.hasNextPage) {
      variables.after = cursor.id
      console.log("log here");
    }

    Api.fetchProducts(variables).then(({data}) => {

      if (loadMore && cursor.pageInfo.hasNextPage) {
        setproducts([...products, ...data.products.edges.map(({node}) => node)])
      } else 
        setproducts(data.products.edges.map(({node}) => node))
      
      setshowLoading(false)
      setcursor({
        pageInfo: data.products.pageInfo,
        id: data.products.edges[data.products.edges.length - 1] ? data.products.edges[data.products.edges.length - 1].cursor : ''
      })
    })
  }
 
  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout className="collections-page pt-5" style={{background: '#efefef'}} title="Products">
        <div className="container  ">
          <div className="wrapper">
              <div className="sidebar">
                <Sidebar  />
              </div>
              <div className="main-content" >
                  <section className="is-grid grid-5 grid-lg-4 grid-md-3 grid-sm-2 gap">
                      {
                      (products.length > 0 ) && products.map((product,i) => (     
                          <ProductCard
                              key={i + product.id}
                              className="product-item mb-4"
                              product={product}
                          />                  
                        ))
                      }
                      {
                        showLoading && [...new Array(first)].map((_,i) => <ProductsLoad key={i}/>)
                      }
                  </section>
                  {(cursor.pageInfo && cursor.pageInfo.hasNextPage) && <Waypoint
                      key={cursor.id? cursor.id : "debute" }
                      onEnter={() => fetchProducts(true)}
                  />}
              </div>
          </div>
        </div>
    </Layout>
    </>
  );
};

export default ProductList;
