import React,{useContext, useEffect, useState} from 'react'
import {GlobalContext} from '../../context/GlobalContext'

import Users from '../Users/Users.component'
import Pagination from '../Pagination/Pagination.component'
import './Homepage.styles.css'

export const HomePage = () => {
    const {users, getUsers} = useContext(GlobalContext)

    useEffect(() => {
        getUsers();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(6);

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    console.log(users);
        return (
        <div>
            <h3>Users List</h3>
                <ul>
                    {currentUsers.map(user => (<Users key= {user.id} user={user} />))} 
                </ul>
                <Pagination usersPerPage={usersPerPage} totalUsers={users.length} paginate={paginate} />
             
        </div>
    )
}
