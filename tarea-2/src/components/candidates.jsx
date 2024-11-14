import React, { useState, useEffect, useContext } from 'react';
import { candidatesBySubject } from '../assets/mockData';
import PreliminaryList from './PreliminaryList';
import SelectedList from './SelectedList';
import CandidateDetailsModal from './CandidateDetailsModal';
import CandidatesFilter from './CandidatesFilter'; // Importa el nuevo componente de filtros
import { SelectedAssistantsContext } from '../contexts/SelectedAssistantsContext';
import '../stylesheets/Candidates.css';

function Candidates({ selectedSubject }) {
  const { selectedAssistants, setSelectedAssistants } = useContext(SelectedAssistantsContext);
  const [postulantes, setPostulantes] = useState(candidatesBySubject[selectedSubject] || []);
  const [candidatoSeleccionado, setCandidatoSeleccionado] = useState(null);
  const [orden, setOrden] = useState('');

  useEffect(() => {
    setPostulantes(candidatesBySubject[selectedSubject] || []);
    setSelectedAssistants([]);
  }, [selectedSubject, setSelectedAssistants]);

  useEffect(() => {
    ordenarPostulantes();
  }, [orden]);

  const ordenarPostulantes = () => {
    let ordenados = [...postulantes];
    if (orden === 'nota') {
      ordenados.sort((a, b) => b.grade - a.grade);
    } else if (orden === 'riesgo') {
      const riesgoOrden = { bajo: 1, medio: 2, alto: 3 };
      ordenados.sort((a, b) => riesgoOrden[a.academicRisk] - riesgoOrden[b.academicRisk]);
    } else if (orden === 'status') {
      const statusOrden = { 'previous-assistant': 1, 'meets-requirements': 2, 'other-application': 3 };
      ordenados.sort((a, b) => statusOrden[a.status] - statusOrden[b.status]);
    }
    setPostulantes(ordenados);
  };

  const seleccionarPostulante = (id) => {
    const candidato = postulantes.find((postulante) => postulante.id === id);
    setPostulantes(postulantes.filter((postulante) => postulante.id !== id));
    setSelectedAssistants([...selectedAssistants, candidato]);
  };

  const quitarPostulante = (id) => {
    const candidato = selectedAssistants.find((seleccionado) => seleccionado.id === id);
    setSelectedAssistants(selectedAssistants.filter((seleccionado) => seleccionado.id !== id));
    setPostulantes([...postulantes, candidato]);
  };

  const mostrarMasInformacion = (id) => {
    const candidato = postulantes.find((postulante) => postulante.id === id) ||
                      selectedAssistants.find((seleccionado) => seleccionado.id === id);
    setCandidatoSeleccionado(candidato);
  };

  const cerrarMasInformacion = () => {
    setCandidatoSeleccionado(null);
  };

  return (
    <div className="candidates2">
      <CandidatesFilter orden={orden} onOrdenChange={setOrden} />
      <div className="candidates">
        <PreliminaryList postulantes={postulantes} onSelect={seleccionarPostulante} onMoreInfo={mostrarMasInformacion} />
        <SelectedList seleccionados={selectedAssistants} onRemove={quitarPostulante} onMoreInfo={mostrarMasInformacion} />
        {candidatoSeleccionado && (
          <CandidateDetailsModal candidato={candidatoSeleccionado} onClose={cerrarMasInformacion} />
        )}
      </div>
    </div>
  );
}

export default Candidates;
