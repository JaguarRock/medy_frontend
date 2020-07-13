import { createStore, applyMiddleware }from 'redux';
import thunk from 'redux-thunk';

import medicineReducers from './reducers/MedicineReducer';
import openMedicineReducers from './reducers/openMedicineReducer';

export default createStore(medicineReducers, applyMiddleware(thunk));