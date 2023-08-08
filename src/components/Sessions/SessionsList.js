import React, { Link } from 'react';
import Card from 'react-bootstrap/Card';

const SessionList = ({ sessions }) => {
  // const [selectedSession, setSelectedSession] = useState(null);

  // const handleSessionClick = session => {
  //   setSelectedSession(session);
  // };

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
                <Card.Link href="/sessions?=">
                  {convocations.convocation} скликання
                </Card.Link>
              </Card.Title>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SessionList;
