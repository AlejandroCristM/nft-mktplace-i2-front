import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Container className="py-3">
      <Row>
        <Col>
          <h1>Welcome to Your NFT Marketplace</h1>
          <p>Buy, sell, and auction your unique NFTs with ease.</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/300" />
            <Card.Body>
              <Card.Title>NFT Name</Card.Title>
              <Card.Text>
                This is a description of the NFT, with more information about
                what it is and why it's valuable.
              </Card.Text>
              <Link to="/nft/1">
                <Button variant="primary">View NFT</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/300" />
            <Card.Body>
              <Card.Title>NFT Name</Card.Title>
              <Card.Text>
                This is a description of the NFT, with more information about
                what it is and why it's valuable.
              </Card.Text>
              <Link to="/nft/2">
                <Button variant="primary">View NFT</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/300" />
            <Card.Body>
              <Card.Title>NFT Name</Card.Title>
              <Card.Text>
                This is a description of the NFT, with more information about
                what it is and why it's valuable.
              </Card.Text>
              <Link to="/nft/3">
                <Button variant="primary">View NFT</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
