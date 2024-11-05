import React, { useState, useEffect } from 'react';
import { candidatesBySubject } from '../assets/mockData';
import PreliminaryList from './PreliminaryList';
import SelectedList from './SelectedList';
import CandidateDetailsModal from './CandidateDetailsModal'; // Import the new modal component
import '../stylesheets/Candidates.css';

function Candidates({ selectedSubject }) {
  const [postulantes, setPostulantes] = useState(candidatesBySubject[selectedSubject] || []);
  const [seleccionados, setSeleccionados] = useState([]);
  const [candidatoSeleccionado, setCandidatoSeleccionado] = useState(null); // State to track selected candidate for more info

  useEffect(() => {
    setPostulantes(candidatesBySubject[selectedSubject] || []);
    setSeleccionados([]); // Reset selected candidates when the subject changes
  }, [selectedSubject]);

  const seleccionarPostulante = (id) => {
    const candidato = postulantes.find((postulante) => postulante.id === id);
    setPostulantes(postulantes.filter((postulante) => postulante.id !== id));
    setSeleccionados([...seleccionados, candidato]);
  };

  const quitarPostulante = (id) => {
    const candidato = seleccionados.find((seleccionado) => seleccionado.id === id);
    setSeleccionados(seleccionados.filter((seleccionado) => seleccionado.id !== id));
    setPostulantes([...postulantes, candidato]);
  };

  const mostrarMasInformacion = (id) => {
    const candidato = postulantes.find((postulante) => postulante.id === id) ||
                      seleccionados.find((seleccionado) => seleccionado.id === id);
    setCandidatoSeleccionado(candidato);
  };

  const cerrarMasInformacion = () => {
    setCandidatoSeleccionado(null);
  };

  return (
    <div className="candidates">
      <PreliminaryList postulantes={postulantes} onSelect={seleccionarPostulante} onMoreInfo={mostrarMasInformacion} />
      <SelectedList seleccionados={seleccionados} onRemove={quitarPostulante} onMoreInfo={mostrarMasInformacion} />
      {candidatoSeleccionado && (
        <CandidateDetailsModal candidato={candidatoSeleccionado} onClose={cerrarMasInformacion} />
      )}
    </div>
  );
}

export default Candidates;