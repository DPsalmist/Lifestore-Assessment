import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

// setup appollo client to fetch data from the backend
const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
  cache: new InMemoryCache(),
}); 

client.query({
  query: gql`
  {
    allProducts {
        id
        name
        description
        price
        image
    }
}
`,
})
.then((result) => console.log(result))
.catch(error => console.error('These are the errors: ', error));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,

);

reportWebVitals();
