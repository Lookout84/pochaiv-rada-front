import React from 'react';
import DecisionsList from '../components/Decisions/DecisionsList';
import { Container } from 'react-bootstrap';
import sessions from '../data/sessions.json';

const DecisionsPage = () => {
  return (
    <Container>
      <DecisionsList sessions={sessions} />
    </Container>
  );
};

export default DecisionsPage;
