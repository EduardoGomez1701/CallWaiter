import React, { useState } from 'react';
import TableSelector from './components/TableSelector';
import OrderAlert from './components/OrderAlert';
import './App.css'; // Asegúrate de tener un archivo CSS para estilos

const App = () => {
  const [selectedTable, setSelectedTable] = useState('');

  return (
    <div className='container'>
      <div className='card'>
        <h1>Bienvenido al Restaurante</h1>
        {/* Componente para seleccionar la mesa */}
        <TableSelector totalTables={10} onSelectTable={setSelectedTable} />
        {/* Agregar el logo aquí */}
        <img
          src="/logo.png"
          alt="Logo"
          className="logo"
        />
        {/* Mostrar alerta de pedido si hay una mesa seleccionada */}
        {selectedTable && <OrderAlert selectedTable={selectedTable} />}
      </div>
      {/* Footer con enlaces a redes sociales */}
      <footer className="footer">
        <p><b><i>&copy; 2025 <br></br>1543 Cafe. Todos los derechos reservados.</i></b></p>
        <div className="social-links">
          <p><b>Escribenos y haz tu pedido a domicilio</b></p>
          {/* Enlace a WhatsApp */}
          <a href="https://wa.me/+573008079009" target="_blank" rel="noopener noreferrer"> Contectanos en WhatsApp</a>
          <p><b>Visita nuestro perfil de Instagram</b></p>
          {/* Enlace a Instagram */}
          <a href="https://www.instagram.com/1543cafebarstq/" target="_blank" rel="noopener noreferrer">Ver Instagram</a> <br></br>
          {/* Enlace a WhatsApp <p>Aqui podras ver nuestro Menu</p>
          <a href="https://Menu/" target="_blank" rel="noopener noreferrer">Menu1543</a> */}
        </div>
      </footer>
    </div>
  );
};

export default App;