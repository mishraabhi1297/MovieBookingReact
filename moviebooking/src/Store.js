import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import AllReducer from './Reducers/AllReducers';

export default function configureStore(initialState={}) {
    return createStore(
      AllReducer,
      initialState,
      applyMiddleware(thunk)
    );
   }