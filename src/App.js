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
          {/* Enlace a WhatsApp */}
          <p><b>GUARDA NUESTRO NUMERO DE WHATSAPP Y HAZ TU PEDIDO A DOMICILIO</b></p>
          <a href="https://wa.me/+573008079009" target="_blank" rel="noopener noreferrer"> Escríbenos a WhatsApp</a>

          {/* Enlace a Instagram */}
          <p><b>VISITA NUESTRO PERFIL DE INSTAGRAM</b></p>
          <a href="https://www.instagram.com/1543cafebarstq/" target="_blank" rel="noopener noreferrer">Ver Instagram</a>

          {/* Enlace a Instagram */}
          <p>AQUI PODRAS VER NUESTRO MENÚ</p>
          <a href="https://drive.google.com/file/d/1l9i-ynqt5gaWwfC3qqflVDVAhb8vq-7R/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Ver Menú</a> <br></br>
        </div>
      </footer>
    </div>
  );
};

export default App;