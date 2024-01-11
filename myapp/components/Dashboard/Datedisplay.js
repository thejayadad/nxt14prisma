'use client'
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Datedisplay = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <Calendar onChange={handleDateChange} value={selectedDate} />
    </div>
  );
};

export default Datedisplay;
