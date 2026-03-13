import React from 'react'

function Hero() {

  const fanart = "https://res.cloudinary.com/dvvsvjpmj/image/upload/v1772979354/fanart_hlhinh.jpg";
  const fanartMobile = "https://res.cloudinary.com/dvvsvjpmj/image/upload/v1773059851/fanart-mobile_g89quo.jpg";

  return (
    <div className='relative w-full md:h-screen shadow-2xl'>

      {/* mobile */}
     <img
  src={fanartMobile}
  className='md:hidden block w-full h-auto object-cover'
  alt="fanart"
/>

      {/* desktop parallax */}
      <div
        className='hidden md:block w-full h-full bg-cover bg-center'
        style={{ backgroundImage: `url(${fanart})` }}
      ></div>

      <div className='absolute inset-0 flex flex-col  justify-center items-center text-center'>
        <div className='text-md sm:text-xl md:text-3xl tracking-[20px] text-red-100'>
          2D ARTIST
        </div>

        <div className='text-3xl sm:text-7xl md:text-9xl tracking-[8px] font-bold
        [text-shadow:6px_3px_0px_rgba(255,255,255,0.3),8px_8px_15px_rgba(0,0,0,0.3)]
        sm:[text-shadow:8px_6px_0px_rgba(255,255,255,0.3),8px_8px_15px_rgba(0,0,0,0.3)]'>
          PORTFOLIO
        </div>
      </div>

    </div>
  )
}

export default Hero