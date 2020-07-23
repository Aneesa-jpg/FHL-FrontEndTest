import React from 'react'
import { withRouter } from 'react-router-dom'

import './Users.styles.css'

const Users = ({match,user,history}) => {

    return (
        <>
        <li onClick = {() => history.push(`${match.url}${user.id}`)}>
          {user.real_name}
        </li>
        </>
    )
}

export default withRouter(Users);