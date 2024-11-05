import React from 'react'

const handleUserClick = () => {
    console.log("Ver informacion de usuario...");
    alert("Elemento aun no implementado :(");
};

const Layout = () => {
    return (
        <div className='User'>
            <button 
            onClick={() => handleUserClick()}>
                Victor Tapir
            </button>
        </div>
    )
}

export default Layout