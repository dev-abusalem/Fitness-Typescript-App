"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link"
import { BiSolidUserCircle } from "react-icons/bi"

export default function AuthButton() {
  const { data: session } = useSession();

  console.log(session);



  if (session && session.user) {
    return (
      <>
      <p>{session.user.name}</p>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }else{
    return (
        <>
        <button type="button" className='font-semibold hover:text-indigo-600 duration-100'><BiSolidUserCircle className="inline-block text-2xl mb-1"  /> Login</button>
        </>
      )
  }
  
}