import { createStore, applyMiddleware }from 'redux';
import thunk from 'redux-thunk';

import medicineReducers from './reducers/MedicineReducer';

export default createStore(medicineReducers, applyMiddleware(thunk));