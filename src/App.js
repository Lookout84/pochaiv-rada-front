import React from 'react';
// import Article from './components/Articles';
// import ArticlesList from './components/ArticlesList/ArticlesList';
import articles from './data/articles.json';
import Layout from './components/Layout/Layout';
import CarouselApp from './components/Carousel/Carousel';
import { Container, Row, Col } from 'react-bootstrap';
import CalendarApp from './components/Calendar/Calendar';
import './styles.css';
import WorkersCard from './components/WorkersCard/WorkersCard';
import workers from './data/workers.json';


console.log(workers);

const App = () => {
    return (
        <Layout>
            <section class="section">
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
                    </Row >
                </Container >
            </section>
            <section>
                {/* <ArticlesList articles={articles} /> */}
            </section>
        </Layout >
    );
};

export default App;