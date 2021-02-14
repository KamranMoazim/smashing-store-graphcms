import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import 'bootstrap/dist/css/bootstrap.css';
// import * as serviceWorker from './serviceWorker';

const client = new ApolloClient({
  uri: "https://api-ap-northeast-1.graphcms.com/v2/ckl56x5t8m8p701xsamkaarp7/master"
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

// serviceWorker.unregister();