import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
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

const DecisionsSessionPage = lazy(() =>
  import(
    './views/DecisionsSesssionPage' /* webpackChunkName: "decisionsSession-page" */
  ),
);

const SessionsItemPage = lazy(() =>
  import(
    './views/SessionsItemPage' /* webpackChunkName: "sessionsItem-page" */
  ),
);

const ExecutivesPage = lazy(() =>
  import('./views/ExecutivesPage' /* webpackChunkName: "executives-page" */),
);

const ExecutivesItemPage = lazy(() =>
  import(
    './views/ExecutivesItemPage' /* webpackChunkName: "executivesItem-page" */
  ),
);

const DecisionsExecutivePage = lazy(() =>
  import(
    './views/DecisionsExecutivePage' /* webpackChunkName: "decisionsExecutive-page" */
  ),
);

const PetitionPage = lazy(() =>
  import('./views/PetitionPage' /* webpackChunkName: "petition-page" */),
);

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
              element={<DecisionsSessionPage />}
            />
            <Route exact path="/executives" element={<ExecutivesPage />} />
            <Route
              exact
              path="/executives/:year"
              element={<ExecutivesItemPage />}
            />
            <Route
              exact
              path="/executives/:year/:date"
              element={<DecisionsExecutivePage />}
            />
            <Route exact path="/petition" element={<PetitionPage />} />
          </Routes>
        </Suspense>
        <ScrollArrow />
        <Footer socials={socials} />
      </Layout>
    </BrowserRouter>
  );
};

export default App;
