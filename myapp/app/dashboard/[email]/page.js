import CreateExercise from '@/components/Dashboard/CreateExercise'
import HeadingText from '@/components/HeadingText'
import getServerUser from '@/lib/getServerUser'
import React from 'react'

const Dashboard = async () => {
    const user = await getServerUser()
    const email = user.email
    console.log("user " + email)
  return (
    <section className='px-4 py-8 h-screen'>
        <div className='mx-auto max-w-screen-xl'>
           <div className='flex justify-between items-center'>
           <HeadingText
            title={'Welcome Back'}
            description={email}
           />
           <CreateExercise />
           </div>

        </div>
    </section>
  )
}

export default Dashboard