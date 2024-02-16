import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// Import Slick Slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Images 
import Logo from "media/assets/images/logo.png"
import Instagram from "media/assets/sikander/instagram.png"
import Twitter from "media/assets/sikander/twitter.png"
import Facebook from "media/assets/sikander/facebook.png"
import Tel from "media/assets/sikander/telicon.png"
import Email from "media/assets/sikander/email.png"
import Location from "media/assets/sikander/location.png"
import Payment1 from "media/assets/images/payment1.png"
import Payment2 from "media/assets/images/payment2.png"
import Slide1 from "media/assets/sikander/slide1.png"
import Slide2 from "media/assets/sikander/slide2.png"
import Slide3 from "media/assets/sikander/slide3.png"
import Slide4 from "media/assets/sikander/slide4.png"
import Slide5 from "media/assets/sikander/slide5.png"
import Slide6 from "media/assets/sikander/slide6.png"
import Slide7 from "media/assets/sikander/slide7.png"
import Slide8 from "media/assets/sikander/slide8.png"
import Slide9 from "media/assets/sikander/slide9.png"
import Slide10 from "media/assets/sikander/slide10.png"



const NewFooter = () => {

    // Slider Setting
    const testiSlider = {
        dots: false,
        arrows: false,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 5000,
        speed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return (
        <>
            <footer className='py-[40px] md:py-[70px] bg-[#F3F3F3]'>
                <div className="container">
                    <div className="grid grid-cols-12">
                        <div className='col-span-12 lg:col-span-4 pb-4 lg:pb-8'>
                            <div className="logo">
                                <Link href="/">
                                    <Image src={Logo} alt='Amazon Book Publishing' />
                                </Link>
                                <p className='text-[14px] leading-[19px] font-[500] font-secondary pt-4 pb-5 lg:w-11/12'>Best Selling Publishers offer a wide range of professional book publishing services to give life to your words. Let your words be of fine quality with our publishing services, contact us today!</p>
                                <ul className='flex items-center gap-x-5'>
                                    <li>
                                        <Link href="javascript:;">
                                            <Image src={Instagram} alt='Amazon Book Publisher' />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="javascript:;">
                                            <Image src={Twitter} alt='Amazon Book Publisher' />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="javascript:;">
                                            <Image src={Facebook} alt='Amazon Book Publisher' />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-8 pb-4 lg:pb-8">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-5">
                                <div className="items">
                                    <p className='text-[16px] font-medium font-secondary pb-3'>Our Services</p>
                                    <ul>
                                        <li>
                                            <Link href="javascript:;" className='text-[14px] font-medium font-secondary leading-[30px]'>
                                                Book Publishing
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="javascript:;" className='text-[14px] font-medium font-secondary leading-[30px]'>
                                                Ebook Publishing
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="javascript:;" className='text-[14px] font-medium font-secondary leading-[30px]'>
                                                Digital Book Publishing
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="javascript:;" className='text-[14px] font-medium font-secondary leading-[30px]'>
                                                Amazon  Publishing
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="javascript:;" className='text-[14px] font-medium font-secondary leading-[30px]'>
                                                Self Publishing
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="items">
                                    <p className='text-[16px] font-medium font-secondary pb-3'>Quick Links</p>
                                    <ul>
                                        <li>
                                            <Link href="javascript:;" className='text-[14px] font-medium font-secondary leading-[30px]'>
                                                Home
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="javascript:;" className='text-[14px] font-medium font-secondary leading-[30px]'>
                                                Pricing
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="javascript:;" className='text-[14px] font-medium font-secondary leading-[30px]'>
                                                Blogs
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="javascript:;" className='text-[14px] font-medium font-secondary leading-[30px]'>
                                                About
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="items">
                                    <p className='text-[16px] font-medium font-secondary pb-3'>Contact Us</p>
                                    <ul>
                                        <li className='mb-5'>
                                            <Link href="mailto:;" className='flex items-start gap-x-2 text-[14px] font-medium font-secondary leading-[15px]'>
                                                <Image src={Tel} alt='Amazon Book Publishing ' />
                                                info@bestsellingpublisher.com
                                            </Link>
                                        </li>
                                        <li className='mb-5'>
                                            <Link href="javascript:;" className='flex items-start gap-x-2 text-[14px] font-medium font-secondary leading-[15px]'>
                                                <Image src={Email} alt='Amazon Book Publishing ' />
                                                (800) 781-9093 (Toll Free)
                                            </Link>
                                        </li>
                                        <li className='mb-5'>
                                            <Link href="javascript:;" className='flex items-start gap-x-2 text-[14px] font-medium font-secondary leading-[23px]'>
                                                <Image src={Location} alt='Amazon Book Publishing ' />
                                                1001 Wilshire Boulevard #1176
                                                Los Angeles, CA 90017
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="payment_method">
                                    <Image src={Payment1} alt='Amazon Book Publishing' className='mb-3 sm:ml-auto' />
                                    <Image src={Payment2} alt='Amazon Book Publishing' className='sm:ml-auto' />
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12">
                            <div className="lg:flex items-center justify-between gap-x-7 pt-4 lg:pt-8 border-t border-[#DBDBDB] relative hidden">
                                <p></p>
                                <div className="slide">
                                    <Image src={Slide1} alt='Amazon Book Publishing ' />
                                </div>
                                <div className="slide">
                                    <Image src={Slide2} alt='Amazon Book Publishing ' />
                                </div>
                                <div className="slide">
                                    <Image src={Slide3} alt='Amazon Book Publishing ' />
                                </div>
                                <div className="slide">
                                    <Image src={Slide4} alt='Amazon Book Publishing ' />
                                </div>
                                <div className="slide">
                                    <Image src={Slide5} alt='Amazon Book Publishing ' />
                                </div>
                                <div className="slide">
                                    <Image src={Slide6} alt='Amazon Book Publishing ' />
                                </div>
                                <div className="slide">
                                    <Image src={Slide7} alt='Amazon Book Publishing ' />
                                </div>
                                <div className="slide">
                                    <Image src={Slide8} alt='Amazon Book Publishing ' />
                                </div>
                                <div className="slide">
                                    <Image src={Slide9} alt='Amazon Book Publishing ' />
                                </div>
                                <div className="slide">
                                    <Image src={Slide10} alt='Amazon Book Publishing ' />
                                </div>
                            </div>
                            <Slider {...testiSlider} className="testiSlider pt-4 block">
                                <div className="slide">
                                    <Image src={Slide1} alt='Amazon Book Publishing ' />
                                </div>
                                <div className="slide">
                                    <Image src={Slide2} alt='Amazon Book Publishing ' />
                                </div>
                                <div className="slide">
                                    <Image src={Slide3} alt='Amazon Book Publishing ' />
                                </div>
                                <div className="slide">
                                    <Image src={Slide4} alt='Amazon Book Publishing ' />
                                </div>
                                <div className="slide">
                                    <Image src={Slide5} alt='Amazon Book Publishing ' />
                                </div>
                                <div className="slide">
                                    <Image src={Slide6} alt='Amazon Book Publishing ' />
                                </div>
                                <div className="slide">
                                    <Image src={Slide7} alt='Amazon Book Publishing ' />
                                </div>
                                <div className="slide">
                                    <Image src={Slide8} alt='Amazon Book Publishing ' />
                                </div>
                                <div className="slide">
                                    <Image src={Slide9} alt='Amazon Book Publishing ' />
                                </div>
                                <div className="slide">
                                    <Image src={Slide10} alt='Amazon Book Publishing ' />
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="copyright bg-[#40BEE2] py-2">
                <p className='text-[14px] text-white text-center'>© 2024 - All Rights Reserved Mini Investment</p>
            </div>
        </>
    )
}

export default NewFooter
