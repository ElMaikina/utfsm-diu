import React from 'react'
import User from './user'
import Logo from './logo'
import Login from './login'

const Layout = () => {
    return (
        <div className='NavVar'>
            <User />
            <Logo />
            <Login />
        </div>
    )
}

export default Layout