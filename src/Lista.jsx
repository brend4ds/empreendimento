import React, { useState } from 'react';

function Lista({ turnos, onEdit, onDelete }) {
  const [modoEdicao, setModoEdicao] = useState(null);
  const [novoInicio, setNovoInicio] = useState('');
  const [novoFim, setNovoFim] = useState('');
  const [novosDias, setNovosDias] = useState([]);

  const diasSemana = ['DOMINGO', 'SEGUNDA', 'TERCA', 'QUARTA', 'QUINTA', 'SEXTA', 'SABADO'];

  const iniciarEdicao = (index, turno) => {
    setModoEdicao(index);
    setNovoInicio(turno.inicio);
    setNovoFim(turno.fim);
    setNovosDias(turno.dias);
  };

  const salvarEdicao = (index) => {
    onEdit(index, { inicio: novoInicio, fim: novoFim, dias: novosDias });
    setModoEdicao(null);
  };

  const handleCheckboxChange = (dia) => {
    if (novosDias.includes(dia)) {
      setNovosDias(novosDias.filter((d) => d !== dia));
    } else {
      setNovosDias([...novosDias, dia]);
    }
  };

  return (
    <ul>
      {turnos.map((turno, index) => (
        <li key={index}>
          {modoEdicao === index ? (
            <>
              <input
                type="time"
                value={novoInicio}
                onChange={(e) => setNovoInicio(e.target.value)}
              />
              <input type="time" value={novoFim} onChange={(e) => setNovoFim(e.target.value)} />
              {diasSemana.map((dia) => (
                <label key={dia}>
                  <input
                    type="checkbox"
                    checked={novosDias.includes(dia)}
                    onChange={() => handleCheckboxChange(dia)}
                  />
                  {dia}
                </label>
              ))}
              <button onClick={() => salvarEdicao(index)}>Salvar</button>
              <button onClick={() => setModoEdicao(null)}>Cancelar</button>
            </>
          ) : (
            <>
              {turno.inicio} - {turno.fim} | Dias: {turno.dias.join(', ')}
              <button onClick={() => iniciarEdicao(index, turno)}>Editar</button>
              <button onClick={() => onDelete(index)}>Excluir</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default Lista;
