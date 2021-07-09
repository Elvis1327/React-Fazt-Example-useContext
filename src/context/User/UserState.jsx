import React, {useReducer} from 'react';
import { userReducer } from './userReducer';
import { UserContext } from './UserContext';
import { Profile } from '../../components/Profile';
import { UserList } from '../../components/UserList';
import axios from 'axios';
import { TYPES } from '../types';

export const UserState = () => {

    const initialState = {
        users: [],
        selectedUser: null
    }
    const [userState, dispatch ] = useReducer(userReducer, initialState)
    
    const getUsers = async () => {
        const {data} = await axios.get('https://reqres.in/api/users?page=2');
        const resp  = data.data;
    
        const action = {
            type: TYPES.GET_USERS,
            payload: resp
        };
        dispatch(action)

        
    }   
    const getProfile = async (id) => {
        const {data} = await axios.get(`https://reqres.in/api/users/${id}`);
        const resp = data.data;
        const action = {
            type: TYPES.GET_PROFILE,
            payload: resp
        }
        dispatch(action)
    }

    return (
        <UserContext.Provider value={{
            users: userState.users,
            selectedUser: userState.selectedUser,
            getUsers,
            getProfile
        }}>
            
            <div className="conatainer p-4">
                <div className="row">
                    <div className="col-md-7">
                        <UserList />
                    </div>
                    <div className="col-md-5">
                        <Profile />
                    </div>
                </div>
            </div>
            
        </UserContext.Provider>
    )

}





