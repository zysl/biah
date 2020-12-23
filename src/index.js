import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store/index';

ReactDOM.render(
  <Provider store={ store }>
    <BrowserRouter>
    	<Suspense fallback={<div>Loading...</div>}>
     	<App/>
		 </Suspense>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
