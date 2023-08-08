import React from 'react';
import { Table, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DecisionsList = ({ sessions }) => {
  console.log(sessions);
  return (
    <Container>
      {/* {sessions.map(session => (
        <div key={session.id}>
          <h2>Рішення сесії {session.convocation} скликання міської ради</h2>
        </div>
      ))} */}

      <Table striped="columns">
        <thead>
          <tr>
            <th>№ рішення</th>
            <th>Назва рішення</th>
            <th>Дата прийняття</th>
            <th>Завантажити рішення</th>
          </tr>
        </thead>
        <tbody>
          {sessions.map(session => (
            <tr key={session.id}>
              <td>{session.number}</td>
              <td>{session.name}</td>
              <td>{session.date}</td>
              <td>
                <Link href={session.pdfLink}>PDF файл</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default DecisionsList;
