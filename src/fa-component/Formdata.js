import React from 'react'
import styles from '@/styles/Formdata.module.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Router from 'next/router';

const Formdata = () => {

    const [score, setScore] = useState('Let`s discuss');

    const handleSubmit = async (e) => {
  
      e.preventDefault()
  
      let bodyContent = JSON.stringify({
        name: e.target.name.value,
        email: e.target.email.value,
        phone: e.target.phone.value,
        message: e.target.comments.value,
      });
  
      setScore('Wating For Sending Data');
      let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: bodyContent
      });
  
      let data = await response.text();
      console.log(data);
      e.target.reset();
      setScore('Thank You');
      const { pathname } = Router
      if (pathname == pathname) {
        Router.push('/thank-you')
      }
  
    }
    
    return (
        <>
            <div className={styles.bookshelfForm}>
                <Form className='mx-auto p-5' onSubmit={handleSubmit}>
                    <h3 className='font-30 fw-700 font-primary txt-secondary text-center mb-5'>
                        Get A <span className='txt-primary'>Free</span> Quote
                    </h3>
                    <Form.Group className="mb-4" controlId="name">
                        <Form.Label className='font-13 font-secondary' name="name">Full Name *</Form.Label>
                        <Form.Control type="text" required placeholder="Your Name" />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="email">
                        <Form.Label className='font-13 font-secondary' name="email">Email Address *</Form.Label>
                        <Form.Control type="email" required placeholder="Type Email Address" />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="phone">
                        <Form.Label className='font-13 font-secondary' name="phone">Phone *</Form.Label>
                        <Form.Control type="number" required placeholder="(123)-456-789" />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="comments">
                        <Form.Label className='font-13 font-secondary' name="comments">Comments</Form.Label>
                        <Form.Control type="text" required placeholder="Message" />
                    </Form.Group>

                    <Button className='btns quoteBtns mt-3' type="submit"> {score} </Button>
                </Form>
            </div>

        </>

    )
}

export default Formdata