import React from 'react';
import PropTypes from 'prop-types';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import s from './WorkersCard.module.css';



function WorkersCard({ workers }) {

    return (
        <div className="slide-container">
            <Fade arrows={false}>
                {workers.map((worker) => (
                    <div className="each-fade" key={worker.id}>
                        <div className={`"image-container" {s.img_box}`}>
                            <img className={s.img} src={worker.img} alt={worker.name} />
                            <div className={s.title_box}>
                                <h5 className={s.title}>{worker.name}</h5>
                                <p className={s.text}>{worker.position}</p>
                            </div>
                        </div>
                    </div>
                ))
                }
            </Fade >
        </div >
    )
    // const [index, setIndex] = useState(0);

    // const handleSelect = (selectedIndex, e) => {
    //     setIndex(selectedIndex);
    // };
    // return (
    //     <Carousel activeIndex={index} onSelect={handleSelect} variant="dark">{workers.map((worker) =>
    //         <Carousel.Item>
    //             <Card>
    //                 <Card.Img variant="top" src={worker.img} />
    //                 <Card.Body>
    //                     <Card.Text>
    //                         {worker.position}
    //                     </Card.Text>
    //                     <h5>{worker.name}</h5>
    //                 </Card.Body>
    //             </Card>
    //         </Carousel.Item>
    //     )}
    //     </Carousel>
    // )
};

WorkersCard.propTypes = {
    workers: PropTypes.arrayOf(
        PropTypes.shape(
            {
                id: PropTypes.string.isRequired,
            }
        )
    ).isRequired
};

export default WorkersCard;