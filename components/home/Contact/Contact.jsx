import React, { useState } from 'react';

import { Container, Wrapper, Row, Success } from './styles';

const Contact = ({ onSubmit, success }) => {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      message: '',
    });
    onSubmit(values);
  };

  return (
    <Container>
      <h1>Contact</h1>

      <Wrapper onSubmit={handleSubmit}>
        <Row>
          <input
            type='text'
            name='firstName'
            placeholder='First Name'
            onChange={handleInputChange}
          />
          <input
            type='text'
            name='lastName'
            placeholder='Last Name'
            onChange={handleInputChange}
          />
        </Row>
        <Row>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='Email'
            onChange={handleInputChange}
          />
          <input
            type='text'
            name='company'
            placeholder='Company'
            onChange={handleInputChange}
          />
        </Row>
        <Row>
          <textarea
            rows='12'
            name='message'
            type='text'
            placeholder='Message'
            onChange={handleInputChange}
          />
        </Row>
        {success && <Success>We've got your message!</Success>}
        <Row>
          <button className='button' type='submit'>
            Send
          </button>
        </Row>
      </Wrapper>
    </Container>
  );
};

export default Contact;
