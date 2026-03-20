import React from 'react'


function Sectwo() {
  const bgMobile = 'https://res.cloudinary.com/dvvsvjpmj/image/upload/v1773061468/PR-3-33999-for-bg_npdzxf.jpg';
  const bg = ' https://res.cloudinary.com/dvvsvjpmj/image/upload/v1773061811/Screenshot_2026-03-09_060937_umwvie.png';
  const myPic = 'https://res.cloudinary.com/dvvsvjpmj/image/upload/v1773747948/my-pic2_f0mbid.jpg';
  const flipaclip = 'https://yt3.googleusercontent.com/ytc/AIdro_k1GNo8Was1PnT-4ZFqc1YSIJmQaNrKLv3DSBddPpYsTEU=s900-c-k-c0x00ffffff-no-rj';
  const photoshop = ' https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/3840px-Adobe_Photoshop_CC_icon.svg.png';
  const ibis = 'https://cdn.ibispaint.com/movie/624/965/624965897/image624965897.png';
  const vsCode = 'https://mp-cdn.elgato.com/media/5377d183-f8ca-4bea-a9ca-f5b05a252441/Visual_Studio_Code_Mac-thumbnail-optimized-badc1ee0-a11a-49c3-89de-f0ba93f441b1.png';
  return (
    <>
      
   

      <div className='min-h-160 w-full '>
        <div className=' h-full w-full bg-cover bg-center' style={{ backgroundImage: `url(${bg})` }}>
          <div className='h-full w-full  flex p-2 sm:p-4 sm:items-center justify-evenly '>

            <div className='h-full lg:h-11/12  w-1/3 mt-16 sm:mt-0 sm:w-1/4 sm:p-2'>
            <img src={`${myPic}`} alt="MyPic" className=' w-full h-72 rounded-t-full object-cover' />
            </div>

            <div className='h-11/12  w-1/2 sm:w-1/3 space-y-1   rounded-2xl p-2 sm:p-6 md:p-8'>
              <h1 className='text-sm sm:text-3xl md:text-2xl cool-text '><span className='border-2 text-[#f1d2ab] font-normal p-2 rounded-4xl '>Yello There </span></h1><br /><h1 className='text-lg sm:text-4xl cool-text'>I am Muhammad <span className='text-[#cf944b] font-black'>Osaf Abbasi</span> </h1> <br />
              <p className='cool-text text-[#F3E9DC]  text-[60%] sm:text-[12px] tracking-tight sm:tracking-wide'>I’m a passionate 2D Digital Artist and Frontend Developer who enjoys creating engaging and creative digital experiences. I love bringing ideas to life through my artwork, animation, and interactive design. Driven by creativity, I explore different ways to blend visual storytelling with modern web experiences. Currently based in Karachi.</p>
          
          <div className='h-36 mt-4 w-full   py-4'>
          <h1 className='tall-text text-2xl md:text-4xl  tracking-widest font-semibold text-[#f1d2ab]'>Tools<span className='text-[#cf944b] font-black'>/</span>Skills  <i class="ri-shining-fill tall-text text-xl md:text-3xl text-[#cf944b]"></i> </h1>
          <br />
          <div className=' h-14 w-full  flex justify-evenly items-center'>
         <div className='overflow-hidden  h-full w-1/4 '><img src={`${flipaclip}`} alt="flipaclip" className='w-4/5 object-contain h-full rounded-2xl'/></div>
         <div className='overflow-hidden h-full w-1/4 '><img src={`${photoshop}`} alt="flipaclip" className='w-4/5 object-contain h-full rounded-2xl'/></div>
         <div className='overflow-hidden h-full w-1/4 '><img src={`${ibis}`} alt="flipaclip" className='w-4/5 object-contain h-full rounded-2xl'/></div>
         <div className='overflow-hidden h-full w-1/4 '><img src={`${vsCode}`} alt="flipaclip" className='w-4/5 object-cover h-full rounded-2xl'/></div>

          </div>
          </div>
          
            </div>
            <div className='h-11/12  hidden sm:flex  w-1/3  rounded-2xl p-2 '>
              <div className=' w-full min-h-96 p-2 font-semibold '>
                <h1 className='cool-text text-2xl'>EXPERIENCE</h1><br />
                <div className=' flex  flex-col  justify-evenly'>
                <span><p className='cool-text'>    <i class="ri-shining-fill cool-text"></i>  7/2025 – Present <br /><span className='text-[#e0ac6c] font-bold tracking-wider'>Freelance 2D Digital Artist</span></p></span> <br />
                  <p className='text-sm tracking-wide leading-4 text-[#ecdbc6]'>Working as an independent 2D artist creating character-based animations and illustrations for clients.
                    Projects included idle breathing style character animations, focusing on subtle motion, natural posing, and clean looping animation suitable for games and digital media.
                    Worked directly with clients to understand visual requirements, adapt to different art styles, and deliver polished animation assets.</p>
                </div>


               <div className=' flex flex-col mt-8 justify-evenly'>
                <span><p className='cool-text'>    <i class="ri-shining-fill cool-text"></i> 10/2025 – 2/2026<br /><span className='text-[#e0ac6c] font-bold tracking-wider'>Artex Digital — 2D Digital Artist Intern</span></p></span> <br />
                  <p className='text-sm tracking-wide leading-4 text-[#ecdbc6]'>Completed a professional internship as a 2D Digital Artist, contributed in many digital illustration and character artwork for studio projects. Completed 400+ Digital Illustrations ,
Responsibilities included character illustration, visual refinement, and supporting the art team in production-ready assets while maintaining consistency with the studio’s visual style.
Gained hands-on experience working in a collaborative production environment, meeting deadlines, and following professional art pipelines.</p>
                </div>
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