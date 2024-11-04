import React, { useState } from 'react';
import Assignments from './assignments';
import Candidates from './candidates';
import { candidatesBySubject } from '../assets/mockData';

const Layout = () => {
    const [selectedSubject, setSelectedSubject] = useState('Arquitectura de Computadores');

    const handleSubjectChange = (subject) => {
        setSelectedSubject(subject);
    };

    return (
        <div className='Content'>
            <Assignments onSubjectChange={handleSubjectChange} />
            <Candidates selectedSubject={selectedSubject} candidatesBySubject={candidatesBySubject} />
        </div>
    );
};

export default Layout;