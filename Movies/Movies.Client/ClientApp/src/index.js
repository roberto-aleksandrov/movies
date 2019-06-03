import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'
import { toast } from 'react-toastify';

import configureStore, { history } from './store/configureStore';
import { api, flickrApi, formDataApi }from './api-services';
import { apiConfig, flickrApiConfig, formDataApiConfig } from './api-services/configurations';
import * as serviceWorker from './serviceWorker';

import App from './App';

import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';

const apis = {
   flickrApi: flickrApi(flickrApiConfig),
   ajaxApi: api(apiConfig),
   formDataApi: formDataApi(formDataApiConfig)
};

toast.configure({
   autoClose: 8000,
   draggable: false,
 });

ReactDOM.render(
   <Provider store={configureStore(apis)}> 
      <ConnectedRouter history={history}>
         <App />
      </ConnectedRouter>
   </Provider> 
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
