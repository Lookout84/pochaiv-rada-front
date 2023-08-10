import React from 'react';
import { Table, Button, Container } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const DecisionsList = ({ sessions }) => {
  const { convocation, session } = useParams();

  const selectedConvocationSessions = sessions.find(
    item => item.convocation === convocation,
  );

  const filteredSessions = selectedConvocationSessions
    ? selectedConvocationSessions.sessions
    : [];

  const filteredBySession = filteredSessions.filter(
    sessionItem => sessionItem.number === session,
  );

  return (
    <Container>
      <h2>
        Рішення {session} сесії {convocation} скликання
      </h2>
      <Table striped>
        <thead>
          <tr>
            <th>№ рішення</th>
            <th>Назва рішення</th>
            <th>Дата прийняття</th>
            <th>Завантажити рішення</th>
          </tr>
        </thead>
        <tbody>
          {filteredBySession.map(session => (
            <tr key={session.id}>
              <td>{session.decision}</td>
              <td>{session.name}</td>
              <td>{session.date}</td>
              <td>
                <Link to={session.pdfLink}>PDF файл</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button className="mb-2" onClick={() => window.history.back()}>
        Повернутися
      </Button>
    </Container>
  );
};

export default DecisionsList;
