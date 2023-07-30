import React from 'react';
import AppealForm from '../components/Appeal/AppealForm';
import { Container } from 'react-bootstrap';
import categories from '../data/categories.json';
import socialsStatus from '../data/socialStatus.json';
import requestTypes from '../data/requestType.json';
import directionSigns from '../data/directionSign.json';
import genders from '../data/genders.json';

const AppealPage = () => {
  return (
    <Container>
      <AppealForm
        categories={categories}
        socialsStatus={socialsStatus}
        requestTypes={requestTypes}
        directionSigns={directionSigns}
        genders={genders}
      />
    </Container>
  );
};

export default AppealPage;
