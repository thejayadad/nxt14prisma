'use client'
import { addExercise } from '@/lib/actions';
import React from 'react';
import { FiPlusCircle } from 'react-icons/fi';

const CreateExerciseForm = () => {
  return (
    <div className='flex flex-col'>
      <form
      action={addExercise}
      >
        <div className="mb-4">
          <label className="form_label" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="form_inputs"
            placeholder="Name..."
          />
        </div>

        <div className="flex mb-4">
          <div className="w-1/2 pr-4">
            <label className="form_label" htmlFor="duration">
              Duration
            </label>
            <input
              type="number"
              id="duration"
              className="form_inputs"
              placeholder="Duration..."
            />
          </div>

          <div className="w-1/2 pl-4">
            <label className="form_label" htmlFor="date">
              Date
            </label>
            <input
              type="date"
              id="date"
              className="form_inputs"
              placeholder="Date..."
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="form_label" htmlFor="mood">
            Mood
          </label>
          <input
            type="text"
            id="mood"
            className="form_inputs"
            placeholder="Mood..."
          />
        </div>

        <div className="mb-4">
          <label className="form_label" htmlFor="color">
            Color
          </label>
          <input
            type="text"
            id="color"
            className="form_inputs"
            placeholder="Color..."
          />
        </div>

        <button 
        type='submit'
          style={{ width: '470px'}}
          className='flex btn btn-wide bg-primary text-white'
        >
          <FiPlusCircle />
          <span>Create</span>
        </button>
      </form>
    </div>
  );
};

export default CreateExerciseForm;
