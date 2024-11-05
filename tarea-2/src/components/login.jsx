import React from 'react'

const handleLoginClick = () => {
    console.log("Saliendo de la sesion...");
    alert("Elemento aun no implementado :(");
};

const Layout = () => {
    return (
        <div className='Login'>
            <button 
            onClick={() => handleLoginClick()}>
                Login
            </button>
        </div>
    )
}

export default Layout