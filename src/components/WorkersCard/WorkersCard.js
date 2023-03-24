import React from 'react';
import PropTypes from 'prop-types';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import s from './WorkersCard.module.css';

function WorkersCard({ workers }) {
  return (
    <div className="slide-container">
      <Fade arrows={false}>
        {workers.map(worker => (
          <div className="each-fade" key={worker.id}>
            <h2 className={s.title}>Керівництво</h2>
            <div className={`"image-container" {s.img_box}`}>
              <img className={s.img} src={worker.img} alt={worker.name} />
              <div className={s.title_box}>
                <h5 className={s.title}>{worker.name}</h5>
                <p className={s.text}>{worker.position}</p>
              </div>
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
}

WorkersCard.propTypes = {
  workers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default WorkersCard;
