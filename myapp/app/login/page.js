import React from 'react'
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import LogoutButton from '@/components/buttons/LogoutButtons'
import LoginWithGoogle from '@/components/buttons/LoginWithGoogle'
import Link from 'next/link'

const LoginPage = async () => {
    const session = await getServerSession(authOptions)
  return (
    <div
    className="flex items-center gap-4 text-sm text-slate-500"
    >
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

export default LoginPage