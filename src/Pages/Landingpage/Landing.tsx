import React from 'react'
import Timer from '../../components/Blocks/Timer'
import Header from '../../components/Blocks/Header'
import Card1 from '../../components/Cards/Card1'
import Card2 from '../../components/Cards/Card2'
import Card3 from '../../components/Cards/Card3'
import PaymentCard from '../../components/Cards/PaymentCard'
import Works from '../../components/Cards/Works'
import CountDown from '../../components/Cards/CountDown'
import Services from '../../components/Cards/Services'
import Client from '../../components/Cards/Client'
import Footer from '../../components/Blocks/Footer'
// import Blog from '../../components/Cards/Blog'

const Landing = () => {
  return (
    <div className='bg-[rgb(18,57,172)] w-[100%] min-h-[90vh]'>
      <Timer />
        <Header />
         <Card1 />
        <Card2 />
        <Card3 />
        <Works />
        <CountDown />
        <PaymentCard />
        <Client />
        <Services />
        <Footer />
         
       
        
        
        
        {/* <Blog /> */}



      
    </div>
  )
}

export default Landing
