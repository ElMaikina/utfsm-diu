import React, { useState, useEffect } from 'react';
import { candidatesBySubject } from '../assets/mockData';
import PreliminaryList from './PreliminaryList';
import SelectedList from './SelectedList';
import '../stylesheets/Candidates.css'; 

function Candidates({ selectedSubject }) {
  const [postulantes, setPostulantes] = useState(candidatesBySubject[selectedSubject] || []);
  const [seleccionados, setSeleccionados] = useState([]);

  useEffect(() => {
    setPostulantes(candidatesBySubject[selectedSubject] || []);
    setSeleccionados([]); // Reset selected candidates when the subject changes
  }, [selectedSubject]);

  const seleccionarPostulante = (id) => {
    const candidatoSeleccionado = postulantes.find((postulante) => postulante.id === id);
    setPostulantes(postulantes.filter((postulante) => postulante.id !== id));
    setSeleccionados([...seleccionados, candidatoSeleccionado]);
  };

  const quitarPostulante = (id) => {
    const candidatoRemovido = seleccionados.find((seleccionado) => seleccionado.id === id);
    setSeleccionados(seleccionados.filter((seleccionado) => seleccionado.id !== id));
    setPostulantes([...postulantes, candidatoRemovido]);
  };

  return (
    <div className="candidates">
      <PreliminaryList postulantes={postulantes} onSelect={seleccionarPostulante} />
      <SelectedList seleccionados={seleccionados} onRemove={quitarPostulante} />
    </div>
  );
}

export default Candidates;
