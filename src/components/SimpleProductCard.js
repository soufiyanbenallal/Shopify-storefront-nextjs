import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Card,
  CardContent,
  Typography,
  makeStyles
} from '@material-ui/core';
// import {  Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    boxShadow:"none",
    borderRadius:".5rem",
    '&:hover': {
      boxShadow: '0 0 0 0.55px #121212'
    }
  },
  statsItem: {
    alignItems: 'center',
    display: 'flex'
  },
  statsIcon: {
    marginRight: theme.spacing(1)
  },
  image:{
    width: '100%'
  }
}));

const SimpleProductCard = ({ className, product, ...rest }) => {
  const classes = useStyles();
console.log(product);
  return (
    <a to={{
            pathname: "/products/single/" + product.handle
          }}
>
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent style={{padding:0}}>
        <Box
          display="flex"
          justifyContent="center"
        >
          <img
            alt="Product"
            src={product.media}
            className={classes.image}
          />
        </Box>
        {
          product.price && <Box m={1}>
                            <Typography
                                color="textPrimary"
                                align="center"
                                variant="caption"
                              >
                              {product.price}
                            </Typography>
                           </Box>
        }
       
      </CardContent>
    </Card>
  </a>
  );
};

SimpleProductCard.propTypes = {
  className: PropTypes.string,
  product: PropTypes.object.isRequired
};

export default SimpleProductCard;
