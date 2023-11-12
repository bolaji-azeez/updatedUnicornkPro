import React from 'react'
import {GiHamburgerMenu} from "react-icons/gi"

import Logo from "../../assets/images/logo.790bb351.png"

const Food = () => {
  return (
    <div className='bg-[red] h-screen w-screen pr-52 pl-52 pt-10'>
      <header className='h-[70px] flex justify-between '>
        <div>
        <img
        className='h-[30px] w-[100px] object-cover'
        src={Logo}
        />
        </div>

        <div className='text-[gold] flex justify-between h-[50px] w-[200px] items-baseline'>

          <h2 className='text-[15px] font-semibold cursor-pointer'>
            LOGIN OR SIGN UP
          </h2>
            <div className='h-[30px] w-[30px] text-[GOLD]  text-[40px] cursor-pointer '>
            <GiHamburgerMenu />
            </div>
        </div>
      

      </header>

      <div className='flex justify-between items-baseline'>

      <div className='h-[100px] w-[300px] bg-[white] shadow-md p-5 flex gap-[10px]'>
       
       <div className='text-center flex rounded-[2px] h-[30px] w-[200px] bg-[white] border text-[2px]'>
         <input className='h-[25px] w-[180px] text-[10px] flex text-center'
          type="text" placeholder='please enter your one time token' />
          
       </div>
       <button className='h-[30px] w-[70px] bg-[gold]'> Submit</button>

     </div>
     

     <div className='h-[300px] w-[350px] bg-[white] shadow-md p-5 flex gap-[10px]'>
       <h2 className='font-bold text-[22px]'>Lunch is Ready</h2>

     </div>

      </div>
      

      
      
    </div>
  )
}

export default Food
