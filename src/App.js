import React, { useState } from 'react';
import TableSelector from './components/TableSelector';
import OrderAlert from './components/OrderAlert';
import './App.css'; // Asegúrate de tener un archivo CSS para estilos

const App = () => {
  const [selectedTable, setSelectedTable] = useState('');

  return (
    <div className='container'>
      <div className='card'>
        {/* Agregar el logo aquí */}
        <img 
          src="/logo.png" 
          alt="Logo" 
          className="logo"
        />
        <h1>Bienvenido al Restaurante</h1>
        <TableSelector totalTables={10} onSelectTable={setSelectedTable} />
        {selectedTable && <OrderAlert selectedTable={selectedTable} />}
      </div>
    </div>
  );
};

export default App;