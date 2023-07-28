import React, { useState } from 'react';

const SessionList = ({ sessions }) => {
  const [selectedSession, setSelectedSession] = useState(null);

  const handleSessionClick = session => {
    setSelectedSession(session);
  };

  return (
    <div className="container mt-4">
      <h2>Рішення сесій міської ради</h2>
      <div className="row">
        {sessions.map(convocations => (
          <div className="col-md-6 mt-3" key={convocations.convocation}>
            <h3>Сесії {convocations.convocation} скликання</h3>
            <ul className="list-group">
              {convocations.sessions.map(session => (
                <li
                  className="list-group-item d-flex justify-content-between align-items-center"
                  key={session.id}
                  onClick={() => handleSessionClick(session)}
                  style={{ cursor: 'pointer' }}
                >
                  {session.number} - {session.name}
                  <span className="badge bg-primary">Переглянути</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {selectedSession && (
        <div className="mt-4">
          <h4>{selectedSession.number}</h4>
          <h5>{selectedSession.name}</h5>
          <p>{selectedSession.description}</p>
          <a href={selectedSession.pdfLink} target="_blank" rel="noreferrer">
            Посилання на PDF
          </a>
        </div>
      )}
    </div>
  );
};

export default SessionList;

// import React, { useState } from 'react';
// import Tab from 'react-bootstrap/Tab';
// import Tabs from 'react-bootstrap/Tabs';

// function ControlledTabsExample() {
//   const [key, setKey] = useState('home');

//   return (
//     <Tabs
//       id="controlled-tab-example"
//       activeKey={key}
//       onSelect={k => setKey(k)}
//       className="mb-3"
//     >
//       <Tab eventKey="home" title="Home">
//         Tab content for Home
//       </Tab>
//       <Tab eventKey="profile" title="Profile">
//         Tab content for Profile
//       </Tab>
//       <Tab eventKey="contact" title="Contact" disabled>
//         Tab content for Contact
//       </Tab>
//     </Tabs>
//   );
// }

// export default ControlledTabsExample;
