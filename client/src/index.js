import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers'
import mySaga from './sagas'

import App from './containers/App'

import registerServiceWorker from './registerServiceWorker'

import './styles/index.css'

const sagaMidlleWare = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(sagaMidlleWare))

sagaMidlleWare.run(mySaga)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'))
registerServiceWorker()
