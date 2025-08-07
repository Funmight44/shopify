import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router';
import { Auth0Provider } from '@auth0/auth0-react';
import { CartProvider } from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Auth0Provider
    domain="dev-7mxdre47q4grkp2o.us.auth0.com"
    clientId="Je2TJNA2EUEWDqiDSbUEwp4b80fSXezDyour-client-id"
    authorizationParams={{
      redirect_uri: "https://shopify001.netlify.app"
    }}
  >
    <CartProvider>
        <BrowserRouter>
           <App />
        </BrowserRouter>
      </CartProvider>
</Auth0Provider>

    

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
