import React from 'react';
import Articles from '../Articles/Articles';
import PropTypes from 'prop-types';

const ArticlesList = ({ articles }) => (
    <ul>
        {articles.map((article) => (
            <li key={article.id}>
                <Articles
                    title={article.title}
                    body={article.body}
                    author={article.author}
                    date={article.date}
                    isFavorite={article.isFavorite}
                />

            </li>
        ))}
    </ul>
)

ArticlesList.propTypes = {
    articles: PropTypes.arrayOf(
        PropTypes.shape(
            {
                id: PropTypes.string.isRequired,
            }
        )
    ).isRequired
}

export default ArticlesList;