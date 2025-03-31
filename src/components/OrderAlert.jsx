import React, { useState } from 'react';
import './styles/OrderAlert.css'; // Asegúrate de tener un archivo CSS para estilos
const OrderAlert = ({ selectedTable }) => {
  const [alertSent, setAlertSent] = useState(false);

  const handleSendAlert = () => {
    const message = `Hola, el cliente en la mesa ${selectedTable} está listo para hacer su pedido.`;
    const whatsappUrl = `https://wa.me/573225904819?text=${encodeURIComponent(message)}`; // Reemplaza con el número del mesero
    
    window.open(whatsappUrl, '_blank'); // Abre WhatsApp en una nueva pestaña
    setAlertSent(true);
  };

  return (
    <button onClick={handleSendAlert} className='call-waiter' disabled={!selectedTable || alertSent}>
      {alertSent ? 'Aviso Enviado' : 'Llamar al Mesero'}
    </button>
  );
};

export default OrderAlert;