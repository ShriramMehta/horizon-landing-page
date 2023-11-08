import React from 'react'
import { Route, useNavigate } from 'react-router'

const PrivateRoute = ({isLoggedIn,  ...props}) => {
    const navigate = useNavigate();

    if(!isLoggedIn){
        navigate('/login')
        return null
    }
  return <Route {...props}/>
}

export default PrivateRoute