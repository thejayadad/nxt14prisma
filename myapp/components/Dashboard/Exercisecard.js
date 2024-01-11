import Link from 'next/link';
import React from 'react';

const Exercisecard = ({ id, name, desc, duration, date, color, userEmail }) => {
  return (
    <div key={id} className="collapse collapse-arrow border border-primary roundedmb-4">
      <input type="radio" name="exercise-accordion" id={`exercise-${id}`} /> 
      <div className="collapse-title text-xl font-medium font-mono text-gray-800">
        <label htmlFor={`exercise-${id}`}>{name}</label>
      </div>
      <div className="collapse-content flex flex-col text-gray-600 mt-2">
        <span>{desc}</span>
        <span>Duration: {duration} mins</span>
        <span>Date: {date}</span>
        <Link href={`/user/${userEmail}`} className="text-blue-500 hover:underline">
          {userEmail}
        </Link>
      </div>
    </div>
  );
};

export default Exercisecard;
