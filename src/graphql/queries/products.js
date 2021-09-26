import {gql} from '@apollo/client';

const FETCH_PRODUCTS_QUERY = gql`
    query products($first:Int!, $query:String!,$after: String,$sortKey: ProductSortKeys,$reverse : Boolean) {
        products(first: $first, query: $query,after:$after , sortKey: $sortKey, reverse: $reverse) {
        edges {
            cursor
            node {
            id
            handle
            createdAt
            images(first: 50) {
                edges {
                node {
                    src
                    id
                    altText
                    originalSrc
                }
                }
            }
            onlineStoreUrl
            productType
            publishedAt
            tags
            title
            totalInventory
            vendor
            variants(first: 50) {
                edges {
                node {
                    available
                    availableForSale
                    compareAtPrice
                    currentlyNotInStock
                    id
                    price
                    quantityAvailable
                    requiresShipping
                    sku
                    title
                    selectedOptions {
                    name
                    value
                    }
                    image {
                    src
                    }
                }
                }
            }
            }
        }
        pageInfo {
            hasNextPage
            hasPreviousPage
        }
        }
    }
`;
export default FETCH_PRODUCTS_QUERY