import {gql} from '@apollo/client';

const FETCH_PRODUCTS_QUERY = gql`
   query paginateProducts(
  $pageSize: Int = 3
  $cursor: String
  # Use GraphQL variables to change the page size, or inject the endCursor as "cursor"
  # to go to the next page!
) {
  site {
    products (first: $pageSize, after:$cursor) {
      pageInfo {
        startCursor
        endCursor
      }
      edges {
        cursor
        node {
          entityId
          name
        }
      }
    }
  }
}
`;
export default FETCH_PRODUCTS_QUERY