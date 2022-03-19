import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";
import {
  BrowserRouter as Router
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Auth0Provider
        domain="http://dev-xyt4zujh.us.auth0.com"
        clientId="dt3InxRJdRkzM3rENI1bKLs3Ik7uOLTy"
        redirectUri={window.location.origin}
      >
        <App />
      </Auth0Provider>,
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

