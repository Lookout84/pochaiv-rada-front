import React from 'react';
import {Card, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SessionList = ({ sessions }) => {
  return (
    <div className="container mt-4">
      <h2>Рішення сесій міської ради</h2>
      <div className="row">
        {sessions.map(convocations => (
          <Card
            style={{ width: '18rem' }}
            className="ms-2 mb-2"
            key={convocations.convocation}
          >
            <Card.Body>
              <Card.Title>
                <Link to={`/sessions/${convocations.convocation}`}>
                  {convocations.convocation} скликання
                </Link>
              </Card.Title>
            </Card.Body>
          </Card>
        ))}
      </div>
      <Button className='mb-2' onClick={() => window.history.back()}>Повернутися</Button>
    </div>
  );
};

export default SessionList;
