import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link para la navegación
import logo from '../assets/logo_compact.png';

const Logo = () => {
    return (
        <div className='Logo'>
            <Link to="/home"> 
                <img src={logo} alt="Logo" />
            </Link>
        </div>
    );
}

export default Logo;
