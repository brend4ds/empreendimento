import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const vetor = [
    {
      inicio: '08:00',
      fim: '12:00',
      dias: ['SEGUNDA', 'TERCA', 'QUARTA', 'QUINTA', 'SEXTA', 'SABADO'],
    },
    {
      inicio: '13:30',
      fim: '17:30',
      dias: ['SEGUNDA', 'TERCA', 'QUARTA', 'QUINTA', 'SEXTA'],
    },
  ];

  const diasSemana = ['DOMINGO', 'SEGUNDA', 'TERCA', 'QUARTA', 'QUINTA', 'SEXTA', 'SABADO'];

  const renderHorario = (dia) => {
    const horarios = vetor
      .filter((horario) => horario.dias.includes(dia))
      .map((horario) => `${horario.inicio} - ${horario.fim}`)
      .join(' e ');

    return horarios || 'fechado';
  };

  return (
    <>
      <div>
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      </div>
      <h1>Empreendimento</h1>
      <div className="card">
        <h2>Horários de Funcionamento</h2>
        <ul>
          {diasSemana.map((dia) => (
            <li key={dia}>
              {dia.charAt(0).toUpperCase() + dia.slice(1).toLowerCase()} | {renderHorario(dia)}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;

