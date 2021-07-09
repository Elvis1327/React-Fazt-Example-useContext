import { TYPES } from '../types';

export const userReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case TYPES.GET_USERS:
            return {
                ...state,
                users: payload
            };
        case TYPES.GET_PROFILE:
            return {
                ...state,
                selectedUser: payload
            }
        default:
            return state
    }
}


