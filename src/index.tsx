import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {store} from './store/index';
import App from './components/app/app';
import {allReviews} from './components/offers-review/reviews-mocks';
import {checkAuthAction} from './store/api-actions';

store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App
        reviews={allReviews}
      />
    </Provider>
  </React.StrictMode>
);
