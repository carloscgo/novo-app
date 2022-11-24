import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import configureStore from './utils/store/configureStore';
import history from './utils/store/history';
import { VITE_APP } from './utils/constants';

import App from './containers/App';
import GlobalStyle from './components/GlobalStyle'
import ErrorBoundary from './components/ErrorBoundary';

import './index.scss';

// Create redux store with history
const initialState = {}
const store = configureStore(initialState, history)

document.title = VITE_APP.APP_NAME

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <BrowserRouter>
          <GlobalStyle />
          <App />
        </BrowserRouter>
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>
);
