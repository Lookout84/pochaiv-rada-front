import React from 'react';
import DecisionsSessionsList from '../components/Decisions/DecisionsSessionsList';
import { Container } from 'react-bootstrap';
import sessions from '../data/sessions.json';

const DecisionsSessionPage = () => {
  return (
    <Container>
      <DecisionsSessionsList sessions={sessions} />
    </Container>
  );
};

export default DecisionsSessionPage;
