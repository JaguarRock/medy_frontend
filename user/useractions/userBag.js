export const USERBAG_AVAILABLE = 'USERBAG_AVAILABLE'
export const ADD_USERBAG = 'ADD_USERBAG'
export const UPDATE_USERBAG = 'UPDATE_USERBAG'
export const DELETE_USERBAG = 'DELETE_USERBAG'
export const SIGNIN_USERBAG = 'SIGNIN_USERBAG'

export const getUserBags = (userBags) => ({
    type : USERBAG_AVAILABLE,
    data : {userBags}
});

export const addUserBag = (userBag) => ({
    type : ADD_USERBAG,
    data : {userBag}
});

export const updateUserBag = (userBag) => ({
    type : UPDATE_USERBAG,
    data : {userBag}
});

export const deleteUserBag = (_id) => ({
    type : DELETE_USERBAG,
    data : {_id}
});

export const signinUserBag = (userBag) => ({
    type : SIGNIN_USERBAG,
    data : {userBag}
})