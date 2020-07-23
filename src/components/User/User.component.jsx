import React, {useContext, useEffect} from 'react'
import {GlobalContext} from '../../context/GlobalContext'
import { UserInfo } from '../UserInfo/UserInfo.component';

export const UserPage = ({match}) => {

    const {users, getUser} = useContext(GlobalContext);
    useEffect(() => {
            getUser(match.params.id);
            // eslint-disable-next-line react-hooks/exhaustive-deps
                },[]);
                console.log(users);
        const user = users.find(user => user.id === match.params.id);
                // console.log(user);      
               
    return (
        
            <UserInfo {...user} />
    )
}
