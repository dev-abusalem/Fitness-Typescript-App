import React , {ReactNode} from 'react'

const Container = ({ children, className }: { children: ReactNode; className: string }) => {
    return <div className={`${className ? className : ""} w-[1300px] mx-auto px-2 py-1 `}>{children}</div>;
  };
  

export default Container