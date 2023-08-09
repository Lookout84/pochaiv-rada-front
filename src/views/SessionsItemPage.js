import React from 'react';
import SessionsItems from '../components/Sessions/SessionsItems';
import { Container } from 'react-bootstrap';
import sessions from '../data/sessions.json';

const SessionsPage = () => {
  return (
    <Container>
      <SessionsItems sessions={sessions} />
    </Container>
  );
};

export default SessionsPage;
