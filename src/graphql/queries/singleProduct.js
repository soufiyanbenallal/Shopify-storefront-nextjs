import {gql} from '@apollo/client';

const FETCH_PRODUCT_BY_HANDLE_QUERY = gql`
    query products($handle:String!) {
        productByHandle(handle: $handle) {
            availableForSale
            createdAt
            description
            descriptionHtml
            handle
            id
            onlineStoreUrl
            productType
            publishedAt
            tags
            title
            totalInventory
            vendor
            updatedAt
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
            variants(first: 50) {
                edges {
                    node {
                        available
                        compareAtPrice
                        availableForSale
                        currentlyNotInStock
                        id
                        price
                        quantityAvailable
                        requiresShipping
                        sku
                        weight
                        weightUnit
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
            collections(first: 50) {
            edges {
                node {
                id
                handle
                title
                updatedAt
                products(first: 3) {
                    edges {
                    node {
                        id
                        handle
                        title
                        variants(first: 50) {
                            edges {
                                node {
                                    available
                                    compareAtPrice
                                    availableForSale
                                    currentlyNotInStock
                                    id
                                    price
                                    quantityAvailable
                                    requiresShipping
                                    sku
                                    weight
                                    weightUnit
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
                }
                }
            }
            }
        }

    }
`;
export default FETCH_PRODUCT_BY_HANDLE_QUERY