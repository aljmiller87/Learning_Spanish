import { createStore, applyMiddleware } from 'redux';
import { mainReducer } from './reducers/index';
import thunk from 'redux-thunk';


export default createStore(mainReducer, applyMiddleware(thunk));