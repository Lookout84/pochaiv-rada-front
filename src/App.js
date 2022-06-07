import React from 'react';
// import Article from './components/Articles';
import ArticlesList from './components/ArticlesList/ArticlesList';
import articles from './data/articles.json';
// import Container from './components/Container/Container';
// import AppBar from './components/AppBar/AppBar';
import Layout from './components/Layout/Layout';

console.log(articles);

const App = () => {
    return (
        <Layout>
            <h1>Головна сторінка</h1>
            <ArticlesList articles={articles} />;
        </Layout>
    );
};

export default App;