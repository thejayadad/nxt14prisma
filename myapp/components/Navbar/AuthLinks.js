
import React from 'react'
import {  signIn, signOut, useSession } from "next-auth/react";
import Link from 'next/link';
import { authOptions } from '@/lib/auth';
import {getServerSession} from "next-auth";
import LogoutButton from '../buttons/LogoutButtons';
import LoginWithGoogle from '../buttons/LoginWithGoogle';


const AuthLinks = async () => {
    const session = await getServerSession(authOptions);


  return (
   <div className='flex items-center gap-2'>
   {!!session && (
            <>
              <Link href={'/post'}>Post</Link>
              <Link href={'/account'}>
                Hello, {session?.user?.name}
              </Link>
              <Link href={'/create'}>Create</Link>
              <LogoutButton />
            </>
          )}
          {!session && (
            <>
            <Link href={'/post'}>Post</Link>
            <LoginWithGoogle />
            </>
          )}
   </div>
  )
}

export default AuthLinks