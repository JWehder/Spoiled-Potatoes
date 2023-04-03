import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import styled from "styled-components";

function NewsPane() {
  return (
    <NewsCarousel>
      <Carousel.Item interval={2000}>
        <PanelImage
          className="d-block w-100"
          src="/John-Wick-Chapter-4-Backgrounds-Laptop.jpg"
          alt="First slide"
        />
        <Carousel.Caption>New
          <h3>John Wick is back!</h3>
          <p>See it in theaters now.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <PanelImage
          className="d-block w-100"
          src="/677-1677825679.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Better than Rocky?</h3>
          <p>_</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <PanelImage
          className="d-block w-100"
          src="wp11002057.jpg"
          alt="Third slide"
        />
        <Carousel.Caption style={{backgroundColor: '#36454F'}}>
          <h3>Another flop for DC?</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </NewsCarousel>
  );
}

export default NewsPane;

const PanelImage = styled.img`
    border-radius: 10px;
    width: 300px;
    height: 300px;
`

const NewsCarousel = styled(Carousel)`
    width: 800px;
    margin: auto;
`