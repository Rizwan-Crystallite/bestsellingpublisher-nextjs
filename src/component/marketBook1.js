import React from 'react'
import Image from 'next/image'

// const openZendeskChat = () => {
//     if (window.zESettings) {
//         window.zE('webWidget', 'open');
//     }
// };

const marketBook1 = () => {
    return (
        <>
            <div>
                <section className='w-full'>

                    <div className='container max-w-7xl lg:max-w-6xl mx-auto py-24 md:py-10 grid grid-cols-2 md:grid-cols-1  grid-rows-1 md:px-6 sm:grid-cols-1 sm:w-[90%] sm:py-10 sm:px-3 xs:grid-cols-1 xs:grid-rows-1 xs:py-10 xs:px-3'>
                        <div className='py-16 sm:py-5'>
                            <div className=''>
                                <h6 className='font-semibold text-[18px] mb-3 leading-tight'>Market your book</h6>
                                <h2 className='text-[40px] font-semibold mb-3 leading-tight'>In the best possible way!
                                </h2>
                                <p className=' text-[16px]'>When selecting Barnett Ghostwriting, be assured that you have opted for a highly professional company serving as the definitive one-stop solution for all your marketing requirements.</p>
                            </div>
                            <div className='md:mt-[0px] xs:mt-[30px] relative z-auto pt-5' >
                                <div className="container-xl max-w-7xl lg:max-w-6xl justify-center md:gap-10 mx-auto md:pr-0 md:ml-0 ">
                                    <div className=" md:w-[100%] md:gap-x-6 sm:w-[100%] xs:w-[100%] space-x-10 py-3 md:px-5 mx-auto xs:space-x-0 xs:px-4 font-semibold">
                                        <ul className='xs:w-[100%] x:block inline-block text-[16px] space-y-3 justify-center items-center xs:text-[14px] '>
                                            <li className='flex space-x-3 border-b-[1px] border-solid border-[#989898] pb-3'>
                                                <Image src="/assets/images/newimg/color-check1.png" width={25} height={25} className='h-5 w-5' alt="Video Trailer" /><h5>Video Trailer</h5> </li>
                                            <li className='flex space-x-3 border-b-[1px] border-solid border-[#989898] pb-3'>
                                                <Image src="/assets/images/newimg/color-check1.png" width={25} height={25} className='h-5 w-5' alt="Book Cover Designing" /><h5>Book Cover Designing</h5></li>
                                            <li className='flex space-x-3 border-b-[1px] border-solid border-[#989898] pb-3'>
                                                <Image src="/assets/images/newimg/color-check1.png" width={25} height={25} className='h-5 w-5' alt="Book publishing" /><h5>Book Publishing</h5></li>
                                            <li className='flex space-x-3 border-b-[1px] border-solid border-[#989898] pb-3'>
                                                <Image src="/assets/images/newimg/color-check1.png" width={25} height={25} className='h-5 w-5' alt="Book Translation" /><h5>Book Translation</h5> </li>
                                            <li className='flex space-x-3 border-b-[1px] border-solid border-[#989898] pb-3'>
                                                <Image src="/assets/images/newimg/color-check1.png" width={25} height={25} className='h-5 w-5' alt="Amazong Marketing" /><h5>Amazong Marketing</h5></li>
                                        </ul>
                                        <ul className='xs:w-[100%] x:block  inline-block text-[16px] space-y-3 justify-center items-center xs:text-[14px] '>
                                            <li className='flex space-x-3 border-b-[1px] border-solid border-[#989898] pb-3'><Image src="/assets/images/newimg/color-check1.png" width={25} height={25} className='h-5 w-5' alt="Audio Book" /><h5>Audio Book</h5></li>
                                            <li className='flex space-x-3 border-b-[1px] border-solid border-[#989898] pb-3'><Image src="/assets/images/newimg/color-check1.png" width={25} height={25} className='h-5 w-5' alt="Author's Website" /><h5>Author's Website</h5></li>
                                            <li className='flex space-x-3 border-b-[1px] border-solid border-[#989898] pb-3'><Image src="/assets/images/newimg/color-check1.png" width={25} height={25} className='h-5 w-5' alt="Social Media Marketing" /><h5>Social Media Marketing</h5></li>
                                            <li className='flex space-x-3 border-b-[1px] border-solid border-[#989898] pb-3'><Image src="/assets/images/newimg/color-check1.png" width={25} height={25} className='h-5 w-5' alt="Marketing Consultation" /><h5>Marketing Consultation</h5></li>
                                            <li className='flex space-x-3 border-b-[1px] border-solid border-[#989898] pb-3'><Image src="/assets/images/newimg/color-check1.png" width={25} height={25} className='h-5 w-5' alt="Barnes & Noble Nook Edition" /><h5>Barnes & Noble Nook Edition</h5></li>
                                        </ul>
                                    </div>
                                    <div className='w-[55%] md:w-[60%] sm:w-[90%] xs:w-[100%] grid grid-cols-2 grid-rows-1 gap-x-6 py-5 relative'>
                                        <button className='bg-[#00C0E4] py-1 text-white hover:bg-white hover:border-solid hover:border-[3px] hover:text-[#1d1d1f] hover:transition-all'>Get started</button>
                                        <button className='bg-[#1d1d1f] py-1 text-white border-[#1d1d1f] border-[3px] hover:bg-[#00C0E4] hover:text-[#1d1d1f] hover:border-[2px] hover:border-[#00C0E4]'>Live Chat</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='py-20 md:py-5 sm:py-10 xs:py-5 pl-5 sm:pl-0 xs:pl-0'>
                            <Image className='relative' width={1000} height={800} alt="Author Glass Reading Books" src="/assets/images/newimg/bearded-author-glasses-reading-book.png" />
                        </div>
                    </div>
                </section>
            </div>
        </>

    )
}

export default marketBook1
