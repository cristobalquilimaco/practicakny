import React, { useState } from 'react';
import './Carousel.css';

const Carousel = ({ items }) => {
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
        <div
          className="slide-container"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div key={index} className="slide">
              {item}
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