// components/Hours.js
import React from 'react';

const Hours = () => {
  const getCurrentHours = () => {
    const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const todayIndex = new Date().getDay();
    const today = days[todayIndex];
    const hours = {
      'Lunes': '10 a.m. - 4 p.m.',
      'Martes': '10 a.m. - 4 p.m.',
      'Miércoles': '10 a.m. - 4 p.m.',
      'Jueves': '10 a.m. - 4 p.m.',
      'Viernes': '10 a.m. - 4 p.m.',
      'Sábado': '9 a.m. - 8 p.m.',
      'Domingo': '9 a.m. - 8 p.m.',
    };
    return { today, hours: hours[today] };
  };

  const { today, hours } = getCurrentHours();

  return (
    <div className="hours">
      <h2>Horas de apertura hoy ({today}):</h2>
      <p>{hours}</p>
    </div>
  );
};

export default Hours;