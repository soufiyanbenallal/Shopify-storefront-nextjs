import { ApolloClient, InMemoryCache,gql } from '@apollo/client';
import FETCH_PRODUCTS_QUERY from '../graphql/queries/test'
import FETCH_PRODUCT_BY_HANDLE_QUERY from '../graphql/queries/singleProduct'

// uri: 'https://mazzure.myshopify.com/api/2021-01/graphql.json',
// headers: {'X-Shopify-Storefront-Access-Token': '15700cabff6d0e751066e1805dfc6a50'},gv7u1eso7n
// const client = new ApolloClient({
//   uri: 'https://buybutton.store/graphql',
//     credentials: 'include',
//     mode: 'cors',
//     headers: { 'Content-Type': 'application/json',
//              'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJlYXQiOjIwMDAwMDAwMDAsInN1Yl90eXBlIjoyLCJ0b2tlbl90eXBlIjoxLCJjb3JzIjpbImh0dHBzOi8vYmlnY29tbWVyY2UuZ2l0aHViLmlvIl0sImNpZCI6MSwiaWF0IjoxNTY5NzkxNjk1LCJzdWIiOiI3bGp3YzR3d2J6d284NG9rZ2N6cnBzZzN4bGFicDNkIiwic2lkIjo5OTkzMzE3ODQsImlzcyI6IkJDIn0.oZ8kz7thdpDpLDguig-mP3y_ZBudv-kYq-Xufv1g9giX8XuaVj419zpYvRBS4yGP1Vq7jOa3SeaDWgevlNgegg`},
//   cache: new InMemoryCache()
// })
// https://api.bigcommerce.com/stores/{{STORE_HASH}}/v3/catalog/products


// const client = Client.buildClient({
//   domain: process.env.REACT_APP_DOMAIN,
//   storefrontAccessToken: process.env.REACT_APP_STORE_TOCKEN,
// });curl 'https://wevente2.mybigcommerce.com/graphql' -H 'Accept-Encoding: gzip, deflate, br' -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Connection: keep-alive' -H 'DNT: 1' -H 'Origin: https://developer.bigcommerce.com' -H 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJjaWQiOjEsImNvcnMiOlsiaHR0cHM6Ly9kZXZlbG9wZXIuYmlnY29tbWVyY2UuY29tIl0sImVhdCI6MTYyNDkwMDQ1OSwiaWF0IjoxNjI0NzI3NjU5LCJpc3MiOiJCQyIsInNpZCI6MTAwMTg3Nzg2Nywic3ViIjoiYmNhcHAubGlua2VyZCIsInN1Yl90eXBlIjowLCJ0b2tlbl90eXBlIjoxfQ.bl_62vF-3s2YOpv-pGA4DI4pLC_WurH6gv3yiDPJQPlOsDAjPIKEraMZBRAnwSH4m0GDjfY5_Eqeh25EOloCfA' --data-binary '{"query":"# Get a few products from the catalog\n# Stores in pre-launch or maintenance mode may reject queries.\n# Access from Control Panel > Advanced Settings > Storefront API Playground\n# or browse privately and query against https://buybutton.store/graphql\nquery paginateProducts(\n  $pageSize: Int = 3\n  $cursor: String\n  # Use GraphQL variables to change the page size, or inject the endCursor as \"cursor\"\n  # to go to the next page!\n) {\n  site {\n    products (first: $pageSize, after:$cursor) {\n      pageInfo {\n        startCursor\n        endCursor\n      }\n      edges {\n        cursor\n        node {\n          entityId\n          name\n        }\n      }\n    }\n  }\n}"}' --compressed
export default class Api {
  static fetchProducts = async (variables) => {
    const client = new ApolloClient({
        cache: new InMemoryCache(),
        uri:'https://wevente2.mybigcommerce.com/graphql',
        headers: { 
            "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJjaWQiOjEsImNvcnMiOlsiaHR0cHM6Ly93ZXZlbnRlLmxvY2EubHQiXSwiZWF0IjoxNjM3NjgxNjY0LCJpYXQiOjE2MjU4NjczNzksImlzcyI6IkJDIiwic2lkIjoxMDAxODc3ODY3LCJzdWIiOiJybzhjb25hODJxOWpxZmJ1MjhsZzdlZ3ZmbmtkcDA4Iiwic3ViX3R5cGUiOjIsInRva2VuX3R5cGUiOjF9.4CyAZTSLwRdQYqUWSgKxvcQFf6w0EJn9-YjH9x58-ekLXyi9w6bbg4C7wbDzU1rDSBdTPXs2KPyVar3jgHIv_A"
        }
    })

  client.query({
      query: gql`
        # Explicitly fetch the first 3 levels of the category tree,
        # and get a few fields on each category
        # Stores in pre-launch or maintenance mode may reject queries.
        # Access from Control Panel > Advanced Settings > Storefront API Playground
        # or browse privately and query against https://buybutton.store/graphql
        query CategoryTree3LevelsDeep {
        site {
            categoryTree {
            ...CategoryFields
            children {
                ...CategoryFields
                children {
                ...CategoryFields
                }
            }
            }
        }
        }

        fragment CategoryFields on CategoryTreeItem {
        name
        path
        entityId
        description
        image {
        
            urlOriginal
            altText
            isDefault 
            }
        }
       `,
  })
      .then(data => console.log(data))
      .catch(error => console.error(error));
  }
  static fetchProductByHandle = async (handle) => {
    // const res = await client.query({
    //   query: FETCH_PRODUCT_BY_HANDLE_QUERY,
    //   variables : {handle}
    // })
  
    return null
  }
}