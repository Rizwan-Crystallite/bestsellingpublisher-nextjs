import React from 'react'
import Link from 'next/link'
import styles from '@/styles/Bookshelf.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Formdata from '@/fa-component/Formdata';
// // mport { Fade } from "react-awesome-reveal";

const Bookshelf = () => {
    return (
        <>
            <section className={styles.bookshelfFlod}>
                <Container fluid className='px-md-5'>
                    <Row className={`${styles.bookshelfRow} justify-content-between`}>
                        <Col xl={6}>
                           
                                <div className={styles.bookshelfTxt}>
                                    <h4 className='font-24 fw-600 font-primary txt-primary mb-3'>Amazon or Any Platform of your Choice</h4>
                                    <h2 className='font-50 fw-700 font-primary txt-secondary'>Comprehensive  <br className='d-none d-md-block' /> Book Publishing Services</h2>
                                    <p className='font-15 font-secondary txt-secondary mb-3'>Best Selling Publisher offers a wide array of self-publishing services, for businesses and authors from all genres. We have a team of experienced professionals, guiding you through every step in the publishing process, from editing and formatting to publication, distribution and marketing. We also offer a variety of custom publishing options to meet your specifics, such as digital publishing services and Amazon publishing services.</p>

                                    <p className='font-15 font-secondary txt-secondary'>Best Selling Publisher is a cutting-edge books publisher, offering a suite of services designed to help authors navigate the constantly changing world of publishing. Our book publishing services are tailored to meet the needs of today's authors. From providing guidance on self-publishing to offering and publishing support, we are committed to helping authors succeed in an increasingly competitive marketplace. Our commitment to quality sets Best Selling Publishers apart from all the other publishers in the market. We assist each author on an individual basis, providing the personalized attention that is essential for success in today's landscape of Publishing.</p>
                                    <div className={`${styles.bttns} mt-5`}>
                                        <Link className='btns btnPrimary' href="#">Let's discuss</Link>
                                        <Link className='btns btnSecondary' href="tel:(800)781-9093">(800)781-9093</Link>
                                    </div>
                                </div>
                            
                        </Col>
                        <Col xl={6}>
                           

                                <Formdata />
                            

                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Bookshelf