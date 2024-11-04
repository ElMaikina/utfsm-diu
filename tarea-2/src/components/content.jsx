import React from 'react'
import Assignments from './assignments'
import Candidates from './candidates'

const Layout = () => {
    return (
        <div className='Content'>
            <h1>Haga click para elegir la asignatura</h1>
            <Assignments />
            <Candidates />
        </div>
    )
}

export default Layout