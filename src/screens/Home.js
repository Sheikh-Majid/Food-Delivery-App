import React from 'react'
import { Navbar } from '../components/Navbar/Navbar'
import {Footer} from '../components/Footer/Footer'
import Card from '../components/Card/Card'
import Carousel from './Carousel'

const Home = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Carousel/>
      </div>
      <div className='m-3 '>
         <Card/>
      </div>
       <div className='m-3 '>
         <Card/>
      </div>
       <div className='m-3 '>
         <Card/>
     </div>
      <div>
         <Footer/>
    </div>
    </div>
  )
}

export default Home
