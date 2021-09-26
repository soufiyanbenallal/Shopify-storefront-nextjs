import {gql} from '@apollo/client';

const ADD_PRODUCTCART_QUERY = gql`
    mutation checkoutCreate($variantId: String!, $quantity: Int!){
    checkoutCreate(input: {lineItems: [{ variantId: $variantId, quantity: $quantity }]}) {
      checkout {
         id
         webUrl
         lineItems(first: 5) {
           edges {
             node {
               title
               quantity
             }
           }
         }
      }
    }
  }
`;
export default ADD_PRODUCTCART_QUERY