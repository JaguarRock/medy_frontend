import { combineReducers } from 'redux';
import { MEDICINEBAG_AVAILABLE, ADD_MEDICINEBAG, UPDATE_MEDICINEBAG, DELETE_MEDICINEBAG} from '../actions/medicineBag';

let dataState = { medicineBags: [] };

const dataReducer = (state = dataState, action) => {
    switch (action.type) {
        case ADD_MEDICINEBAG:
            let { medicineBag } = action.data;
            let clone = JSON.parse(JSON.stringify(state.medicineBags));
            clone.unshift(medicineBag);
            return { ...state, medicineBags: clone};
        
        case MEDICINEBAG_AVAILABLE:
            let { medicineBags } = action.data;

            return { ...state, medicineBags };
        
        case UPDATE_MEDICINEBAG: {
            let { medicineBag } = action.data;
            let clone = JSON.parse(JSON.stringify(state.medicineBags));
            const index = clone.findIndex((obj) => obj.id === medicineBag.id);
            if (index !== -1) clone[index] = medicineBag;

            return { ...state, medicineBags: clone};
        }

        case DELETE_MEDICINEBAG: {
            let { id } = action.data;

            let clone = JSON.parse(JSON.stringify(state.medicineBags));

            const index = clone.findIndex((obj) => obj.id === id);
            if (index !== -1) clone.splice(index, 1);

            return {...state, medicineBags: clone};
        }

        default:
            return state;
    }
};

const rootReducer = combineReducers({dataReducer});

export default rootReducer;