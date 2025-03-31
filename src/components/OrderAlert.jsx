import React, { useState } from 'react';
import './styles/OrderAlert.css';

const OrderAlert = ({ selectedTable }) => {
  const [alertCount, setAlertCount] = useState(0); // Contador de clics

  const handleSendAlert = () => {
    setAlertCount(alertCount + 1); // Incrementa el contador

    // Mensajes personalizados según el número de envíos
    const message =
      alertCount === 0
        ? `Hola, el cliente en la mesa ${selectedTable} está listo para hacer su pedido.`
        : `El cliente en la mesa ${selectedTable} te necesita. Corre!. Este es el aviso número ${alertCount + 1}.`;

    const whatsappUrl = `https://wa.me/573225904819?text=${encodeURIComponent(message)}`; // Cambia el número al del mesero
    window.open(whatsappUrl, '_blank'); // Abre WhatsApp en una nueva pestaña
  };

  return (
    <button onClick={handleSendAlert} className='call-waiter'>
      {alertCount === 0 ? 'Llamar al Mesero' : `Volver a llamar`}
    </button>
  );
};

export default OrderAlert;