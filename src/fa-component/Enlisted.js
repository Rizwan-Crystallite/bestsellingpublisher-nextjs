import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Enlisted.module.css'
import Bookshelf from '@/styles/Bookshelf.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// images
import before from 'media/images/flods/enlisted-before.png'
import after from 'media/images/flods/enlisted-after.png'
import mid from 'media/images/flods/enlisted-mid.png'
import Link from 'next/link';
// import { Slide } from "react-awesome-reveal";

const data = [
    {
        para: 1,
        paraTitle: "Experience and Quality",
        paraSubTitle: "We are a highly experienced and reputable book publishing company."
    },
    {
        para: 2,
        paraTitle: "Industry Experts",
        paraSubTitle: "Our best seller publishing team is composed of industry experts."
    },
    {
        para: 3,
        paraTitle: "Range of Services",
        paraSubTitle: "We offer a wide range of book publishing services, including manuscript <br/> editing, formatting, and publishing consultation."
    },
    {
        para: 4,
        paraTitle: "Goal-Driven",
        paraSubTitle: "We have a proven track record of success in helping our  authors<br/> achieve their publishing goals.g book publishers in the industry, Best Selling Publisher offers various publishing services just for you!"
    },
    {
        para: 5,
        paraTitle: "Affordable Packages",
        paraSubTitle: "We offer competitive pricing and terms that are favorable to our authors."
    },
    {
        para: 6,
        paraTitle: "Passion and Creativity",
        paraSubTitle: "As a leading book publishing company, we are passionate about helping our authors <br /> reach their full potential and bring their vision to life."
    }
]

const Enlisted = ({
    subtitle,
    title,
    desc
}) => {
    return (
        <>

            <section className={styles.enlistedFlod}>
                <Container fluid className='px-md-5'>
                    <Row className='justify-content-center'>
                        <Col lg={12}>

                            <div className={`${styles.enlistedHead} text-center`}>
                                <h4 className='font-30 font-primary txt-primary'>{subtitle}</h4>
                                <h2 className='font-50 fw-500 font-primary txt-secondary mb-3'>{title}</h2>
                            </div>

                        </Col>
                        <Col lg={8}>
                            <div className={`${styles.enlisContnt} text-center mt-3`}>
                                <div className={styles.enlisImg}>
                                    <Image quality={100} loading="lazy" className='img-fluid'
                                        src={before}
                                        alt='Best_Publisher'
                                    />

                                    <div className={styles.midImg}>
                                        <div>
                                            <p className={`${styles.para1} font-30 font-primary txt-secondary mt-5 mb-5`}>1.</p>
                                            <p className={`${styles.para2} font-30 font-primary txt-secondary`}>2.</p>
                                            <p className={`${styles.para3} font-30 font-primary txt-secondary`}>3.</p>
                                            <p className={`${styles.para4} font-30 font-primary txt-secondary`}>4.</p>
                                            <p className={`${styles.para5} font-30 font-primary txt-secondary`}>5.</p>
                                            <p className={`${styles.para6} font-30 font-primary txt-secondary`}>6.</p>
                                        </div>
                                        <Image quality={100} loading="lazy" className='img-fluid'
                                            src={mid}
                                            alt='Best_Publisher'
                                        />

                                        <div className='pb-5 '>
                                            {data?.map((e, i) => (
                                                <div key={i}>
                                                    <p className='font-30 font-primary txt-secondary mt-5' dangerouslySetInnerHTML={{ __html: e.paraTitle }} />
                                                    <p className='font-15 font-secondary txt-secondary ' dangerouslySetInnerHTML={{ __html: e.paraSubTitle }} />
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <Image quality={100} loading="lazy" className='img-fluid'
                                        src={after}
                                        alt='Best_Publisher'
                                    />
                                </div>
                            </div>
                            <div className={`${Bookshelf.bttns} dislpay-flex mt-5 justify-content-center`}>
                                <Link className='btns btnPrimary' href="javascript:$zopim.livechat.window.show()">Let's discuss</Link>
                                <Link className='btns btnSecondary' href="tel:800-781-9093">800-781-9093</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>



            <section className={styles.enlistedSlide}>
                <Container fluid className='px-md-5'>
                    <Row className='justify-content-center'>
                        <Col lg={8}>
                            <div className={`${styles.enlistedHead} text-center`}>
                                <h4 className='font-30 font-primary color-white'>Enlist Yourself with the All-Time Best  </h4>
                                <h2 className='font-50 fw-500 font-primary color-white mb-3'>Your book deserves only the <span className='bg-black color-white p-1 mt-2 d-block house'> Best Selling Publishers.</span></h2>
                            </div>

                            <div className="bttns1black mt-4 mb-5 mb-md-0">
                                <Link className="btns btnBlack" href="javascript:$zopim.livechat.window.show()">Get Onboard </Link>
                                <Link className="btns btnTransprnt" href="tel:800-781-9093">(800) 781-9093</Link>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </section>

        </>
    )
}

export default Enlisted