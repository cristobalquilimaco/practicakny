import React, { useState } from 'react';
import './Carousel.css';
import items from '../utils/items';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    const nextIndex = (currentIndex + 1) % items.length;
    setCurrentIndex(nextIndex);
  };
  
  const goToPrevSlide = () => {
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    setCurrentIndex(prevIndex);
  };

  return (
    <div className="carousel">
      <div className="slider">
        <div className="slide-container" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {items?.map((item, id) => (
            <div key={id} className="slide">
              <article className='person_card'>
                <img className='img_pilar' src={item.image} alt="" />
                <h1 className='name'>{item.tipo}</h1>
              </article>
            </div>
          ))}
        </div>
      </div>
      <section className='btn'>
        <button className="prev-button" onClick={goToPrevSlide}>Prev</button>
        <button className="next-button" onClick={goToNextSlide}>Next</button>
      </section>
    </div>
  );
};

export default Carousel;
