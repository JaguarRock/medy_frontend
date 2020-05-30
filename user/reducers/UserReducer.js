import {combineReducers} from 'redux';
import {USERBAG_AVAILABLE, ADD_USERBAG, UPDATE_USERBAG, DELETE_USERBAG, SIGNIN_USERBAG} from '../useractions/userBag'

let userdataState = {userBags : []} ;

const userReducer = (state = userdataState, action) => {
    switch (action.type){
        case ADD_USERBAG:
            let {userBag} = action.data;
            let clone = JSON.parse(JSON.stringify(state.userBags));
            clone.unshift(userBag);

            return {...state, userBags: clone};

        case USERBAG_AVAILABLE:
            let {userBags} = action.data;

            return {...state, userBags};

        case UPDATE_USERBAG: {
            let {userBag} = action.data;
            let clone = JSON.parse(JSON.stringify(state.userBags));
            const index = clone.findIndex((obj) => obj.id === userBag.id);
            if (index !== -1) clone[index] = userBag;

            return {...state, userBags:clone};
        }

        case DELETE_USERBAG:{
            let {_id} = action.data;
            let clone = JSON.parse(JSON.stringify(state.userBags));
            const index = clone.findIndex((obj) => obj._id === _id);
            if (index !== -1) clone.splice(index, 1);

            return {...state, userBags: clone};
        }

        default : 
            return state;
    }
}
//const rootReducer = combineReducers({userReducer});

export default userReducer;

