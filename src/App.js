import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import workers from './data/workers.json';
import AppBar from './components/AppBar/AppBar';
import socials from './data/social.json';
import Footer from './components/Footer/Footer';
import ScrollArrow from './components/ScrollArrow/ScrollArrow';

const HomePage = lazy(() =>
  import('./views/HomePage' /* webpackChunkName: "home-page" */),
);

const AppealPage = lazy(() =>
  import('./views/AppealPage' /* webpackChunkName: "appeal-page" */),
);

const SessionsPage = lazy(() =>
  import('./views/SessionsPage' /* webpackChunkName: "sessions-page" */),
);

const DecisionsPage = lazy(() =>
  import('./views/DecisionsPage' /* webpackChunkName: "decisions-page" */),
);

const SessionsItemPage = lazy(() =>
  import(
    './views/SessionsItemPage' /* webpackChunkName: "sessionsItem-page" */
  ),
);

console.log(workers);

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <AppBar />
        <Suspense>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/appeal" element={<AppealPage />} />
            <Route exact path="/sessions" element={<SessionsPage />} />
            <Route
              exact
              path="/sessions/:convocation"
              element={<SessionsItemPage />}
            />
            <Route
              exact
              path="/sessions/:convocation/:session"
              element={<DecisionsPage />}
            />
          </Routes>
        </Suspense>
        <ScrollArrow />
        <Footer socials={socials} />
      </Layout>
    </BrowserRouter>
  );
};

export default App;
