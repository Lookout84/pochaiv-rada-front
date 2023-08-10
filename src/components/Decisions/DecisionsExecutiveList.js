import React from 'react';
import { Table, Button, Container } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const DecisionsExecutiveList = ({ executives }) => {
  const { year, date } = useParams();

  const selectedYearExecutives = executives.find(item => item.year === year);

  const filteredExecutives = selectedYearExecutives
    ? selectedYearExecutives.executives
    : [];

  const filteredByDate = filteredExecutives.filter(
    executiveItem => executiveItem.date === date,
  );
  console.log(filteredByDate);
  return (
    <Container>
      <h2>Рішення виконавчого комітету за {date} року</h2>
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
          {filteredByDate.map(executive => (
            <tr key={executive.id}>
              <td>{executive.number}</td>
              <td>{executive.name}</td>
              <td>{executive.date}</td>
              <td>
                <Link to={executive.pdfLink}>PDF файл</Link>
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

export default DecisionsExecutiveList;
