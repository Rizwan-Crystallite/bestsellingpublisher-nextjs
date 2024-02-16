import React from 'react';
import Image from 'next/image';



const Slider1 = () => {

    return (
        <>
            <section className='w-full bg-white text-[#1d1d1f] py-4 lg:pt-10'>
                <div className='max-w-7xl lg:max-w-6xl mx-auto text-center items-center justify-center'>

                    <h1 className='font-bold text-6xl mt-12 leading-[60px] sm:text-4xl xs:text-4xl font-secondary'>
                        Your Source for Superior<br></br> Book Writing!
                    </h1>
                    <p className='w-[40%] mx-auto mt-3 md:w-[80%] sm:w-[80%] xs:w-[80%]'>
                        Looking for Book Writing Services? We’ve got you covered! From professional writers to top marketers, we have all your desired answers.
                    </p>
                    <div className='w-[30%] lg:w-[40%] md:w-[60%] sm:w-[70%] xs:w-[80%] mx-auto grid grid-cols-2 grid-rows-1 gap-6 xs:gap-3 py-5 relative'>
                        <button className='bg-[#00C0E4] py-1 text-white border-[#00c0e4] border-[1px] hover:bg-white hover:border-solid hover:border-[1px] hover:text-[#1d1d1f]'>Get started</button>
                        <button className='bg-[#1d1d1f] py-1 text-white border-[#1d1d1f] border-[1px] hover:bg-[#00C0E4] hover:text-[#1d1d1f] hover:border-[1px] hover:border-[#00C0E4]'>Live Chat</button>
                    </div>
                    <div className='mx-auto w-[70%] justify-center items-center text-center hover:-translate-y-1 hover:scale-105 duration-300'>
                        <Image priority quality={95} src='/assets/images/newimg/open-book-with-hard-cover-isolated-white.png' width={1000} height={500} alt='Home Image banner' />
                    </div>

                </div>
            </section>
        </>
    )
}

export default Slider1
