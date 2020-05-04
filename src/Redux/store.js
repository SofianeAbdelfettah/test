import { createStore, combineReducers } from 'redux';
import { reducer } from "redux-form"
import rootReducer from './reducers';

export default createStore(
  combineReducers({
    root: rootReducer,
    form: reducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// add combine reducers + add reducer for visibility
