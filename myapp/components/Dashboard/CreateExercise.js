'use client'
import React from 'react'
import {FiPlusCircle} from 'react-icons/fi'
import CreateExerciseForm from './CreateExerciseForm'

const CreateExercise = () => {
  return (
    <div>
<label htmlFor="my_modal_6" className="flex items-center gap-2 links">
    <FiPlusCircle />
    <span>PostWorkOut</span></label>

<input type="checkbox" id="my_modal_6" className="modal-toggle" />
<div className="modal" role="dialog">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Create A Workout</h3>
    <p className="py-4">Share Your Exercise Below</p>
    <CreateExerciseForm />
    <div className="modal-action">
      <label htmlFor="my_modal_6" className="btn bg-red-400 text-black">Close</label>
    </div>
  </div>
</div>
    </div>
  )
}

export default CreateExercise