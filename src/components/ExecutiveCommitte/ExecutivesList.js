import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ExecutivesList = ({ executives }) => {
  return (
    <div className="container mt-4">
      <h2>Рішення виконавчого комітету міської ради</h2>
      <div className="row">
        {executives.map(years => (
          <Card
            style={{ width: '18rem' }}
            className="ms-2 mb-2"
            key={years.year}
          >
            <Card.Body>
              <Card.Title>
                <Link to={`/executives/${years.year}`}>{years.year}</Link>
              </Card.Title>
            </Card.Body>
          </Card>
        ))}
      </div>
      <Button className="mb-2" onClick={() => window.history.back()}>
        Повернутися
      </Button>
    </div>
  );
};

export default ExecutivesList;
