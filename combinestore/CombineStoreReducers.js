import {combineReducers} from 'redux'
import userReducer from '../user/reducers/UserReducer'
import medicineReducer from '../store/reducers/MedicineReducer'

const rootReducer = combineReducers({user : userReducer, medicine : medicineReducer})

export default rootReducer
