import React from 'react'


const Sidebar:React.FC = () => {
  return (
    <div className='w-[300px] h-[580px] shadow-lg border-2 text-[white] rounded-[10px] top-5 left-5 bottom-0 bg-[white]    p-5 fixed flex  items-center flex-col
   
    '>

        <h2 className='font-bold text-[white]'>Admin DashBoard</h2>
      <div className='w-[250px] h-[550px] bg-[white] rounded-lg  flex flex-col pt-8 items-center text-[12px] '
      >
      <a href="../admin">
      <div className=' flex items-center h-[40px] w-[170px] bg-[#1239ac] p-[17px] rounded-[5px] shadow-[2xl]'>
        Admin Dashboard
      </div>
      </a>
      

      <br />
       <a href="../user">
       <div className=' flex items-centerh-[40px] w-[170px] bg-[#1239ac] p-[17px] rounded-[5px] shadow-[2xl]' >
        Customer's Dashboard
      </div>
       </a>
      

      <br />
       <a href="../dash">
       <div className=' flex items-center h-[40px] w-[170px] bg-[#1239ac] p-[17px] rounded-[5px] shadow-[2xl]'>
        Worker's Dashboard
      </div>
       </a>
      

      </div>

     
      
    </div>
  )
}

export default Sidebar
