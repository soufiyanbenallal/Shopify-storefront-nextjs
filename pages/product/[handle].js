import React, { useState,useEffect } from 'react';
import {
  Box,
  Container,
  Button ,
  Grid,
  IconButton,
  Typography,
  Chip ,
  makeStyles,
  ButtonBase
} from '@material-ui/core';
import { useRouter } from 'next/router'
// import Rating from '@material-ui/lab/Rating';
import SimpleTabs from '../../src/components/product/SimpleTabs';
import Carousel from '../../src/components/product/Carousel';
import RecommendedProducts from '../../src/components/product/RecommendedProducts';
import Api from '../../src/mixins/api';
import Head from 'next/head';
import Layout from '../../src/layouts';


const products = [
  {
    id: 1,
    img:"https://i.picsum.photos/id/672/800/400.jpg?hmac=cmxRiWiQnxEwVdgxWyuCVa615ATtvRUcuPm6Wp4E8Sc",
    title: 'repellendus id ullam',
    price:"10 500.99dh",
    label: 'Dolorem officiis temporibus.'
  }, {
    id: 2,
    img:"https://i.picsum.photos/id/794/800/400.jpg?hmac=Xnw4G0vCSnbbjeT9dN5-BpoxvwePlkptQ1sqC_3Zm30",
    title: 'excepturi consequatur est',
    price:"1000.99dh",
    label: 'Officia non provident dolor esse et neque.'
  }, {
    id: 3,
    img:"https://i.picsum.photos/id/560/800/400.jpg?hmac=YQjmtfa1W97m6SbZjtn6zMeB4EFUsYBSNs6t-uMxqx8",
    title: 'eius doloribus blanditiis',
    price:"8000.99dh",
    label: 'Ut recusandae vel vitae molestiae id soluta.'
  },
];
const ProductLoad = ({classes}) => (
  <div className="wrapper">
    <section className="sidebar" style={{width:'40%'}}>
      <div className="skeleton-content mb-1 s-square"></div>
      <div className="is-grid grid-6">
        <div className="skeleton-content mb-1 s-square"></div>
        <div className="skeleton-content mb-1 s-square"></div>
        <div className="skeleton-content mb-1 s-square"></div>
      </div>
          
    </section>
    <section className="main" style={{width:'60%'}}>

      <Grid container spacing={0}>    
        <Grid item xs={12} md={9}>
          <Box mx={2}>
            <Box >
              <div className="skeleton-content mb-2 s-text-3 w-25"></div>
              <div className="skeleton-content mb-2 s-text-1 w-100"></div>
            </Box>
            <Box mt={2}>
              <Box style={{flex:1,display:'flex'}}>
                {/* <Rating
                  name="simple-controlled"
                  value={3}
                  size="medium"
                  readOnly
                /> */}
                <Typography variant="subtitle2"> &nbsp; &nbsp; <b>0</b> Reviews</Typography>
                <Typography variant="subtitle2"> &nbsp; &nbsp; <b>0</b> orders</Typography>
              </Box>
        
              <Box className={classes.divider} my={2} />
              <Box style={{flex:1,display:'flex'}} mb={2} className="flex-v-center">
                <div className="skeleton-content mr-2 s-text-1 w-25 "></div>
                <div className="skeleton-content mr-2 s-text-2 w-25 "></div>
                <Chip size="small" label="0%"  color="primary"/>
              </Box>
              <Box style={{flex:1,display:'flex'}}>
                <div className="skeleton-content mb-2 s-text-1 w-100"></div>
              </Box>
              <Box>
                <Quantity />
              </Box>
            </Box>

            <Box style={{flex:1,display:'flex',justifyContent: 'space-between'}}>
              <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  startIcon={<ion-icon name="trash-outline"></ion-icon>}
                >
                  Buy Now
                </Button>
              <Button
                  variant="contained"
                  // color="#666666"
                  className={classes.button}
                  startIcon={<ion-icon name="trash-outline"></ion-icon>}
                >
                  Add to Cart
                </Button>
              <Button
                  variant="contained"
                  color="default"
                  className={classes.button}
                  startIcon={<ion-icon name="star-outline"></ion-icon>}
                >
                  0 
                </Button>

            </Box>
          </Box>
        </Grid>

        <Grid item md={3}xs={12}>
          <div>
            <div className="skeleton-content mb-3 s-square"></div>
            <div className="skeleton-content mb-2 s-text-3 s-btn "></div>
          </div>
          <div>
            <div className="skeleton-content mb-3 s-square"></div>
            <div className="skeleton-content mb-2 s-text-3 s-btn "></div>
          </div>
          <div>
            <div className="skeleton-content mb-3 s-square"></div>
            <div className="skeleton-content mb-2 s-text-3 s-btn "></div>
          </div>
        </Grid>
      </Grid>

    </section>
  </div>
)
const Quantity = ({index = 0,max = 1000}) => {
  const [qte, setqte] = useState(index)
  const onKeyDown = (e)=>{
    console.log(e.target.value);
  }
  const decrement =() =>{
    if (qte > 1 ) {
      setqte(q => q - 1 )
    }
  }
  const increment =() =>{
    if (qte < max) {
      setqte(q => q + 1)
    }
  }
  return (
    <Box style={{flex:1,display:'flex'}} my={2}>
      <IconButton aria-label="delete" color="primary" onClick={decrement}>
        <ion-icon name="add-outline"></ion-icon>
        </IconButton>
        <input
          className="standard-qte"
          type="text"
          value={qte}
          onKeyDown={onKeyDown}
          size='1' 
        />
        <IconButton aria-label="delete" color="primary" onClick={increment}>
          <ion-icon name="add-outline"></ion-icon>
        </IconButton>
    </Box>

  )
}
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  productCard: {
    height: '100%'
  },
  divider:{
    width:"100%",
    height:.5,
    backgroundColor:"#ddd"
  }
}));

