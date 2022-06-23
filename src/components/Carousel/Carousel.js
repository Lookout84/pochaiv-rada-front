import React from 'react';
import PropTypes from 'prop-types';
// import { Carousel } from 'react-bootstrap';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import s from './Carousel.module.css';

const CarouselApp = ({ articles }) => {
    return (
        <Carousel autoPlay={true} autoFocus={true} showThumbs={false} showStatus={false} useKeyboardArrows className="presentation-mode">{articles.map((article) =>
            <div key={article.id}>
                <h2 className={s.title}>Останні новини</h2>
                <img src={article.image} alt={article.title} />
                <p className="legend">{article.title}</p>
            </div>
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