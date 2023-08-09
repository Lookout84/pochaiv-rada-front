import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link, useParams } from 'react-router-dom';

const SessionsItems = ({ sessions }) => {
  const { convocation } = useParams();

  const selectedConvocationSessions = sessions.find(
    item => item.convocation === convocation,
  );

  console.log(selectedConvocationSessions);
  const filteredSessions = selectedConvocationSessions
    ? selectedConvocationSessions.sessions
    : [];

  const uniqueNumbers = [
    ...new Set(filteredSessions.map(session => session.number)),
  ];

  return (
    <div className="container mt-4">
      <h2>Сесії {convocation} скликання</h2>
      <div className="row">
        {uniqueNumbers.map(number => (
          <Card style={{ width: '18rem' }} className="ms-2 mb-2" key={number}>
            <Card.Body>
              <Card.Title>
                <Link to={`/sessions/${convocation}/${number}`}>
                  {number} cесія
                </Link>
              </Card.Title>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SessionsItems;
