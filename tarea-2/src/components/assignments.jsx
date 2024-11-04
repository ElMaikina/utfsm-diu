import React, { useState } from 'react';
import { candidatesBySubject } from '../assets/mockData';
import '../stylesheets/Assignments.css'; 

function Assignments({ onSubjectChange }) { 
    const subjects = Object.keys(candidatesBySubject).map((subject, index) => ({
        code: `SUBJ${index + 1}`,
        name: subject
    }));

    const [selectedValue, setSelectedValue] = useState(subjects[0].code); 

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
        const selectedSubject = subjects.find(subject => subject.code === event.target.value);
        if (selectedSubject) {
            onSubjectChange(selectedSubject.name);
        }
    };

    return (
        <div className="assignments">
            <select 
                className="assignments__select" 
                value={selectedValue} 
                onChange={handleChange}
            >
                {subjects.map(subject => (
                    <option 
                        key={subject.code} 
                        value={subject.code} 
                        className="assignments__option"
                    >
                        <span className="assignments__icon">&#9656;</span>
                        {subject.name}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Assignments;
