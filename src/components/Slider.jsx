import React from 'react'

function Slider({ sliderText }) {
  return (
    <>
      <div>

      </div>
      <div className="h-10 sm:h-22 w-full bg-[#7d5028] overflow-hidden flex items-center">

        <div className="flex animate-marquee">
          {/* First copy */}
          <p className="flex items-center whitespace-nowrap tall-text text-[#f1d2ab] font-black tracking-wider text-3xl sm:text-5xl md:text-7xl mr-10">
            <i className="ri-shining-fill text-sm sm:text-4xl"></i>

            {sliderText[0]}
            <i className="ri-shining-fill text-sm sm:text-4xl ml-8"></i>
          </p>
          {/* Duplicate copy */}
          <p className="flex items-center whitespace-nowrap tall-text text-[#f1d2ab] font-black tracking-wider text-3xl sm:text-5xl md:text-7xl mr-10">

            {sliderText[1]}
            <i className="ri-shining-fill text-sm sm:text-4xl ml-8"></i>
          </p>
        </div>

        {/* duplicated for animaotion */}
        <div className="flex animate-marquee">

          <p className="flex items-center whitespace-nowrap tall-text text-[#f1d2ab] font-black tracking-wider text-3xl sm:text-5xl md:text-7xl mr-10">

            {sliderText[0]}
            <i className="ri-shining-fill text-sm sm:text-4xl ml-8"></i>
          </p>
          {/* Duplicate copy */}
          <p className="flex items-center whitespace-nowrap tall-text text-[#f1d2ab] font-black tracking-wider text-3xl sm:text-5xl md:text-7xl mr-10">

            {sliderText[1]}
            <i className="ri-shining-fill text-sm sm:text-4xl ml-8"></i>
          </p>
        </div>
      </div>
    </>
  )
}

export default Slider