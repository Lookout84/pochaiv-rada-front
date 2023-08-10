import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const SessionsItems = ({ executives }) => {
  const { year } = useParams();

  const selectedYearExecutives = executives.find(item => item.year === year);

  console.log(selectedYearExecutives);
  const filteredExecutives = selectedYearExecutives
    ? selectedYearExecutives.executives
    : [];

  const uniqueDate = [
    ...new Set(filteredExecutives.map(executive => executive.date)),
  ];
  console.log(uniqueDate);
  return (
    <div className="container mt-4">
      <h2>Рішення виконавчого комітету за {year} рік</h2>
      <div className="row">
        {uniqueDate.map(date => (
          <Card style={{ width: '18rem' }} className="ms-2 mb-2" key={date}>
            <Card.Body>
              <Card.Title>
                <Link to={`/executives/${year}/${date}`}>{date}</Link>
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

export default SessionsItems;
