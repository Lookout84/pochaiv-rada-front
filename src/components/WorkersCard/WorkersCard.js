import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, Carousel } from 'react-bootstrap';

function WorkersCard({ workers }) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect} variant="dark">{workers.map((worker) =>
            <Carousel.Item>
                <Card>
                    <Card.Img variant="top" src={worker.img} />
                    <Card.Body>
                        <Card.Text>
                            {worker.position}
                        </Card.Text>
                        <h5>{worker.name}</h5>
                    </Card.Body>
                </Card>
            </Carousel.Item>
        )}
        </Carousel>
    )
};

WorkersCard.propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
};

export default WorkersCard;