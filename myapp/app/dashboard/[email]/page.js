import CreateExercise from '@/components/Dashboard/CreateExercise'
import Exercisecard from '@/components/Dashboard/Exercisecard'
import NoWorkoutsMessage from '@/components/Dashboard/NoWorkoutsMessage'
import HeadingText from '@/components/HeadingText'
import { getExercises } from '@/lib/data'
import getServerUser from '@/lib/getServerUser'
import Link from 'next/link'
import React from 'react'
import { FiPlusCircle } from 'react-icons/fi'

const Dashboard = async () => {
    const user = await getServerUser()
    const email = user.email
    const exercises = await getExercises()
    console.log("Exercises " + exercises)
    console.log("user " + email)
  return (
    <section className='px-4 py-8'>
        <div className='mx-auto max-w-screen-xl'>
           <div className='flex justify-between items-center'>
           <HeadingText
            title={'Welcome Back'}
            description={email}
           />
           <Link
           className='flex items-center gap-2 links'
           href={`/dashboard/${email}/new`}>
           <FiPlusCircle />
            <span>PostWorkOut</span>
           </Link>
           </div>
           <div className='py-24 flex flex-col gap-8 justify-center'>
          {exercises.length === 0 ? (
            <NoWorkoutsMessage />
          ) : (
            exercises.map((exercise) => (
              <div key={exercise.id} className=''>
              <Exercisecard key={exercise.id} name={exercise.name} duration={exercise.duration} 
                desc={exercise.desc}
                date={exercise.date}
                userEmail={exercise.userEmail}
                />
              </div>
            ))
          )}
          </div>
        </div>
    </section>
  )
}

export default Dashboard