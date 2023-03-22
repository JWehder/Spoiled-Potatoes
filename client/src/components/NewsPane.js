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
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <PanelImage
          className="d-block w-100"
          src="/677-1677825679.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <PanelImage
          className="d-block w-100"
          src="wp11002057.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
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