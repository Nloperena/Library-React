import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faShoppingCart, faTimes, faBolt, faBookOpen, faTags, faStar, faStarHalfAlt, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

// The mistake here was not adding all the necessary icons to the library.
// Only faBars and faShoppingCart were added initially, but faStar and faStarHalfAlt were missing.
library.add(faBars, faShoppingCart, faTimes, faBolt, faBookOpen, faTags, faStar, faStarHalfAlt, faArrowLeft, faArrowRight); // Corrected to include all necessary icons

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
