import React, { useState, createContext } from 'react';

// Crear el contexto
export const SelectedAssistantsContext = createContext();

// Proveedor del contexto
export const SelectedAssistantsProvider = ({ children }) => {
  const [selectedAssistants, setSelectedAssistants] = useState([]);

  return (
    <SelectedAssistantsContext.Provider value={{ selectedAssistants, setSelectedAssistants }}>
      {children}
    </SelectedAssistantsContext.Provider>
  );
};
