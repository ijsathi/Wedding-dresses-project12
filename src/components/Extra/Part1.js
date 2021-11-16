import React from 'react';
import { Carousel } from 'react-bootstrap';
import Blog from './Blog';
import Part from './Part';
import './Part1.css';
import pic1 from '../../images/banner/pic1.png';
import pic2 from '../../images/banner/pic2.png';
import pic3 from '../../images/banner/pic3.png';
import pic4 from '../../images/banner/pic4.png';

const Part1 = () => {
    return (
        <>
        <div style={{textAlign:"center"}}>

        <img src="https://bridey.leotheme.com/img/bridey-logo-1590373739.jpg" alt="" />
        </div>
        <Part></Part><br /><br />
            <Carousel className='part1'>
  <Carousel.Item interval={1000}>
    <img
      className=""
      src="https://image.freepik.com/free-photo/gray-abstract-wireframe-technology-background_53876-101941.jpg"
      alt="First slide"
    />
    <Carousel.Caption className='middle-img'>
        <img src={pic1} alt="" />
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}> 
    <img
      className=" "
      src="https://image.freepik.com/free-photo/white-fabric-texture-background-design-element_53876-123061.jpg"
      alt="Second slide"
    />
   <Carousel.Caption className='middle-img'>
        <img src={pic2}alt="" />
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className=" "
      src="https://image.freepik.com/free-vector/shiny-white-gray-background-with-wavy-lines_1017-25101.jpg"
      alt="Third slide"
    />
    <Carousel.Caption className='middle-img'>
        <img src={pic3}alt="" />
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className=" "
      src="https://image.freepik.com/free-vector/abstract-shiny-lines-white-gray-background_1017-25097.jpg"
      alt="Third slide"
    />
    <Carousel.Caption className='middle-img'>
        <img src={pic4}alt="" />
    </Carousel.Caption>
  </Carousel.Item>
</Carousel><br /><br />
<Blog></Blog>
        </>
    );
};

export default Part1;