

import React from 'react';
import Image from 'next/image';
const contactusfesc = (props) => {




  return (
    <section className='w-full bg-white text-[#1d1d1f] py-4 font-secondary'>
      <div className='relative -z-0'>
        <div
          className="absolute  md:hidden sm:hidden xs:hidden top-0 right-20 w-[750px] h-[500px] bg-no-repeat bg-right md:bg-center"
          style={{ backgroundImage: "url('/assets/images/newimg/contact-banner.png')" }}
        ></div>
      </div>
      <div className=' container max-w-7xl lg:max-w-6xl mx-auto text-left justify-center items-center py-24 xs:py-10' >
        <div className='gird md:grid sm:grid-cols-1 xs:grid xs:grid-cols-1 items-center' >
          <div className='w-[60%] sm:w-[100%] xs:w-[100%] xs:py-5 xs:px-6 g-2 sm:text-center md:text-center xs:text-center sm:px-10 '>
            <h1 className='w-[70%] md:w-[90%] font-bold leading-[50px] md:mx-auto text-5xl xs:text-3xl  sm:w-[100%] xs:w-[100%]'>
              {props.title}
            </h1>
            <p className='w-[70%] mt-3 sm:w-[100%] xs:w-[100%] md:mx-auto'>
              {props.dec}
            </p>
            <div className='w-[50%] grid grid-cols-2 grid-rows-1 gap-5 py-5 md:mx-auto sm:mx-auto sm:w-[80%] xs:w-[100%]'>
              <button className='bg-[#00C0E4] py-1 border-[1px] border-solid text-white hover:bg-[#1d1d1f] hover:border-solid hover:border-[1px] hover:border-[#1d1d1f] hover:text-white'>Get Started</button>
              <button className='bg-[#1d1d1f] py-1 border-[1px] border-solid text-white hover:bg-[#fff] hover:border-solid hover:border-[1px] hover:border-[#00c0e4] hover:text-[#1d1d1f]'>Live Chat</button>
            </div>
          </div>

          <div className='xl:hidden 2xl:hidden lg:hidden mx-auto justify-center items-center text-center md:pb-0 sm:w-[80%] xs:w-[90%] xs:pb-0 md:mt-12 xs:mt-12 ' >
              <Image quality={95} src={'/assets/images/newimg/contact-banner.png'} width={600} height={600} alt='medium-magazine-writing' />
            </div>
            <div className='mx-auto w-[100%] md:hidden sm:hidden xs:hidden justify-center items-center text-center pb-20 xs:w-[90%] xs:pb-10 ' >

            </div>
        </div>




      </div>

    </section>
  );
};

export default contactusfesc;
