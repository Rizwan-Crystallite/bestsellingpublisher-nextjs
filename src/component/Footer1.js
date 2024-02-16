import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <div className='w-full text-[#707070] h-auto border-solid bg-[#f3f3f3] pt-10 m-0 '>
        <div className="container max-w-7xl justify-center mx-auto text-base xs:text-base">
          <div className="grid grid-cols-4 grid-rows-1 md:grid-cols-2 md:px-10 sm:grid-cols-2 sm:p-3 sm:gap-10 xs:grid-cols-2 xs:p-3 xs:gap-10">
            <div className="space-y-1 items-center">
              <Link href="#" className="logo py-10">
                <Image quality={95} src="/assets/images/education-logo.png" width={200} height={300} alt='footer logo' />
              </Link>
              <ul className='pt-5 space-y-1'>
                <li className='flex space-x-2 items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                  <Link href="#">498 Brush St Detroit, MI 48226, USA</Link>
                </li>
                <li className='flex space-x-2 items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M10.5 18.75a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" />
                    <path fillRule="evenodd" d="M8.625.75A3.375 3.375 0 005.25 4.125v15.75a3.375 3.375 0 003.375 3.375h6.75a3.375 3.375 0 003.375-3.375V4.125A3.375 3.375 0 0015.375.75h-6.75zM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 017.5 19.875V4.125z" clipRule="evenodd" />
                  </svg>

                  <Link href="tel:+1 (855) 469-7509 ">+1 (855) 469-7509 </Link>
                </li>
                <li className='flex space-x-2 items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                  </svg>

                  <Link href="tel:+1 (734) 409-7256">+1 (734) 409-7256</Link>
                </li>
                <li className='flex space-x-2 items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>

                  <Link href="#"> support@educationlogo.com</Link>
                </li>
              </ul>
            </div>
            <div className="">
              <h4 className='text-[#707070] text-[22px] font-bold'>
                GhostWriting
              </h4>
              <ul className='py-2 space-y-2'>
                <li className='flex space-x-1 items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                  </svg>

                  <Link href="/">Home</Link>
                </li>
                <li className='flex space-x-1 items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                  </svg>

                  <Link href="/about-us">About</Link>
                </li>
                <li className='flex space-x-1 items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                  </svg>

                  <Link href="/blog">Blog</Link></li>
                <li className='flex space-x-1 items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                  </svg>

                  <Link href="/contact-us">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="">
              <h4 className='text-[#707070] text-[22px] font-bold'>
                Services
              </h4>
              <ul className='py-2 space-y-2'>
                <li className='flex space-x-1 items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                  </svg>
                  <Link href="/affordable-ghostwriting-services">Ghostwriting</Link>
                </li>
                <li className='flex space-x-1 items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                  </svg>
                  <Link href="/genre">Genre</Link>
                </li>
                <li className='flex space-x-1 items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                  </svg>
                  <Link href="/marketing-services">Marketing</Link>
                </li>
                <li className='flex space-x-1 items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                  </svg>
                  <Link href="/book-publishing-services">Publication</Link>
                </li>
                <li className='flex space-x-1 items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                  </svg>
                  <Link href="/hardcover-book-printing-services/">Printing</Link>
                </li>
                <li className='flex space-x-1 items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                  </svg>
                  <Link href="/book-cover-design-services">Cover Design</Link></li>
                <li className='flex space-x-1 items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                  </svg>
                  <Link href="/professional-book-editing-services">Editing</Link></li>

              </ul>
            </div>
            <div className="">
              <h4 className='text-[#707070] text-[22px] font-bold'>
                Marketing
              </h4>
              <ul className='py-2 space-y-2'>
                <li className='flex space-x-1 items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                  </svg>
                  <Link href="/marketing-services">Video Trailer</Link>
                </li>
                <li className='flex space-x-1 items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                  </svg>
                  <Link href="/marketing-services">Audio Book</Link>
                </li>
                <li className='flex space-x-1 items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                  </svg>
                  <Link href="/author">Author Website</Link>
                </li>
                <li className='flex space-x-1 items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                  </svg>
                  <Link href="/book-publishing-services">Book Publishing</Link>
                </li>
                <li className='flex space-x-1 items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                  </svg>
                  <Link href="/">Social Media Marketing</Link>
                </li>
                <li className='flex space-x-1 items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                  </svg>
                  <Link href="/">Book Translation</Link>
                </li>
                <li className='flex space-x-1 items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                  </svg>
                  <Link href="/marketing-services">Marketing Consultation</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className=' w-full bg-[#1d1d1f] text-white mt-10 py-1 '>
          <div className='container max-w-7xl mx-auto grid grid-cols-3 grid-rows-1 p-1 xs:grid-cols-1 xs:px-5 xs:text-center xs:items-center'>
            <div className=''>
              <p>
                © 2023 Education Logo - All Rights Reserved
              </p>
            </div>
            <div className='flex space-x-2 items-center text-[20px] justify-center text-center xs:py-2'>
              <FontAwesomeIcon icon={faFacebookF} className='rounded-[50%] border-[#707070] border-2 p-[3px] h-5 w-5 hover:border-[#00C0E4]' />
              <FontAwesomeIcon icon={faTwitter} className='rounded-[50%] border-[#707070] border-2 p-[3px] h-5 w-5 hover:border-[#00C0E4]' />
              <FontAwesomeIcon icon={faInstagram} className='rounded-[50%] border-[#707070] border-2 p-[3px] h-5 w-5 hover:border-[#00C0E4]' />
              <FontAwesomeIcon icon={faLinkedinIn} className='rounded-[50%] border-[#707070] border-2 p-[3px] h-5 w-5 hover:border-[#00C0E4]' />
            </div>
            <div>
              <ul className='flex space-x-5 xs:hidden text-base'>
                <li><Link href="#">Sitemap</Link></li>
                <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                <li><Link href="/terms-and-condition">Terms &amp; Conditions</Link></li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </>

  )
}

export default Footer
