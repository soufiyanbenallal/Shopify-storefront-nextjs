import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import '../styles/scss/theme.scss';
import '../styles/globals.scss'
import '../styles/Home.module.scss'
import '../styles/products.scss'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri:'https://wevente2.mybigcommerce.com/graphql',
  headers: { 
      "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJjaWQiOjEsImNvcnMiOlsiaHR0cHM6Ly93ZXZlbnRlLmxvY2EubHQiXSwiZWF0IjoxNjM3NjgxNjY0LCJpYXQiOjE2MjU4NjczNzksImlzcyI6IkJDIiwic2lkIjoxMDAxODc3ODY3LCJzdWIiOiJybzhjb25hODJxOWpxZmJ1MjhsZzdlZ3ZmbmtkcDA4Iiwic3ViX3R5cGUiOjIsInRva2VuX3R5cGUiOjF9.4CyAZTSLwRdQYqUWSgKxvcQFf6w0EJn9-YjH9x58-ekLXyi9w6bbg4C7wbDzU1rDSBdTPXs2KPyVar3jgHIv_A"
  }
})
export default function MyApp(props) {
  const { Component, pageProps } = props;


  return (
      <ApolloProvider client={client}>
        <React.Fragment>
          <Head>
            <title>My page</title>
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            <script type="module" src="https://unpkg.com/ionicons@5.4.0/dist/ionicons/ionicons.esm.js"></script>
          </Head>
            <Component {...pageProps} />
        </React.Fragment>
      </ApolloProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
