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

      <div className='h-160 w-full '>
        <div className='h-full w-full bg-cover flex p-4 items-center justify-evenly bg-center' style={{ backgroundImage: `url(${bg})` }}>
          <div className='h-11/12  w-1/4  rounded-2xl p-2'></div>
          <div className='h-11/12  w-1/3 space-y-3  rounded-2xl p-2 sm:p-6 md:p-8'>
            <h1 className='text-xl sm:text-3xl md:text-4xl classic-text ]'><span className='border-2 text-[#f1d2ab] font-bold p-2 rounded-4xl '>Yello There </span></h1><br /><h1 className='text-lg sm:text-4xl cool-text'>I am Muhammad <span className='text-[#cf944b] font-black'>Osaf Abbasi</span> </h1>
          </div>
          <div className='h-11/12  w-1/3  rounded-2xl p-2'></div>
        </div>

      </div>

    </>
  )
}

export default Sectwo