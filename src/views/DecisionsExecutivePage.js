import React from 'react';
import DecisionsExecutiveList from '../components/Decisions/DecisionsExecutiveList';
import { Container } from 'react-bootstrap';
import executives from '../data/executives.json';

const DecisionsExecutivePage = () => {
  return (
    <Container>
      <DecisionsExecutiveList executives={executives} />
    </Container>
  );
};

export default DecisionsExecutivePage;
