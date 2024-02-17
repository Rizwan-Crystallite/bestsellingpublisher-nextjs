import React from 'react'
import Image from 'next/image'



const openZendeskChat = () => {
  if (window.zESettings) {
    window.zE('webWidget', 'open');
  }
};
const ghostWriting = ({
  serviceTitle,
  serviceDesc,

}) => {
  return (
    <>
      <section className="immaculate achieve bg-cover mb-8 pb-20 bg-[#f2f2f2]">
        <div className="container max-w-7xl lg:max-w-6xl pt-16 px-5 sm:px-10 font-secondary">
          <div className='grid grid-cols-2 items-center sm:grid-cols-1 xs:grid-cols-1'>
            <div className=''>
              <div className="text-left mb-0">
                <h6 className='text-[30px] font-primary text-[#40BEE2] font-semibold'>Our Comprehensive</h6>
                <h2 className='text-[40px] font-primary font-bold py-2 md:leading-tight xs:leading-tight'>{serviceTitle}</h2>
                <p className='sm:text-justify xs:text-justify'>{serviceDesc}</p>
                <br></br>
                <p className=''>
                  Our process is simple and aims to deliver flawless results for every project.
                </p>
              </div>
            </div>


            <div className='sm:py-10'>
              <Image quality={95} width={800} height={700} src='/assets/images/newimg/ghostwriting_book.png' alt='ghost writing' className='mx-auto xs:py-10' />
            </div>
          </div>

          <ul className="grid grid-cols-2 gap-x-8 w-[70%] xs:grid-cols-1 md:w-[100%] sm:w-[100%] xs:w-[100%] md:mb-10 text-[18px] font-semibold">
            <li className='border-b-2 border-solid border-[#40BEE2] py-4 xs:mr-0 md:mr-5'><Image quality={95} src="/assets/images/newimg/color-check2.png" width={9} height={9} alt="Checkmark" className="inline-block mr-2" />Writing Genuine Content based on your idea</li>
            <li className='border-b-2 border-solid border-[#40BEE2] py-4 xs:mr-0 md:mr-5'><Image quality={95} src="/assets/images/newimg/color-check2.png" width={9} height={9} alt="Checkmark" className="inline-block mr-2" />Critical Review, Editing, and Proofreading</li>
            <li className='border-b-2 border-solid border-[#40BEE2] py-4 xs:mr-0 md:mr-5'><Image quality={95} src="/assets/images/newimg/color-check2.png" width={9} height={9} alt="Checkmark" className="inline-block mr-2" />Extensive Formatting, Typesetting, &amp; Designing</li>
            <li className='border-b-2 border-solid border-[#40BEE2] py-4 xs:mr-0 md:mr-5'><Image quality={95} src="/assets/images/newimg/color-check2.png" width={9} height={9} alt="Checkmark" className="inline-block mr-2" />Publishing, Branding, Marketing, and Promotions</li>
            <li className='border-b-2 border-solid border-[#40BEE2] py-4 xs:mr-0 md:mr-5'><Image quality={95} src="/assets/images/newimg/color-check2.png" width={9} height={9} alt="Checkmark" className="inline-block mr-2" />Critical Review and Analysis</li>
            <li className='border-b-2 border-solid border-[#40BEE2] py-4 xs:mr-0 md:mr-5'><Image quality={95} src="/assets/images/newimg/color-check2.png" width={9} height={9} alt="Checkmark" className="inline-block mr-2" />Book Coaching</li>
            <li className='border-b-2 border-solid border-[#40BEE2] py-4 xs:mr-0 md:mr-5'><Image quality={95} src="/assets/images/newimg/color-check2.png" width={9} height={9} alt="Checkmark" className="inline-block mr-2" />Copy Editing</li>
            <li className='border-b-2 border-solid border-[#40BEE2] py-4 xs:mr-0 md:mr-5'><Image quality={95} src="/assets/images/newimg/color-check2.png" width={9} height={9} alt="Checkmark" className="inline-block mr-2" />Developmental Editing</li>
          </ul>
          <div className='mx-auto py-3'>
            <div className='w-[30%] grid grid-cols-2 grid-rows-1 gap-x-6 py-5 relative md:w-[70%] sm:w-[100%] xs:w-[100%]'>
              <button className='bg-[#00C0E4] py-1 text-white hover:bg-[#1d1d1f] border-[#00C0E4] border-[3px] hover:border-solid hover:border-[3px] hover:border-[#1d1d1f] hover:text-[#fff] '>Get Started</button>
              <button className='bg-transparent py-1 text-[#1d1d1f] border-solid border-[#1d1d1f] border-[3px] hover:bg-[#1d1d1f] hover:text-[#fff] hover:border-[3px] hover:border-[#1d1d1f]'>Live Chat</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ghostWriting
