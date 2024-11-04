import React, { useState } from 'react';


function Assignments() { 
    const [selectedValue, setSelectedValue] = useState('ARQ'); 

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
        if (event.target.value == "ARQ") {
            console.log("Se eligiio Arquitectura de Computadores")
        }
        if (event.target.value == "SIS") {
            console.log("Se eligiio Sistemas Operativos")
        }
    };
    return (
        <select value={selectedValue} onChange={handleChange}>
        <option value="ARQ">INF-XXX Arquitectura de Computadores</option>
        <option value="SIS">INF-XXX Sistemas Operativos</option>
        </select>
    );
}
export default Assignments;