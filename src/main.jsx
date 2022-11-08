import React from 'react';
import ReactDOM from 'react-dom/client';
import "swiper/css/bundle";
import App from './App';
import ContextProvider from './Context/ContextProvider';
import './index.css';
import "./styles.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <App/>
    </ContextProvider>
  </React.StrictMode>
)
