import {
  List,
  ListItem,
  ListItemText,
  ButtonBase,
  IconButton,
  Button
} from '@material-ui/core';
import React, { useState } from 'react';
import Link from 'next/link'

import Head from 'next/head'
import Layout from '../src/layouts'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {  Navigation, Pagination } from 'swiper';
import ProductCard from '../src/components/collections/ProductCard';
import SimpleProductCard from '../src/components/SimpleProductCard';
import data from '../src/components/home/data';
import Api from '../src/mixins/Api'; 
import {CATEGORY_TREE} from '../src/graphql/queries/CategoryTree'; 
import {useQuery} from "@apollo/client";
import { useEffect } from 'react';
import axios from 'axios';
SwiperCore.use([Navigation,Pagination ]);
function CategoriesTree() {
  const categoriesMaps = useQuery(CATEGORY_TREE);
  const [categoryTree, setcategoryTree] = useState([])
  const [currentCategory, setcurrentCategory] = useState({});
  const [toggle , settoggle ] = useState(false)
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error :(</p>;
    useEffect(()=>{
      axios.get('https://api.bigcommerce.com/stores/gv7u1eso7n/v3/catalog/products/111',
      
      {
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          'X-Auth-Token': "b02tmbu3bk5bqlmj241i73v0i8uh2oc"
        }
      }
      ).then(dara=> console.log("dara",dara))
      .catch(err=> console.log("err",err))
      setTimeout(() => {
        console.log('categoriesMaps :',categoriesMaps);
      }, 9000);
      if (!categoriesMaps.loading && categoriesMaps.data) {
        console.log("categoriesMaps.data.site.categoryTree",categoriesMaps.data.site.categoryTree);
        setcategoryTree(categoriesMaps.data.site.categoryTree)
      }
    },[])
    const onMouseOver = (c) => {
      if (!toggle) 
      settoggle(true)
      if(JSON.stringify(c) != JSON.stringify(currentCategory))
        setcurrentCategory(c)
    } 
    return (
      <div  style={{backgroundColor:"#0000",borderRadius:0}}>
        <List component="nav" aria-label="main" className="side-categories" disablePadding dense >
          {
            categoryTree.map((c,i)=>(
              <ListItem button disableGutters className="category-name flex-v-center" key={i} onMouseOver={() => onMouseOver(c)} >
                <div className="mx-2" style={{display:'flex'}}>
                  <ion-icon name={c.image}></ion-icon>
                </div>
                <ListItemText primary={c.name}  className="ellipsis-1" />
              </ListItem>
            ))
          }
          <section className="mega-menu h-100" elevation={5}>
            <div className="is-grid grid-auto-1">
              <article className="mega-menu-left is-grid grid-3 p-4">
                  {
                    setcurrentCategory.children && setcurrentCategory.children.map((_c,i)=>(
                      <div key={i} >
                          <h4>{_c.name}</h4>
                          <ul>
                            {
                              _c.children &&  _c.children.map((x,i)=>(
                                <li key={i}><a href='#'>{x.name}</a> </li>
                              ))
                            }
                          </ul>
                      </div>
                    ))
                  }
              </article>
              <article className="mega-menu-right-side" >
                <img className="w-100" src="https://i.picsum.photos/id/1036/200/300.jpg?hmac=VF4u-vITiP0ezQiSbE3UBvxHDFf8ZqJDycaAIoffsCg" />
              </article>
            </div>
          </section>
        </List>
     
      </div> 
    )
  // return data.rates.map(({ currency, rate }) => (
  //   <div key={currency}>
  //     <p>
  //       {currency}: {rate}
  //     </p>
  //   </div>
  // ));
}
function Index() {
  const [products, setproducts] = useState([]);
  // const [, set] = useState([]);
  const [categories] = useState(data);
  const [category  , setcategory  ] = useState({});
  const [toggleCat , settoggleCat ] = useState(false)
  React.useEffect(() => {
    // const variables = {
    //   first: 15,
    //   query: '',
    //   // sortKey: "BEST_SELLING",
    //   reverse: false
    // }
   
    // Api.fetchProducts(variables)
    
  }, [])

  return (
    <>
      <Head>
        <title>WeVente | HOME </title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Layout className='home-page'>
        
        <div className="home-banner">
          <a href="https://www.aliexpress.com/" style={{backgroundImage: "url(&quot;//ae01.alicdn.com/kf/He156f64ad1cd4af396a27cd01076b6b6Y.jpg_Q90.jpg_.webp&quot;)"}} data-spm-anchor-id="a2g0o.home.100003.1">&nbsp;</a>
        </div>
        <div className="home-wrapper">
          <section className='pb-4'>
            <div className="container flex relative">
              <article style={{width:"20%"}}>
                <CategoriesTree />
              </article>
              <article style={{width:"62%"}}>
                <Swiper
                  spaceBetween={1}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true }}
                  onSlideChange={() => console.log('slide change')}
                  onSwiper={(swiper) => console.log(swiper)}
                >
                  <SwiperSlide>
                    <img className="w-100" src={('/img/s1.jpg')} alt="#" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img className="w-100" src={('/img/s2.jpg')} alt="#" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img className="w-100" src={('/img/s3.png')} alt="#" />
                  </SwiperSlide>
            
                </Swiper>
              </article>
              <article style={{width:"18%"}}>
                <div style={{height: '50%',backgroundColor:'#fff'}}>
                  <div   elevation={0}>
                    <IconButton type="submit" size="small">
                        {/* <AccountCircleOutlined color="primary"  style={{ fontSize: 38}}  /> */}
                    </IconButton>
                      <h3>Welcome to EcommerceSite</h3>
                      <div p={1}>
                        <Button color="primary" size="small"> Login</Button>
                        <Button color="secondary" size="small"> Register</Button>
                      </div>
                  </div>
                </div>
                <div style={{height: '50%'}}>
                  <img data-src="https://ma.jumia.is/cms/..//cms/000_CFA/BF-JForce.jpg" src="https://ma.jumia.is//cms/000_CFA/BF-JForce.jpg" className="w-100" alt="BF_JForce_FR"/>
                </div>
              </article>
            </div>
          </section>
          <section className="py-5" style={{background:'url("img/bg-pack.jpg")'}}>
            <div className="container is-grid grid-with-img">
              <article className="box box-dark box-with-bg">
                  <div className="box-header flex v-center my-2 mx-3">
                    <h3 className=" w-100"> 
                    {/* <ExchangeRates />   */}Collections
                    </h3>
                    <div className="see-all right">
                      <ButtonBase className="btn py-2 px-3 round-100 text-nowrap" size="small">See all</ButtonBase>
                    </div>
                  </div>
                  <div className="divider" />
                  <div className="is-grid grid-6 grid-md-5 grid-sm-2 gap py-3">
                    {
                      products && products.slice(0,6).map((product,i)=>
                      {
                        // const images = product.images.edges.map(({ node }) => node)
                        return (<ProductCard
                                key={i + product.id}
                                className="product-item"
                                product={product}
                            />   )
                      })
                    }
                  </div>
              </article>
            </div>
          </section>
          <section className='py-4' style={{backgroundColor:"#eee"}}>
            <div className="container is-grid grid-2 grid-sm-1 gap-1 ">
              <article className="box">
                  <div className="flex v-center my-2 mx-3">
                    <h3 className=" w-100"> 
                      Collections 
                    </h3>
                    <div className="see-all right">
                      <ButtonBase className="btn py-2 px-3 round-100 text-nowrap" size="small">See all</ButtonBase>
                    </div>
                  </div>
                  <div className="divider" />
                  <div className="is-grid grid-5 grid-md-3 grid-sm-2 gap grid-with-img p-2">
                    {
                      products && products.slice(0,7).map((product,i)=>
                      {
                        const images = product.images.edges.map(({ node }) => node)
                        return (<SimpleProductCard  product={{id:product.id,handle:product.handle,media:images[0].src}} key={i} />)
                      })
                    }
                  </div>
              </article>
              <article className="box">
                  <div className="flex v-center my-2 mx-3">
                    <h3 className=" w-100"> 
                      Collections 
                    </h3>
                    <div className="see-all right">
                      <ButtonBase className="btn py-2 px-3 round-100" size="small">See all</ButtonBase>
                    </div>
                  </div>
                  <div className="divider" />
                  <div className="is-grid grid-5 grid-md-3 grid-sm-2 gap grid-with-img p-2">
                    {
                      products && products.slice(0,7).map((product,i)=>
                      {
                        const images = product.images.edges.map(({ node }) => node)
                        return (<SimpleProductCard  product={{id:product.id,handle:product.handle,media:images[0].src}} key={i} />)
                      })
                    }
                  </div>
              </article>
            </div>
          </section>
          <section className="py-4" style={{background:'url("img/bg-pack.jpg")'}}>
            <div className="container is-grid grid-with-img">
              <article>
                  <div className="flex v-center my-2 mx-3">
                    <h3 className=" w-100"> 
                    </h3>
                    <div className="see-all right">
                      <ButtonBase className="btn py-2 px-3 round-100 text-nowrap" size="small">See all</ButtonBase>
                    </div>
                  </div>
                  <div className="divider" />
                  <div className="is-grid grid-6 grid-md-5 grid-sm-2 gap p-3">
                    {
                      products && products.slice(0,6).map((product,i)=>
                      {
                        // const images = product.images.edges.map(({ node }) => node)
                        return (<ProductCard
                                key={i + product.id}
                                className="product-item"
                                product={product}
                            />   )
                      })
                    }
                  </div>
              </article>
            </div>
          </section>       
          <section className="py-4">
            <div className="container is-grid grid-2 grid-sm-1">
              <div m={1} className="rounded flex" style={{ overflow:'hidden'}}>
                <img className="w-100" src={('/img/b1.jpg')} alt="#" />
              </div>
              <div m={1} className="rounded flex" style={{ overflow:'hidden'}}>
                <img className="w-100" src={('/img/b2.jpg')} alt="#" />
              </div>
            </div>
          </section>
          <section className="py-4" style={{backgroundColor:"#eee"}}>
            <div className="container is-grid grid-with-img">
              <article>
                  <div className="flex v-center my-2 mx-3">
                    <h3 className=" w-100"> 
                      Collections 
                    </h3>
                    <div className="see-all right">
                      <ButtonBase className="btn py-2 px-3 round-100 text-nowrap" size="small">See all</ButtonBase>
                    </div>
                  </div>
                  <div className="divider" />
                  <div className="is-grid grid-6 grid-md-5 grid-sm-2 grid-with-img gap">
                    {
                      products && products.slice(0,9).map((product,i)=>
                      {
                        const images = product.images.edges.map(({ node }) => node)
                        return (<SimpleProductCard  product={{id:product.id,handle:product.handle,media:images[0].src}} key={i} />)
                      })
                    }
                  </div>
              </article>
            </div>
          </section>
          <section className="py-4" style={{background:'url("img/bg-rgb.jpg")'}}>
            <div className="container is-grid grid-auto-1 grid-md-1 gap-1">
              <article className="box blur">
                  <div className="flex v-center my-2 mx-3 text-white">
                    <h3 className=" w-100"> 
                      Collections 
                    </h3>
                    <div className="see-all right">
                      <ButtonBase className="btn py-2 px-3 round-100 text-nowrap" size="small">See all</ButtonBase>
                    </div>
                  </div>
                  <div className="divider" />
                  <div className="is-grid grid-6 grid-md-5 grid-sm-2 grid-with-img gap p-3">
                    {
                      products && products.slice(0,8).map((product,i)=>
                      {
                        const images = product.images.edges.map(({ node }) => node)
                        return (<SimpleProductCard  product={{id:product.id,handle:product.handle,media:images[0].src}} key={i} />)
                      })
                    }
                  </div>
              </article>
              <article className="is-grid grid-3 grid-md-2 grid-sm-2  gap" style={{width: 300}}>
                {
                  products && products.slice(0,9).map((product,i)=>
                  {
                    const images = product.images.edges.map(({ node }) => node)
                    return (<SimpleProductCard  product={{id:product.id,handle:product.handle,media:images[0].src}} key={i} />)
                  })
                }
              </article>
            </div>
          </section>
          <section className="py-4" style={{backgroundColor:"#fff"}}>
            <div className="container is-grid grid-with-img">
              <article>
                  <div className="flex v-center my-2 mx-3">
                    <h3 className=" w-100"> 
                      Collections 
                    </h3>
                    <div className="see-all right">
                      <ButtonBase className="btn py-2 px-3 round-100 text-nowrap" size="small">See all</ButtonBase>
                    </div>
                  </div>
                  <div className="divider" />
                  <div className="is-grid grid-6 grid-md-5 grid-sm-2 grid-with-img gap">
                    {
                      products && products.slice(0,9).map((product,i)=>
                      {
                        // const images = product.images.edges.map(({ node }) => node)
                        return (<ProductCard
                                key={i + product.id}
                                className="product-item"
                                product={product}
                            />   )
                      })
                    }
                  </div>
              </article>
            </div>
          </section>
          
        </div>
      </Layout>
    </>
  )
}
export default Index;
