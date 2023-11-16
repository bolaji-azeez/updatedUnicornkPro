import React from 'react'

const NavBar:React.FC = () => {
  return (
    <div className=' p-2 justify-between border-2 h-[70px] left-[340px] rounded-[5px] text-[grey] shadow-md top-5 right-10 bottom-0  flex items-center fixed '>
      <div className='h-[40px] bg-[white] flex items-center pl-2 w-[250px]  rounded-[10px]'>
         <input className='h-[25px] w-[200px] bg-[white] border-none' 
         type="text" />
      </div>

      <div>
        <p>Monday, 6th March</p>
      </div>

      <div className='flex gap-4 justify-center items-center'>
      <h3>Welcome</h3>
        <div className='h-[30px] w-[30px] rounded-[100%] flex items-center justify-center border-2'>
       
        <p className='text-[12px]'>BA</p>
        </div>
        
      </div>
    </div>
  )
}

export default NavBar
