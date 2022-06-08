import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-bootstrap';

const CarouselApp = ({ articles }) => {
    return (
        <Carousel>{articles.map((article) =>
            <Carousel.Item key={article.id}>
                <img
                    className="d-block w-100"
                    src={article.image}
                    alt={article.title}
                />
                <Carousel.Caption>
                    <h3>{article.title}</h3>
                </Carousel.Caption>
            </Carousel.Item>
        )}
        </Carousel>
    )
};

CarouselApp.propTypes = {
    articles: PropTypes.arrayOf(
        PropTypes.shape(
            {
                id: PropTypes.string.isRequired,
            }
        )
    ).isRequired
}

export default CarouselApp;