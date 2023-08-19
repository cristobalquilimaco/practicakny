import React from 'react';
import Carousel from './components/Carousel';
import images from './utils/img';
import "./app.css"



const App = () => {
  const items = [
<div className='Container'>
  <div className='Cuadro'>
    <div className='fireEffect'></div>
    <div className='iconGroup'>
      <i className='bx bxs-hot icon1'></i>
      <i className='bx bxs-hot icon2'></i>
      <i className='bx bxs-hot icon3'></i>
    </div>
    <img className='img_pilar rengoku' src={images.rengoku} alt="" />
    <h3>Slide 1</h3>
  </div>
</div>
    ,
<div className='Container'>
  <div className='Cuadro'>
    <div className='fireEffect'></div>
    <div className='iconGroup'>
      <i className='bx bxs-hot icon1'></i>
      <i className='bx bxs-hot icon2'></i>
      <i className='bx bxs-hot icon3'></i>
    </div>
    <img className='img_pilar rengoku' src={images.gyomei} alt="" />
    <h3>Slide 1</h3>
  </div>
</div>,
<div className='Container'>
  <div className='Cuadro'>
    <div className='fireEffect'></div>
    <div className='iconGroup'>
      <i className='bx bxs-hot icon1'></i>
      <i className='bx bxs-hot icon2'></i>
      <i className='bx bxs-hot icon3'></i>
    </div>
    <img className='img_pilar rengoku' src={images.mitsuri} alt="" />
    <h3>Slide 1</h3>
  </div>
</div>,
<div className='Container'>
  <div className='Cuadro'>
    <div className='fireEffect'></div>
    <div className='iconGroup'>
      <i className='bx bxs-hot icon1'></i>
      <i className='bx bxs-hot icon2'></i>
      <i className='bx bxs-hot icon3'></i>
    </div>
    <img className='img_pilar rengoku' src={images.obanai} alt="" />
    <h3>Slide 1</h3>
  </div>
</div>,
<div className='Container'>
  <div className='Cuadro'>
    <div className='fireEffect'></div>
    <div className='iconGroup'>
      <i className='bx bxs-hot icon1'></i>
      <i className='bx bxs-hot icon2'></i>
      <i className='bx bxs-hot icon3'></i>
    </div>
    <img className='img_pilar rengoku' src={images.rengoku} alt="" />
    <h3>Slide 1</h3>
  </div>
</div>,
<div className='Container'>
  <div className='Cuadro'>
    <div className='fireEffect'></div>
    <div className='iconGroup'>
      <i className='bx bxs-hot icon1'></i>
      <i className='bx bxs-hot icon2'></i>
      <i className='bx bxs-hot icon3'></i>
    </div>
    <img className='img_pilar rengoku' src={images.rengoku} alt="" />
    <h3>Slide 1</h3>
  </div>
</div>,
<div className='Container'>
  <div className='Cuadro'>
    <div className='fireEffect'></div>
    <div className='iconGroup'>
      <i className='bx bxs-hot icon1'></i>
      <i className='bx bxs-hot icon2'></i>
      <i className='bx bxs-hot icon3'></i>
    </div>
    <img className='img_pilar rengoku' src={images.rengoku} alt="" />
    <h3>Slide 1</h3>
  </div>
</div>,
<div className='Container'>
  <div className='Cuadro'>
    <div className='fireEffect'></div>
    <div className='iconGroup'>
      <i className='bx bxs-hot icon1'></i>
      <i className='bx bxs-hot icon2'></i>
      <i className='bx bxs-hot icon3'></i>
    </div>
    <img className='img_pilar rengoku' src={images.rengoku} alt="" />
    <h3>Slide 1</h3>
  </div>
</div>,
<div className='Container'>
  <div className='Cuadro'>
    <div className='fireEffect'></div>
    <div className='iconGroup'>
      <i className='bx bxs-hot icon1'></i>
      <i className='bx bxs-hot icon2'></i>
      <i className='bx bxs-hot icon3'></i>
    </div>
    <img className='img_pilar rengoku' src={images.rengoku} alt="" />
    <h3>Slide 1</h3>
  </div>
</div>,

  ];

  return (
    <div className='app_carousel'>
      <h1>Carrusel Kimetsu</h1>
      <Carousel items={items} />
    </div>
  );
};


export default App;