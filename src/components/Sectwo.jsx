import React from 'react'

function Sectwo() {
  const bgMobile = 'https://res.cloudinary.com/dvvsvjpmj/image/upload/v1773061468/PR-3-33999-for-bg_npdzxf.jpg';
  const bg = ' https://res.cloudinary.com/dvvsvjpmj/image/upload/v1773061811/Screenshot_2026-03-09_060937_umwvie.png';
  return (
    <>
      <div className='h-10 sm:h-22 w-full bg-[#7d5028] overflow-hidden flex items-center'>
        <p className='animate-[slide_15s_linear_infinite] classic-text ease-in-out whitespace-nowrap text-white font-black tracking-wider text-3xl sm:text-5xl md:text-7xl'>
          CREATIVE FRONT END DEVELOPER
        </p>
      </div>

      <div className='min-h-160 w-full '>
        <div className=' h-full w-full bg-cover bg-center' style={{ backgroundImage: `url(${bg})` }}>
          <div className='h-full w-full flex p-4 items-center justify-evenly '>

            <div className='h-11/12  w-1/4  rounded-2xl p-2'></div>
            <div className='h-11/12  w-1/2 sm:w-1/3 space-y-3  rounded-2xl p-2 sm:p-6 md:p-8'>
              <h1 className='text-sm sm:text-3xl md:text-2xl cool-text '><span className='border-2 text-[#f1d2ab] font-normal p-2 rounded-4xl '>Yello There </span></h1><br /><h1 className='text-lg sm:text-4xl cool-text'>I am Muhammad <span className='text-[#cf944b] font-black'>Osaf Abbasi</span> </h1> <br />
              <p className='cool-text text-[#F3E9DC] font-normal text-[70%] sm:text-sm tracking-tight sm:tracking-wide'>I’m a passionate 2D Digital Artist and Frontend Developer who enjoys creating engaging and creative digital experiences. I love bringing ideas to life through my artwork, animation, and interactive design. Driven by creativity, I explore different ways to blend visual storytelling with modern web experiences. Currently based in Karachi.</p>
            </div>
            <div className='h-11/12  hidden sm:flex  w-1/3  rounded-2xl p-2 '>
            <div className='flex h-full w-full  '>
             <h1 className='cool-text'>EXPERIENCE</h1>
             
             
             </div>
            </div>

          </div>
          <div className='h-60 w-full block sm:hidden '></div>
        </div>
      </div>

    </>
  )
}

export default Sectwo