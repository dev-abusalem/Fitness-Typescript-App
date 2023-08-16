import Link from 'next/link';
import React , {ReactNode} from 'react'

const Button = ({ children, className , url }: { children: ReactNode; className: string ; url: string }) => {
    return <Link href={url} className={`${className ? className : ""} w-full py-3 px-8 text-center font-semibold uppercase bg-indigo-300 hover:bg-indigo-800 duration-100 border border-indigo-800 pt-4 rounded text-indigo-900 hover:text-white `}>{children}</Link>;
  };
  

export default Button