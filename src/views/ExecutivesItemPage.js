import React from 'react';
import ExecutivesItem from '../components/ExecutiveCommitte/ExecutivesItem';
import { Container } from 'react-bootstrap';
import executives from '../data/executives.json';

const ExecutivesItemPage = () => {
  return (
    <Container>
      <ExecutivesItem executives={executives} />
    </Container>
  );
};

export default ExecutivesItemPage;
