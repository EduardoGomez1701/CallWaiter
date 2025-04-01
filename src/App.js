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
      {/* Footer con enlaces a redes sociales */}
      <footer className="footer">
      <p>&copy; 2025 Cafe 1543. Todos los derechos reservados.</p>        
      <div class="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.instagram.com/1543cafebarstq/" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </footer>
    </div>
  );
};

export default App;