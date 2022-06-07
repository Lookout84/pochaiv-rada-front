import React from 'react';
// import Article from './components/Articles';
import ArticlesList from './components/ArticlesList/ArticlesList';
import articles from './data/articles.json';
import Container from './components/Container/Container';

console.log(articles);

const App = () => {
    return (
        <Container>
            <h1>Головна сторінка</h1>
            <ArticlesList articles={articles} />;
        </Container>
    );
};

export default App;