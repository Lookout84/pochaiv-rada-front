// import React from 'react';
// import PropTypes from 'prop-types';
// import { Card, Button } from 'react-bootstrap';

// const Article = ({ title, author, body, date, isFavorite, image }) => (
//     // <div>
//     //     <h2>{title}</h2>
//     //     <img src={image} alt={title} />
//     //     <h4>{body}</h4>
//     //     <p>Автор: {author}</p>
//     //     <p>Дата додавання: {date}</p>
//     //     <p>{isFavorite}</p>
//     // </div>
//     <div>
//         <Card style={{ width: '18rem' }}>
//             <Card.Img variant="top" src={image} />
//             <Card.Body>
//                 <Card.Title>{title}</Card.Title>
//                 <Card.Text>
//                     {body}
//                 </Card.Text>
//                 <Button variant="primary">Більше</Button>
//             </Card.Body>
//         </Card>
//     </div>
// );

// Article.propTypes = {
//     title: PropTypes.string.isRequired,
//     body: PropTypes.string.isRequired,
//     author: PropTypes.string.isRequired,
//     date: PropTypes.string.isRequired,
//     image: PropTypes.string,
// };

// export default Article;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';

const Article = ({ title, author, body, date, isFavorite, image }) => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(true);
  };

  const handleHide = () => {
    setShowMore(false);
  };

  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{showMore ? body : `${body.slice(0, 100)}...`}</Card.Text>
          {!showMore && (
            <Button variant="primary" onClick={handleShowMore}>
              Більше
            </Button>
          )}
          {showMore && (
            <Button variant="primary" onClick={handleHide}>
              Приховати
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

Article.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default Article;
