import React from 'react';
import Articles from '../Articles/Articles';
import PropTypes from 'prop-types';
import s from './ArticlesList.module.css';

const ArticlesList = ({ articles }) => (
  <ul className={s.articles_box}>
    {articles.map(article => (
      <li key={article.id}>
        <Articles
          title={article.title}
          image={article.image}
          body={article.body}
          author={article.author}
          date={article.date}
          isFavorite={article.isFavorite}
        />
      </li>
    ))}
  </ul>
);

ArticlesList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ArticlesList;
