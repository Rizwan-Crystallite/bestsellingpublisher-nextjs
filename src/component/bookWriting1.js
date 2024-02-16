import React from 'react'

import Image from 'next/image'

const bookWriting = (props) => {
    return (
        <>
            <section className=" py-20 sm:py-0 xs:py-10 text-[#1d1d1f] font-secondary">
                {/* <div className='relative'>
          <div
            className="absolute sm:hidden xs:hidden md:top-[500px] top-0 right-0 xl:right-0 2xl:right-56 w-[1500px] md:w-[750px] h-[800px] bg-no-repeat md:bg-center bg-right"
            style={{ backgroundImage: "url('/assets/images/newimg/industry-section.png')" }}
          ></div>
        </div> */}
                <div className="justify-center items-center z-20 relative py-20 md:pt-5 md:pb-[500px] xs:py-5 md:z-20 md:relative" >
                    <div className='max-w-7xl lg:max-w-6xl container mx-auto flex items-center justify-center sm:grid sm:grid-cols-1 sm:px-10 xs:grid-cols-1 md:py-0 md:px-5 xs:px-4 xs:w-[100%]'>
                        <div className='basis-[40%] md:basis-[100%] sm:basis-[100%] xs:basis-[100%]'>
                            <div className="">
                                <h6 className='text-[20px] font-semibold mb-3'>
                                    Are you in pursuit of
                                </h6>
                                <h2 className='text-[40px] font-semibold xs:font-semibold xs:text-[40px] capitalize leading-tight mb-3'>
                                    {props.title}
                                </h2>
                            </div>
                            <p className=' text-[16px] text-[#000] mb-2 leading-6	'>
                                {props.desc}
                            </p>

                            <p className=' text-[16px] text-[#000] mb-4 leading-6	'>
                                {props.descs}
                            </p>
                            <ul className='space-y-3'>
                                <li className='flex space-x-4 '>
                                    <Image quality={95} src="/assets/images/newimg/color-check1.png" alt="color-check" width={25} height={25} className='h-5 w-5' />
                                    <h5 className='font-medium text-[18px] xs:text-[14px]'>
                                        Being published on all online platforms.
                                    </h5>
                                </li>

                                <li className='flex space-x-4'>
                                    <Image quality={95} src="/assets/images/newimg/color-check1.png" alt="color-check" width={25} height={25} className='h-5 w-5' />
                                    <h5 className='font-medium text-[18px] xs:text-[14px]'>An eye-catching cover design.</h5>
                                </li>
                                <li className='flex space-x-4'>
                                    <Image quality={95} src="/assets/images/newimg/color-check1.png" alt="color-check" width={25} height={25} className='h-5 w-5' />
                                    <h5 className='font-medium text-[18px] xs:text-[14px]'>Fast and affordable self-publishing.</h5>
                                </li>
                                <li className='flex space-x-4'>
                                    <Image quality={95} src="/assets/images/newimg/color-check1.png" alt="color-check" width={25} height={25} className='h-5 w-5' />
                                    <h5 className='font-medium text-[18px] xs:text-[14px]'>Additions, revisions, and re-editions!</h5>
                                </li>
                            </ul>
                        </div>
                        <div className="basis-[60%] xs:hidden md:hidden">
                            <Image quality={95} width={1500} height={700} alt='' src="/assets/images/newimg/industry-section.png" className=" top-10 right-0 xs:relative xs:float-none xs:w-[100%] xs:left-0" />
                        </div>
                    </div>


                </div>
            </section>
        </>

    )
}

export default bookWriting
