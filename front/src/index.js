import './index.css'
import App from './App'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client';
import store from './redux/store.js';


const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);