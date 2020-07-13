export const initialState = {
    loading: true,
    medicines: [],
    errorMessage: null
};

export const reducer = (state, action) => {
    switch (action.type) {
        case "SEARCH_MEDICINES_REQUEST":
            return {
                ...state,
                loading: true,
                errorMessage: null
            };
        case "SEARCH_MEDICINES_SUCCESS":
            return {
                ...state,
                loading: false,
                medicines: action.payload
            };
        case "SEARCH_MEDICINES_FAILURE":
            return {
                ...state,
                loading: false,
                errorMessage: action.error
            };
        default:
            return state;
    };
}