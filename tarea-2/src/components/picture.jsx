import React from 'react'
import background from '../assets/background.png'

console.log(background);

const Layout = () => {
    return (
        <div className='Picture'>
            <img src={background} alt="Foto" />;
        </div>
    )
}

export default Layout