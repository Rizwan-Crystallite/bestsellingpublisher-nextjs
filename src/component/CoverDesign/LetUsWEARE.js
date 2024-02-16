import React from 'react'
import Image from 'next/image'


const demandingSpecilaist = () => {
    return (
        <>
            <section className="py-[80px] font-secondary md:py-10">
                <div className='container max-w-7xl'>
                    <div className='flex gap-5 sm:grid sm:grid-cols-1 xs:grid xs:grid-cols-1'>
                        <div className='basis-[40%] items-center md:hidden sm:hidden xs:hidden'>
                            <Image quality={95} src='/assets/images/newimg/outstanding-cover.png' width={600} height={300} alt='outstanding-cover' className=' hover:-translate-y-1 hover:scale-110' />
                        </div>
                        <div className='basis-[60%] xs:px-5 md:px-12 md:basis-[100%] sm:px-10'>
                            <div className='w-[90%] md:w-[100%] sm:w-[100%] xs:py-5 xs:w-[100%]'>
                                <h6 className='text-xl font-semibold xs:text-base'>The most immaculate book cover designs</h6>
                                <h1 className='pt-5 font-bold leading-[45px] text-4xl xs:py-4 xs:text-4xl xs:w-[100%] '>
                                    Create an outstanding book cover that stands out
                                </h1>
                                <p className='xs:w-[100%]'>
                                    Our creative designers will work to bring life to your book project with their amazing and artistic creative skill set. The importance of a good book cover cannot be understated. It can make or break your book and therefore it must be handled with priority.
                                </p>
                                <ul className="grid grid-cols-2 xs:grid-cols-1 md:w-[100%] xs:w-[100%] md:mb-10">
                                    <li className='flex gap-4 border-b-2 border-solid border-[#989898] py-3 mr-10 xs:mr-0 md:mr-5'>
                                        <Image quality={95} src="/assets/images/newimg/color-check1.png" width={300} height={300} alt="Checkmark" className="inline-block h-5 w-5 hover:invert-75" />
                                        <p>We provide diverse formats and design types</p>
                                    </li>
                                    <li className='flex gap-4 border-b-2 border-solid border-[#989898] py-3 mr-10 xs:mr-0 md:mr-5'>
                                        <Image quality={95} src="/assets/images/newimg/color-check1.png" width={300} height={300} alt="Checkmark" className="inline-block h-5 w-5 hover:invert-75" />
                                        <p>Customer satisfaction is our driving force.</p>
                                    </li>
                                    <li className='flex gap-4 border-b-2 border-solid border-[#989898] py-3 mr-10 xs:mr-0 md:mr-5'>
                                        <Image quality={95} src="/assets/images/newimg/color-check1.png" width={300} height={300} alt="Checkmark" className="inline-block h-5 w-5 hover:invert-75" />
                                        <p>You are the sole owner of the design once it's delivered.</p>
                                    </li>
                                    <li className='flex gap-4 border-b-2 border-solid border-[#989898] py-3 mr-10 xs:mr-0 md:mr-5'>
                                        <Image quality={95} src="/assets/images/newimg/color-check1.png" width={300} height={300} alt="Checkmark" className="inline-block h-5 w-5 hover:invert-75" />
                                        <p>We are available 24/7 for your assistance.</p>
                                    </li>
                                </ul>
                                <div className='w-[60%] grid md:mx-auto grid-cols-2 grid-rows-1 gap-x-5 py-5 sm:w-[80%] xs:w-[100%]'>
                                    <button className='bg-[#00C0E4] py-1 text-white hover:bg-transparent hover:border-solid hover:border-[1px] hover:border-[#1d1d1f] hover:text-[#1d1d1f] hover:transition-all hover:transform-gpu'>Get Started</button>
                                    <button className='bg-[#1d1d1f] py-1 text-white border-solid border-[#1d1d1f] border-[1px] hover:bg-[#00C0E4] hover:text-[#fff] hover:border-[1px] hover:border-[#00C0E4]'>Live Chat</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default demandingSpecilaist
