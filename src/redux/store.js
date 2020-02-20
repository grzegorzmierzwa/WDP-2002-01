import { combineReducers, createStore } from 'redux';
import initialStoreData from './initialState';

import cartReducer from './cartRedux';
import categoriesReducer from './categoriesRedux';
import productsReducer from './productsRedux';
import modeReducer from './modesRedux';
import compareReducer from './compareRedux';

// define initial state and shallow-merge initial data
const initialState = {
  products: initialStoreData.products,
  tabs: initialStoreData.tabs,
  brands: initialStoreData.brands,
};

// define reducers
const reducers = {
  cart: cartReducer,
  categories: categoriesReducer,
  products: productsReducer,
  mode: modeReducer,
  compare: compareReducer,
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

const combinedReducers = combineReducers(reducers);

// create store
const store = createStore(
  combinedReducers,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
