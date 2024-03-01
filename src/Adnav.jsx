import React from 'react'
import { Outlet,Link,useLocation } from 'react-router-dom';
import { Footer } from './Footer';
export const Adnav = () => {

  const value = useLocation()

  console.log(value,'value');
  return (

    <div>
    <div className='flex gap-5  bg-red-800  text-white p-4 justify-between'>
        <div>
        <div className='font-bold'>ADMIN</div>
        </div>
        <div><span className='text-white font-bold font'> BLOOD</span><span className='text-black font-bold'>LINK</span></div>
        <div className='flex flex-wrap gap-4 font1 font-bold'>
        <Link to='/'><div className>HOME</div></Link>
        <div className>LOGOUT</div>  
    </div>
    </div>
    <div className='flex'>

    <div className='bg-white w-[15%] h-[40rem] text-red-800 font-bold pt-20 '>
        <div className='flex gap-5 items-center hover:bg-red-800 p-2 hover:text-white'>
          <Link to={'/admin/adhospital'}>
          <span>HOSPITAL</span>
          </Link>
          </div>
        <div className='flex gap-5 items-center hover:bg-red-800 p-2 hover:text-white'>
        <Link to={'/admin/user'}>
          <span>USER</span>
        </Link>
          </div>
        <div className='flex gap-5 items-center hover:bg-red-800 p-2 hover:text-white'>
          <Link to={'/admin/bloodonor'}>
           <span>BLOOD DONOR</span>
           </Link>
          </div>
        <div className='flex gap-5 items-center hover:bg-red-800 p-2 hover:text-white'>
          <Link to={'/admin/donations'}>
           <span>DONATION</span>
          </Link>
          </div>
        <div className='flex gap-5 items-center hover:bg-red-800 p-2 hover:text-white'>
          <Link to={'/admin/college'}>
          COLLEGE
          </Link>
          </div>
    </div>

    {/* <Footer/> */}
    <div className='w-[100%]'>

    <Outlet/>
    </div>
    </div>
    </div>

  )
}
