import React, { useState } from 'react';

function TurnoForm({ onSubmit }) {
  const [inicio, setInicio] = useState('');
  const [fim, setFim] = useState('');
  const [dias, setDias] = useState([]);

  const diasSemana = ['DOMINGO', 'SEGUNDA', 'TERCA', 'QUARTA', 'QUINTA', 'SEXTA', 'SABADO'];

  const handleCheckboxChange = (dia) => {
    if (dias.includes(dia)) {
      setDias(dias.filter((d) => d !== dia));
    } else {
      setDias([...dias, dia]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inicio && fim && dias.length > 0) {
      onSubmit({ inicio, fim, dias });
      setInicio('');
      setFim('');
      setDias([]);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col">
        <label className="text-gray-700 font-semibold">Hora de Início:</label>
        <input
          type="time"
          value={inicio}
          onChange={(e) => setInicio(e.target.value)}
          required
          className="border rounded-md p-2 mt-1"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-gray-700 font-semibold">Hora de Fim:</label>
        <input
          type="time"
          value={fim}
          onChange={(e) => setFim(e.target.value)}
          required
          className="border rounded-md p-2 mt-1"
        />
      </div>
      <div>
        <label className="text-gray-700 font-semibold">Dias da Semana:</label>
        <div className="grid grid-cols-3 gap-2 mt-2">
          {diasSemana.map((dia) => (
            <label key={dia} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={dias.includes(dia)}
                onChange={() => handleCheckboxChange(dia)}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span>{dia.charAt(0).toUpperCase() + dia.slice(1).toLowerCase()}</span>
            </label>
          ))}
        </div>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
      >
        Adicionar Turno
      </button>
    </form>
  );
}

export default TurnoForm;
