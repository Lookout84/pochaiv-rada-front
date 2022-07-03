import React from 'react';
// import Article from './components/Articles';
import ArticlesList from './components/ArticlesList/ArticlesList';
import articles from './data/articles.json';
import Layout from './components/Layout/Layout';
import CarouselApp from './components/Carousel/Carousel';
import { Container, Row, Col } from 'react-bootstrap';
import CalendarApp from './components/Calendar/Calendar';
import WorkersCard from './components/WorkersCard/WorkersCard';
import workers from './data/workers.json';
import AppBar from './components/AppBar/AppBar';
import socials from './data/social.json';
import Footer from './components/Footer/Footer';
import ScrollArrow from './components/ScrollArrow/ScrollArrow';


console.log(workers);

const App = () => {
    return (
        <Layout>
            <AppBar />
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
                    </Row >
                </Container >
            </section>
            <section>
                <ArticlesList articles={articles} />
            </section>
            <ScrollArrow/>
            <Footer socials={socials} />
        </Layout >
    );
};

export default App;