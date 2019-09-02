import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import AllReducers from './Reducers/AllReducers';

export default function configureStore(initialState={}) {
    return createStore(
      AllReducers,
      initialState,
      applyMiddleware(thunk)
    );
   }