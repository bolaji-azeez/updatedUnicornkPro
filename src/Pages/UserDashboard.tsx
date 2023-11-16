import React from 'react'
import { DashboradLayout } from '../Layouts/DashboardLayout'
import { Outlet } from 'react-router-dom'



const UserDashboard:React.FC = () => {
  return (
    <div className=''>
        <DashboradLayout />
        <Outlet />
        <div className=' shadow-lg mt-[100px] ml-[340px] h-[500px]  mr-[40px] text-[grey] rounded-[5px] ]'>
            <div className='h-[400px]   flex justify-around items-center w-[70%] border-2'>
                <div>
                  <div className=' flex  h-[200px] w-[200px] border-2 text-[grey] '>
                  
                  </div>
                  <br />
                     <p>Appoinment Date</p>
                  <div className='h-[40px] flex items-center pl-2 w-[200px] border-2'>
                    <input type="date" name="" id="" />
                  </div>

                </div>

                <div>
                <form action="">
                    <h3>Fullname</h3>
                    <div className='h-[40px] w-[200px] flex items-center pl-2 border-2'>
                        <p>Oloyede Desmond</p>
                    </div>

                    <br />
                    <h3>Username</h3>
                    <div className='h-[40px] w-[200px] flex items-center pl-2 border-2'>
                        <p>Oloyede Desmond</p>
                    </div>

                    <br />
                    <h3>Password</h3>
                    <div className='h-[40px] w-[200px] flex items-center pl-2 border-2'>
                        <p>Oloyede Desmond</p>
                    </div>

                    <br />
                    <h3>Cleaner</h3>
                    <div className='h-[40px] w-[200px] flex items-center pl-2 border-2'>
                        <p>Oloyede Desmond</p>
                    </div>
                </form>
            </div>
               
            </div>

            

        </div>
      
    </div>
  )
}

export default UserDashboard