const ProductSingle = () => {
  const classes = useStyles();
  const [indexVariant,setindexVariant] = useState(0);
  const [product, setproduct] = useState(null)
  const [recommendedProducts, setrecommendedProducts] = useState([])
  const [images, setimages] = useState([])
  const [variants, setvariants] = useState([])
  const router = useRouter()
  const { handle } = router.query

  useEffect(() => {
    console.log(handle);
   Api.fetchProductByHandle(handle).then(({data}) =>{
     const collection = data.productByHandle.collections.edges.map(({ node }) => node) 

     if(collection.length > 0){
       collection[0].products.edges.length > 0 && setrecommendedProducts(collection[0].products.edges.map(({ node }) => node))
     }
     setproduct(data.productByHandle)
     setvariants(data.productByHandle.variants.edges.map(({ node }) => node))
     setimages(data.productByHandle.images.edges.map(({ node }) => node))
   })
  }, [])
  return (
    <>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout className="product-page" title="Product">
      <section >
          <Box mb={3}>
            <IconButton aria-label="delete" color="primary">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </IconButton>
          </Box>
            {
              product  == null 
              ? <ProductLoad classes={classes} /> 
              : (
                <Box className="wrapper">
                  
                  <section className="sidebar" style={{width:'40%'}}>
                  
                    {
                      product  == null 
                      ? 'loading' 
                      :  <Carousel images={images}/>
                    }
                  </section>
                  <section className="main" style={{width:'60%'}}>
                        {
                          product  == null ? 'loading' :(
                            <Grid container spacing={0}>    
                              <Grid item xs={12} md={9}>
                                <Box mx={2}>
                                  <Box >
                                    {variants.length > 0 && <Typography variant="overline"><b>SKU:</b> {variants[indexVariant].title}</Typography>}
                                    <Typography variant="h5" >
                                      {product.title}
                                    </Typography>
                                  </Box>
                                  
                                  <Box mt={2}>
                                    
                                    <Box style={{flex:1,display:'flex'}}>
                                      {/* <Rating
                                        name="simple-controlled"
                                        value={3}
                                        size="medium"
                                        readOnly
                                      /> */}
                                      <Typography variant="subtitle2"> &nbsp; &nbsp; <b>450</b> Reviews</Typography>
                                      <Typography variant="subtitle2"> &nbsp; &nbsp; <b>1000</b> orders</Typography>
                                    </Box>
                              
                                    <Box className={classes.divider} my={2} />
                                    <Box style={{flex:1,display:'flex'}} mb={2}>
                                      <Typography variant="h3" color="secondary"><b>US $349.99</b> </Typography>
                                      <Typography variant="h5" color="textPrimary">&nbsp; &nbsp; US $499.98  &nbsp; &nbsp;</Typography>
                                      <Chip size="small" label="-30%"  color="primary"/>
                                    </Box>
                                    <Box style={{flex:1,display:'flex'}}>
                                      <Typography variant="caption" color="textSecondary">
                                        {product.description}
                                        <br />
                                        {/* {product.descriptionHtml} */}
                                      </Typography>
                                    </Box>
                                    <Box>
                                      <Quantity />
                                    </Box>
                                  </Box>

                                  <Box style={{flex:1,display:'flex',justifyContent: 'space-between'}}>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        className={classes.button}
                                        startIcon={<ion-icon name="star-outline"></ion-icon>}
                                      >
                                        Buy Now
                                      </Button>
                                    <Button
                                        variant="contained"
                                        // color="#666666"
                                        className={classes.button}
                                        startIcon={<ion-icon name="star-outline"></ion-icon>}
                                      >
                                        Add to Cart
                                      </Button>
                                    <Button
                                        variant="contained"
                                        color="default"
                                        className={classes.button}
                                        startIcon={<ion-icon name="star-outline"></ion-icon>}
                                      >
                                        268 
                                      </Button>

                                  </Box>
                                </Box>
                              </Grid>
                    
                              <Grid
                                item
                                md={3}
                                xs={12}
                              >
                                <RecommendedProducts products={recommendedProducts} />

                              </Grid>
                            </Grid>
                          )
                        }
                      </section>
                </Box>
              )
            }
            

          <Box mt={3} className="wrapper">
                <section className="sidebar" style={{width:'25%'}}>
                  <Box mr={1}>
                  <div >
                    <Box p="12px" className="flex v-center">
                      <Typography variant="h5"className=" w-100" component="h2"  >
                        Top Selling Products
                      </Typography>
                      {/* <a href="#"className="see-all" >See all</a> */}
                      <Box className="see-all right">
                        <ButtonBase className="button" size="small">See all</ButtonBase>
                      </Box>
                    </Box>
                    <div className="divider" />
                      <Box m={1}>
                          {
                            products && products.slice(0,4).map((p,i)=>(
                              <Box  xs={3} key={i}>
                                {/* <HorizontalProductCard  product={{id:p.id,media:p.img,price:p.price}} /> */}
                              </Box>
                            ))
                          }
                      </Box>
                  </div>
                </Box>
                </section>
                <section className="main" style={{width:'75%'}}>
                  <SimpleTabs />
                </section>
          </Box>
      </section>
    </Layout>
    </>
 );
};

export default ProductSingle;
