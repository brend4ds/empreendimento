import React, { useState } from 'react';
import './App.css';
import Form from './Form';
import Lista from './Lista';

function App() {
  const [turnos, setTurnos] = useState([]);

  // Função para adicionar um novo turno
  const adicionarTurno = (novoTurno) => {
    setTurnos([...turnos, novoTurno]);
  };

  // Função para editar um turno existente
  const editarTurno = (index, turnoEditado) => {
    const turnosAtualizados = turnos.map((turno, i) => (i === index ? turnoEditado : turno));
    setTurnos(turnosAtualizados);
  };

  // Função para remover um turno
  const removerTurno = (index) => {
    const turnosAtualizados = turnos.filter((_, i) => i !== index);
    setTurnos(turnosAtualizados);
  };

  return (
    <div className="App">
      <h1>Gerenciamento de Turnos</h1>
      <Form onSubmit={adicionarTurno} />
      <Lista turnos={turnos} onEdit={editarTurno} onDelete={removerTurno} />
    </div>
  );
}

export default App;
