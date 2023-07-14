import React from 'react';
import ArticlesList from '../components/ArticlesList/ArticlesList';
import articles from '../data/articles.json';
import CarouselApp from '../components/Carousel/Carousel';
import { Container, Row, Col } from 'react-bootstrap';
import CalendarApp from '../components/Calendar/Calendar';
import WorkersCard from '../components/WorkersCard/WorkersCard';
import workers from '../data/workers.json';

const HomePage = () => {
  return (
    <Container>
      <section className="section">
        <Container>
          <Row>
            <Col>
              <CarouselApp articles={articles} />
            </Col>
            <Col xs lg="3">
              <WorkersCard workers={workers} />
            </Col>
            <Col xs lg="3">
              <CalendarApp />
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col sm={10}>
              <ArticlesList articles={articles} />
            </Col>
            <Col sm={2}>sm=4</Col>
          </Row>
        </Container>
      </section>
    </Container>
  );
};

export default HomePage;
