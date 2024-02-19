import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import styles from '@/styles/Dreams.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// mport { Fade } from "react-awesome-reveal";
let DreamData = [
    {
        heading: "Top Notch Services",
        desc: "Best Selling Publisher offers a comprehensive suite of eBook publishing services that are designed to meet the needs of authors at every stage of the publishing process.",
        btnLink: "Let's discuss",
        padding: { paddingBottom: 30 }
    },
    {
        heading: "Experience and Dedication",
        desc: "We have a team of experienced and professional eBook editors and publishers who are committed to helping authors publish their books successfully.",
        btnLink: "Let's discuss",
        padding: { paddingBottom: 30 }
    },
    {
        heading: "Cost Effective Packages",
        desc: "Our eBook publishing services are affordable and customizable, so you can choose the level of support that's right for you. Whether you're looking for a simple manuscript conversion or a comprehensive package that includes extensive assistance, we can help you meet your goals.",
        btnLink: "Let's discuss",
        padding: { paddingBottom: 5 }
    }
]
const Dreams = () => {
    let dreamslider = {
        dots: false,
        arrows: false,
        autoplay: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };


    const [isLargeScreen, setIsLargeScreen] = useState(true);

    const updateScreenSize = () => {
        setIsLargeScreen(window.innerWidth >= 767); // Change the breakpoint to 992 pixels
    };

    useEffect(() => {
        updateScreenSize();

        const handleResize = () => {
            updateScreenSize();
        };

        window.addEventListener("resize", handleResize);

        return () => {
            // Clean up the event listener
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <>
            <section className={styles.dreamsFlod}>
                <Container fluid className='px-md-5 pb-3'>
                    <Row className='justify-content-center'>
                        <Col lg={10}>
                            <div className={`${styles.dreamsHead} text-center`}>
                                <h2 className='font-50 fw-500 font-primary txt-secondary mb-3'>Realizing Publishing Dreams for Authors around the World </h2>
                                <p className='font-15 font-secondary txt-secondary mb-5'>Every idea, every story, and plot are brilliant, but they need to be refined for success. Excellence doesn’t guarantee anything—it’s the right professionals who will help you find your way through our solutions. Whether you are a new author or a seasoned veteran, Best Selling Publisher makes it easy to get started in the wonderful world of publishing. We provide everything you need to write the perfect book – all in one place.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className={`${styles.dreamsRow} justify-content-center`}>
                        {isLargeScreen && (
                            <>
                                <Col lg={4} className='my-md-3'>
                                    <div className={`${styles.dreamsCard} bg-gray text-center`}>
                                        <h3 className='font-26 fw-500 font-primary txt-secondary pb-2'>Top Notch Services </h3>
                                        <p className='font-15 font-secondary txt-secondary mt-3 pb-5'>Best Selling Publisher offers a comprehensive suite of eBook publishing services that are designed to meet the needs of authors at every stage of the publishing process.</p>
                                        <Link className='btns btnPrimary mt-5 mx-auto' href="#">Let's discuss</Link>
                                    </div>
                                </Col>
                                <Col lg={4} className='my-md-3'>
                                    <div className={`${styles.dreamsCard} bg-gray text-center`}>
                                        <h3 className='font-26 fw-500 font-primary txt-secondary pb-2'>Experience and Dedication</h3>
                                        <p className='font-15 font-secondary txt-secondary mt-3 pb-5'>We have a team of experienced and professional eBook editors and publishers who are committed to helping authors publish their books successfully.<br /><br /></p>
                                        <Link className='btns btnPrimary mt-5 mx-auto' href="#">Let's discuss</Link>
                                    </div>
                                </Col>
                                <Col lg={4} className='my-md-3'>
                                    <div className={`${styles.dreamsCard} bg-gray text-center`}>
                                        <h3 className='font-26 fw-500 font-primary txt-secondary pb-2'>Cost Effective Packages</h3>
                                        <p className='font-15 font-secondary txt-secondary mt-3 pb-5 pb-lg-0'>Our eBook publishing services are affordable and customizable, so you can choose the level of support that's right for you. Whether you're looking for a simple manuscript conversion or a comprehensive package that includes extensive assistance, we can help you meet your goals.</p>
                                        <Link className='btns btnPrimary mx-auto mt-5' href="#">Let's discuss</Link>
                                    </div>
                                </Col>
                            </>
                        )}


                        {!isLargeScreen && (
                            <Slider {...dreamslider}>
                                <Col lg={4}>
                                    <div className={`${styles.dreamsCard} bg-gray text-center`}>
                                        <h3 className='font-26 fw-500 font-primary txt-secondary pb-2'>Top Notch Services </h3>
                                        <p className='font-15 font-secondary txt-secondary mt-3 pb-5'>Best Selling Publisher offers a comprehensive suite of eBook publishing services that are designed to meet the needs of authors at every stage of the publishing process.</p>
                                        <Link className='btns btnPrimary mt-5 mx-auto' href="#">Let's discuss</Link>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className={`${styles.dreamsCard} bg-gray text-center`}>
                                        <h3 className='font-26 fw-500 font-primary txt-secondary pb-2'>Experience and Dedication</h3>
                                        <p className='font-15 font-secondary txt-secondary mt-3 pb-5'>We have a team of experienced and professional eBook editors and publishers who are committed to helping authors publish their books successfully.<br /><br /></p>
                                        <Link className='btns btnPrimary mt-5 mx-auto' href="#">Let's discuss</Link>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className={`${styles.dreamsCard} bg-gray text-center`}>
                                        <h3 className='font-26 fw-500 font-primary txt-secondary pb-2'>Cost Effective Packages</h3>
                                        <p className='font-15 font-secondary txt-secondary mt-3 pb-5 pb-lg-0'>Our eBook publishing services are affordable and customizable, so you can choose the level of support that's right for you. Whether you're looking for a simple manuscript conversion or a comprehensive package that includes extensive assistance, we can help you meet your goals.</p>
                                        <Link className='btns btnPrimary mx-auto' href="#">Let's discuss</Link>
                                    </div>
                                </Col>
                            </Slider>
                        )}
                    </Row>
                </Container >
            </section >
        </>
    )
}

export default Dreams