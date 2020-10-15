import React from 'react';
import HeadersContainer from './components/HeadersContainer'

import './index.css';
import bannerImage from './components/assets/banner-static-image.png'

function App() {
  return (
    <>
      <HeadersContainer />
      <article>
        <img src={bannerImage} alt="slider-screenshot" />
      </article>
      <article>
        <img src={bannerImage} alt="slider-screenshot" />
      </article>
    </>
  );
}

export default App;
