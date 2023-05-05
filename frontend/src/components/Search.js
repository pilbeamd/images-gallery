import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Search = ({word, setWord, handleSubmit}) => {
    return (
      <Container className="mt-4">
      <Form onSubmit={handleSubmit}>
      <Row className='justify-content-center'>
        <Col xs={12} md={8}>
          <Form.Control 
            type='text'
            value={word}
            onChange={(e) => setWord(e.target.value)}
            placeholder="Search for image..." />
        </Col>
        <Col>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
    </Container>
      );
};

console.log(typeof Search)

export default Search;