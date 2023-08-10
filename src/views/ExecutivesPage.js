import React from 'react';
import ExecutivesList from '../components/ExecutiveCommitte/ExecutivesList';
import { Container } from 'react-bootstrap';
import executives from '../data/executives.json';

const ExecutivesPage = () => {
  return (
    <Container>
      <ExecutivesList executives={executives} />
    </Container>
  );
};

export default ExecutivesPage;
