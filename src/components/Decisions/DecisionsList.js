import React from 'react';
import { Table, Container } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const DecisionsList = ({ sessions }) => {
  const { convocation, number } = useParams();
  console.log(useParams);

  const selectedConvocationSessions = sessions.find(
    item => item.convocation === convocation,
  );

  console.log(selectedConvocationSessions);
  const filteredSessions = selectedConvocationSessions
    ? selectedConvocationSessions.sessions
    : [];

  return (
    <Container>
      <h2>
        Рішення {number} сесій {convocation} скликання
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
          {filteredSessions.map(session => (
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
    </Container>
  );
};

export default DecisionsList;
