import React from 'react';
import SessionList from '../components/Sessions/SessionsList';
import { Container } from 'react-bootstrap';
import sessions from '../data/sessions.json';

const SessionsPage = () => {
  return (
    <Container>
      <SessionList sessions={sessions} />
    </Container>
  );
};

export default SessionsPage;
