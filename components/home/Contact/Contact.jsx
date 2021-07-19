import React from 'react';

import { Container, Wrapper, Row } from './styles';

const Contact = () => {
  return (
    <Container>
      <h1>Contact Us</h1>

      <Wrapper>
        <Row>
          <input type='text' placeholder='First Name' />
          <input type='text' placeholder='Last Name' />
        </Row>
        <Row>
          <input type='text' placeholder='Email' />
          <input type='text' placeholder='Company' />
        </Row>
        <Row>
          <textarea rows='12' type='text' placeholder='Message' />
        </Row>
        <Row>
          <button className='button'>Send</button>
        </Row>
      </Wrapper>
    </Container>
  );
};

export default Contact;
