import CreateExerciseForm from '@/components/Dashboard/CreateExerciseForm'
import getServerUser from '@/lib/getServerUser'
import React from 'react'

const NewExercise = async () => {
    const user = await getServerUser()
    const email = user.email
  return (
    <section className='px-4 py-8'>
        <div className='mx-auto max-w-screen-xl'>
            <CreateExerciseForm />
        </div>
    </section>
  )
}

export default NewExercise