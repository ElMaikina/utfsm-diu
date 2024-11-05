import React, { useState } from 'react';
import Assignments from './assignments';
import Candidates from './candidates';
import { candidatesBySubject } from '../assets/mockData';

const Layout = () => {
    const [selectedSubject, setSelectedSubject] = useState('Arquitectura de Computadores');
    let prototypeEnded = false;

    const handleSubjectChange = (subject) => {
        setSelectedSubject(subject);
    };

    const handleEnd = () => {
        console.log("Prueba terminada!");
        prototypeEnded = true;
    };

    if (!prototypeEnded) {
        return (
            <div className='Content'>
                <Assignments onSubjectChange={handleSubjectChange} />
                <Candidates selectedSubject={selectedSubject} candidatesBySubject={candidatesBySubject} />

                <div className="finalizar__container">
                    <button 
                    className="finalizar__button"
                    onClick={() => handleEnd()}>
                        Enviar solicitud
                    </button>
                </div>
            </div>
        );
    }
    else {
        return (
            <div className='Content'>
                Prueba Terminada
            </div>
        )
    }
    
};

export default Layout;