import React, { createContext, useReducer} from 'react';

import AppReducer from './AppReducer';
import axios from 'axios';

const initialState = {
    users:[],
    loading: true,
    error:null
};


export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    async function getUsers(){
        try {
            const res = await axios.get('https://intense-falls-04550.herokuapp.com/members');
            console.log(res);
            dispatch({
                type: 'GET_USERS',
                payload: await res.data
                
              });
        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.res.data.error
              });
        }
    }
    async function getUser(id){
        try {
            const res = await axios.get(`https://intense-falls-04550.herokuapp.com/members/?id=${id}`);
            console.log(res);
            dispatch({
                type: 'GET_USER',
                payload: await res.data
                
              });
        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.res.data.error
              });
        }
    }




    return <GlobalContext.Provider value={{
    users : state.users,
    getUsers,
    getUser}}>
        {children}
    </GlobalContext.Provider>
}
