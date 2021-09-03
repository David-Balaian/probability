import { compose, createStore } from 'redux';
import rootReducer from './rootReducer';

  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const enhancer = composeEnhancer();

  const store = createStore(rootReducer, enhancer);

  export default store;