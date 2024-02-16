import React from 'react'
import Image from 'next/image'


const demandingSpecilaist = (props) => {
    return (
        <>
            <div>
                <section className='w-full font-secondary'>
                    {/* <div className='relative'>
                        <div
                            className="absolute xs:hidden md:hidden top-28 right-0 xl:right-0 2xl:right-56 w-[800px] md:w-[750px] h-[630px] bg-no-repeat md:bg-center bg-right"
                            style={{ backgroundImage: "url('/assets/images/newimg/demanding-specialist.png')" }}
                        ></div>
                    </div> */}

                    <div className='container max-w-7xl lg:max-w-6xl mx-auto py-24 grid grid-cols-2 md:grid-cols-1 grid-rows-1 md:px-6 sm:grid-cols-1 sm:px-5 xs:grid-cols-1 xs:grid-rows-1 xs:py-10 xs:px-2 items-center'>

                        <div>
                            <div className='m-5 z-10 relative'>
                                <h6 className='text-[20px] font-semibold mb-3 sm:text-base xs:text-base'>Give Yourself The Experience Of</h6>
                                <h2 className='text-[40px] sm:text-[30px] xs:text-[30px] font-bold leading-tight'>{props.title}
                                </h2>
                                <p className=' text-[16px] pt-3'>{props.desc}</p>
                            </div>
                            <div className='md:mt-[0px] sm:mt-[40px] xs:mt-[40px] relative z-auto' >
                                <div className="container-xl max-w-7xl lg:max-w-6xl justify-center mx-auto ml-5 pr-5 xs:pr-0">
                                    <h3 className='text-white text-[22px] font-normal w-80 bg-[#1d1d1f] py-1 px-5 text-center demandingheading'>
                                        Our Demanded Services
                                    </h3>
                                    <div className="flex xs:w-[100%] xs:flex-none md:grid md:grid-cols-2 xs:grid font-semibold xs:grid-cols-1 gap-x-10 py-4 md:space-x-0 md:px-2 xs:space-x-0 xs:px-4">
                                        <ul className='flex-auto inline-block text-[16px] space-y-3 justify-center items-center xs:text-[16px] xs:space-y-0'>
                                            <li className='flex space-x-3 border-b-[1px] border-solid border-[#989898] py-2'><Image quality={95} src="/assets/images/newimg/color-check1.png" width={25} height={25} alt="eBook Writing" /><h5> E-Book Writing</h5> </li>
                                            <li className='flex space-x-3 border-b-[1px] border-solid border-[#989898] py-2'><Image quality={95} src="/assets/images/newimg/color-check1.png" width={25} height={25} alt="Proofreading Services" /><h5>Proofreading Services</h5></li>
                                            <li className='flex space-x-3 border-b-[1px] border-solid border-[#989898] py-2'><Image quality={95} src="/assets/images/newimg/color-check1.png" width={25} height={25} alt="Book Editing" /><h5>Book Editing</h5></li>
                                            <li className='flex space-x-3 border-b-[1px] border-solid border-[#989898] py-2'><Image quality={95} src="/assets/images/newimg/color-check1.png" width={25} height={25} alt="Book Formatting" /><h5>Book Formatting</h5> </li>
                                            <li className='flex space-x-3 border-b-[1px] border-solid border-[#989898] py-2'><Image quality={95} src="/assets/images/newimg/color-check1.png" width={25} height={25} alt="Video Trailer" /><h5>Video Trailer</h5></li>
                                        </ul>
                                        <ul className='flex-auto inline-block text-[16px] space-y-3 justify-center items-center xs:text-[16px] xs:space-y-0'>
                                            <li className='flex space-x-3 border-b-[1px] border-solid border-[#989898] py-2'><Image quality={95} src="/assets/images/newimg/color-check1.png" width={25} height={25} alt="" /><h5>Audio Book</h5></li>
                                            <li className='flex space-x-3 border-b-[1px] border-solid border-[#989898] py-2'><Image quality={95} src="/assets/images/newimg/color-check1.png" width={25} height={25} alt="" /><h5>Book Cover Designing</h5></li>
                                            <li className='flex space-x-3 border-b-[1px] border-solid border-[#989898] py-2'><Image quality={95} src="/assets/images/newimg/color-check1.png" width={25} height={25} alt="" /><h5>Author's Website</h5></li>
                                            <li className='flex space-x-3 border-b-[1px] border-solid border-[#989898] py-2'><Image quality={95} src="/assets/images/newimg/color-check1.png" width={25} height={25} alt="" /><h5>Book Publishing</h5></li>
                                            <li className='flex space-x-3 border-b-[1px] border-solid border-[#989898] py-2'><Image quality={95} src="/assets/images/newimg/color-check1.png" width={25} height={25} alt="" /><h5>Book Marketing</h5></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='pt-10 sm:px-5 xs:pt-10 '>
                            <Image quality={95} className='relative' src="/assets/images/newimg/demanding-specialist.png" width={800} height={1200} alt='demanding-specialist' />
                        </div>
                    </div>
                    {/* <div className="bg-cover bg-no-repeat -mt-72 md:-mt-72 sm:-mt-48 p-0 h-96 relative z-10" style={{ backgroundImage: "url('/assets/images/newimg/exceptional-list.png')" }}> */}


                </section>

            </div>
        </>

    )
}

export default demandingSpecilaist
