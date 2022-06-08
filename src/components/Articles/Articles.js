import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, author, body, date, isFavorite, image }) => (
    <div>
        <h2>{title}</h2>
        <img src={image} alt={title} />
        <h4>{body}</h4>
        <p>Автор: {author}</p>
        <p>Дата додавання: {date}</p>
        <p>{isFavorite}</p>
    </div>
);


Article.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    image: PropTypes.string,
};

export default Article;