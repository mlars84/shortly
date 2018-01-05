import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
    link: new
HttpLink('https://api.graph.cool/simple/v1/cjc15huaa1fcw0165423waccb'),
    cache: new InMemoryCache(),
});

const withApolloProvider = Comp => (
    <ApolloProvider client={client}>{Comp}</ApolloProvider>
  );

  ReactDOM.render(
    withApolloProvider(<App />),
    document.getElementById('root'));
