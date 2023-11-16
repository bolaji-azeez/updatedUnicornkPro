import React from 'react'
import { Outlet } from 'react-router-dom'
import { DashboradLayout } from '../Layouts/DashboardLayout'
import {BiCheckboxChecked} from "react-icons/bi"
import {AiOutlineClockCircle} from "react-icons/ai"


const Dashboard:React.FC = () => {
  return (
       
    
    <div className=''>
      <DashboradLayout />
      <Outlet />
      <div className=' mt-[100px] ml-[340px] h-[500px]  mr-[40px] rounded-[5px]'>
       <div className=' h-[300px] bg-[white] rounded-[10px] border-2 p-2'>
          <div className=' rounded-[5px] h-[60px] text-[20px] text-[#1239ac] font-bold flex justify-between items-center  bg-[white] border-2 p-5'>
            
              <div>
                <h2>Orders</h2>
                <p className='font-normal text-[15px]'>200 Total</p>
              </div>
              
                <div className='flex justify-between w-[250px]'>
                  <div>
                  <h2>95</h2>
                  <p className='font-normal text-[15px]'> Done</p>
                </div>

                  <div>
                  <h2>22</h2>
                  <p className='font-normal text-[15px]'>In Progress</p>
                </div>
              </div>


          </div>

          <br />

          <div className='flex justify-between border-y-2 p-2 items-center bg-[white] text-[#1239ac]'>
            <div className='flex justify-between  gap-3  items-center'>
              <div className='h-[20px]  justify-between rounded-sm w-[20px] border text-1'></div>
              <p>Names</p>
            </div>

            <br />

            <div className='flex justify-between gap-20 items-center'>
              <p>Cleaner</p>
              
              <p>Status</p>
            </div>

            <div className='flex justify-between gap-20 items-center'>
              <p>Appointed Data</p>
              
              <p>Finished Date</p>
            </div>

          </div>
               <br />
          <div className='flex justify-between pl-5 pr-5 items-center text-[white] '>
            <div className='flex justify-between  gap-3  items-center'>
              <div className='h-[20px] justify-between rounded-sm w-[20px] border text-1'></div>
              <p className='p-0'>Amara Vera</p>
            </div>
            

            <div className='flex justify-between gap-20 items-center  '>
              
              <div>

              <p>Joy Chika</p>
              </div >
              <div className='flex text-[22px] gap-5'>
              <BiCheckboxChecked/>
              
              <p className='text-[16px]'>Done</p>
              </div>
              
            </div>

            <div className='flex justify-betweeen gap-20 items-center text-center'>
              
              <p>2-2-2012</p>
              
              
              <p>6-2-2012</p>
              
              
              
             
            </div>

            

          </div>

          <div className='flex justify-between pl-5 pr-5 items-center text-[white] text-left '>
            <div className='flex justify-between  gap-3  items-center'>
              <div className='h-[20px] justify-betweenrounded-sm w-[20px] border text-1'></div>
              <p className='p-0'>Uche Kwadoski</p>
            </div>

            <div className='flex justify-between gap-20 items-center '>
              <div>

              <p>Aminu Hassan</p>
              </div >
              <div className='flex text-[18px] gap-5 text-[green]'>
              <AiOutlineClockCircle/>
              
              <p className='text-[16px]'>In Progress</p>
              </div>
              
            </div>

            <div className='flex justify-betweeen gap-20 items-center text-center'>
              
              <p>2-2-2012</p>
              
              
              <p>6-2-2012</p>
              
              
              
             
            </div>

            

          </div>
       </div>
       <br />
       <div className='flex gap-10'>

       
      </div>
      </div>

      
      
    </div>
  )
}

export default Dashboard
