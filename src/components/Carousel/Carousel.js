import React from 'react';
import PropTypes from 'prop-types';
// import { Carousel } from 'react-bootstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



const CarouselApp = ({ articles }) => {
    return (
        <Carousel>{articles.map((article) =>
            <div key={article.id}>
                <img src={article.image} alt={article.title} />
                <p className="legend">{article.title}</p>
            </div>
            //     <Carousel.Item key={article.id}>
            //         <img
            //             className="d-block w-100"
            //             src={article.image}
            //             alt={article.title}
            //         />
            //         <Carousel.Caption>
            //             <h3>{article.title}</h3>
            //         </Carousel.Caption>
            //     </Carousel.Item>
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