import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'; 
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; 
import store from './redux/store'; 

createRoot(document.getElementById('root')).render( 
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
