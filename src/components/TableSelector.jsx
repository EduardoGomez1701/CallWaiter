import React, { useState } from 'react';
import './styles/TableSelector.css'; // Asegúrate de tener un archivo CSS para estilos

const TableSelector = ({ totalTables, onSelectTable }) => {
  const [selectedTable, setSelectedTable] = useState('');

  const handleChange = (event) => {
    const tableNumber = event.target.value;
    setSelectedTable(tableNumber);
    onSelectTable(tableNumber); // Asignar la mesa
  };

  return (
    <div className='table-selector'>
      <label htmlFor="table">Selecciona tu mesa:</label>
      <select id="table" value={selectedTable} onChange={handleChange}>
        <option value="" disabled>Elige una mesa</option>
        {Array.from({ length: totalTables }, (_, index) => (
          <option key={index} value={index + 1}>Mesa {index + 1}</option>
        ))}
      </select>
    </div>
  );
};

export default TableSelector;