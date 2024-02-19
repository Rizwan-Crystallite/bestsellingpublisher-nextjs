import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Audience.module.css'
import { Container, Row, Col } from 'react-bootstrap'
// mport { Fade } from "react-awesome-reveal";
// images
import audience from 'media/images/flods/audience1.png'

const Audience = () => {
    // Initialize state for screen size
    const [isLargeScreen, setIsLargeScreen] = useState(true); // Default to true for larger screens

    // Function to update the screen size state
    const updateScreenSize = () => {
        setIsLargeScreen(window.innerWidth >= 991); // Customize the breakpoint as needed
    };

    // Add an event listener to update the screen size state on resize
    useEffect(() => {
        updateScreenSize(); // Initial call

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
            <section className={`${styles.audienceFlod} bg-prime`}>
                <Container fluid className='px-md-5'>
                    {isLargeScreen && (
                        <>
                            <Row className={`${styles.audienceRow} align-items-center`}>
                                <Col xl={6} lg={6} md={6}>
                                    <div className={styles.audienceTxt}>
                                        <h2 className='font-50 fw-300 font-primary txt-white mb-3'>Reach Your Audience
                                            Effectively with Our Digital  <span className='bg-black txt-white mt-2 w-75 p-1 font-50 fw-500 d-block'>Publishing Services</span></h2>
                                        <p className='font-15 font-secondary txt-white mb-5'>Best Selling Publisher brings your dream of book writing to life.</p>
                                        <div className={`${styles.bttns} mt-4 mb-5 mb-md-0`}>
                                            <Link className='btns btnBlack' href="javascript:$zopim.livechat.window.show()">Let's discuss</Link>
                                            <Link className='btns btnTransprnt' href="tel:800-781-9093">800-781-9093</Link>
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={6} lg={6} md={6}>
                                    <div className={styles.audienceImg}>
                                        <Image quality={100} loading="lazy" className='img-fluid m-auto'
                                            src={audience}
                                            alt='Best_Publisher'
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </>
                    )}

                    {!isLargeScreen && (
                        <Row className={`${styles.audienceRow} align-items-center`}>
                            <Col lg={8}>
                                <div className={`${styles.enlistedHead} text-center`}>
                                    <h2 className='font-50 fw-500 font-primary color-white mb-3'>Reach Your Audience
                                        Effectively with Our Digital <span className='bg-black color-white p-1 mt-2 d-block house'> Publishing Services.</span></h2>
                                        <h4 className='font-20 font-secondary color-white'>Best Selling Publisher brings your dream of book writing to life.</h4> 
                                </div>

                                <div className="bttns1black mt-4 mb-md-0">
                                    <Link className="btns btnBlack" href="javascript:$zopim.livechat.window.show()">Get Onboard </Link>
                                    <Link className="btns btnTransprnt" href="tel:800-781-9093">800-81-9093</Link>
                                </div>
                            </Col>
                        </Row>
                    )}

                </Container>
            </section>

        </>
    )
}

export default Audience