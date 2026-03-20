import React from 'react'
import Hero from './components/Hero'
import Sectwo from './components/Sectwo'
import Slider from './components/Slider'

function App() {

  return (
    <>
   <Hero />
   <Slider sliderText={['CREATIVE FRONT END DEVELOPER','CREATIVE Digital Artist/Illustrator']}/>
    <Sectwo /> 
   <Slider sliderText={['MY PREVIOUS WORKS','MY PREVIOUS WORKS']}/>

    </>
  )
}

export default App
