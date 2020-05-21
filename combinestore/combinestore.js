import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';

import rootReducer from './CombineStoreReducers';

export default createStore(rootReducer, applyMiddleware(thunk));
