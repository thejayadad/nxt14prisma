import React from 'react';
import Logo from '../Logo';
import CreateExercise from './CreateExercise';

const NoWorkoutsMessage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Logo size={240} className=" mb-4" />

      <p className="text-lg text-gray-800 mb-4 text-center font-mono">
        Looks like there are no workouts available right now. <br />
        Why not be the first to share your exercise journey?
      </p>

      <CreateExercise />
    </div>
  );
};

export default NoWorkoutsMessage;
