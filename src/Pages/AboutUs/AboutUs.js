import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BridalFooter from '../../components/Footer/BridalFooter';
import Header from '../../components/Header/Header';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div>
            <Header></Header>
            <div className="contact-banner">
      <div className="contact-slider">
        <img id="contact-slideImg" src="https://image.freepik.com/free-vector/wedding-invitation-announcement-card-with-floral-background-artwork_1217-1058.jpg" alt="" />
      </div>
      <div className="contact-overlay">
        <div className="contact-content">
          <h4 className='contact-con'><span style={{fontWeight:'bold',color:'rgb(153, 2, 77)'}}>A</span>BOUT US </h4>
          
          <div>
            
            <Link to='/'>
            <button className='contact-header-btn contact-youtube' type='button'style={{color:'white',}} >HOME</button>
            </Link>
            <Link to='/aboutus'>
            <button className='contact-header-btn contact-btn2 contact-youtube' type='button'style={{color:'white',}} >ABOUT US</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    <Container style={{padding:'20px'}}>
  <Row>
    <Col>
    <h5 style={{textAlign:'center', fontWeight:'bold'}}>About Us</h5>< hr />
    <h1 style={{ fontWeight:'bold'}}>Who We Are</h1>
    <p>We document handpicked elements and moments that are packed with love, to render your wedding film as illustrious as a contemporary cinematic record. <br /> Printer took a galley of type and scrambled it to make a type speci menu book. It has survived not only five centuries, but also the leap intoelectronic typesetting, remaining essentially unchanget was popularised.</p>
    <Container>
      <Row>
        <Col >
        <img className="signature" style={{ verticalAlign:'middle'}} src="http://themescare.com/demos/peulis-v6/assets/img/signature.png" alt="signature" />
       
        </Col>
        <Col style={{ verticalAlign:'middle'}}>
        <h3>Robertho Garcia</h3>
        <h6>Founder</h6>
        <hr />
        </Col>
      </Row>
    </Container>
    </Col>
    <Col className='founder'>
    <img style={{ paddingTop:'140px', marginLeft:'20px'}} src="http://themescare.com/demos/peulis-v6/assets/img/about.jpg" alt="" />
    </Col>
  </Row>
</Container>
<Container>
  <Row>
    <Col sm={8}>
      <img style={{width:"75%"}} src="https://image.freepik.com/free-vector/elegant-wedding-landing-page_52683-13172.jpg" alt="" />
    </Col>
    <Col sm={4}>
      <h1 className='pt-5'><span style={{fontWeight:'bold',color:'rgb(153, 2, 77)'}}>O</span>ur Story</h1>
      <p>We document handpicked elements and moments that are packed with love, to render your wedding film as illustrious as a contemporary cinematic record.</p>
    </Col>
  </Row>
  <Row>
    <Col  sm={4}>
      <h1 className='pt-5'><span style={{fontWeight:'bold',color:'rgb(153, 2, 77)'}}>O</span>ur Value</h1>
      <p>We document handpicked elements and moments that are packed with love, to render your wedding film as illustrious as a contemporary cinematic record.</p>
      </Col>
    <Col sm={8}>
      <img style={{width:"75%"}} src="https://image.freepik.com/free-vector/elegant-wedding-invitation-card_52683-49353.jpg" alt="" />
    </Col>
  </Row>
</Container>
<div className="text-center p-5">
  <h1><span style={{fontWeight:'bold',color:'chocolate'}}>D</span>estinations</h1>
  <p> A place to which one is journeying or to which something is sent when the package has reached its destination kept their destination secret. <br />A place of interest where tourists visit, typically for its inherent or an exhibited natural or cultural value, historical significance, natural or built beauty, offering leisure and amusement.</p>
  <Container>
    <Row>
      <Col>
      <Carousel className='part1 caru'>
  <Carousel.Item interval={1000}>
    <img
      className=""
      src="https://www.heenastyle.com/image/cache/catalog/8546-RT8893/FHRT8893106082-610x1050.jpg"
      alt="First slide"
    />
    <Carousel.Caption className='car'>
      <h2><span style={{fontWeight:'bold',color:'chocolate'}}>W</span>EDDING Dress</h2>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}> 
    <img
      className=" "
      src="https://balajiemporium.com/wp-content/uploads/2021/01/10-2.jpg"
      alt="Second slide"
    />
   <Carousel.Caption className='car'>
      <h2><span style={{fontWeight:'bold',color:'chocolate'}}>W</span>EDDING Dress</h2>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className=" "
      src="https://i.pinimg.com/originals/f7/26/a4/f726a406f4679b85a00f9b37cd896ef9.jpg"
      alt="Third slide"
    />
    <Carousel.Caption className='car'>
      <h2><span style={{fontWeight:'bold',color:'chocolate'}}>W</span>EDDING Dress</h2>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      </Col>
      <Col>
      <Carousel className='part1 caru'>
  <Carousel.Item interval={1000}>
    <img
      className=""
      src="https://i0.wp.com/shaadiwish.com/blog/wp-content/uploads/2021/02/pastel-green-bridal-lehenga.jpg"
      alt="First slide"
    />
    <Carousel.Caption className='car'>
      <h2><span style={{fontWeight:'bold',color:'chocolate'}}>W</span>EDDING Dress</h2>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}> 
    <img
      className=" "
      src="https://media.weddingz.in/images/d24350596c6c510c83b3e8a5d6a38ade/10-Muslim-Brides-who-Rocked-their-Wedding-Outfits-9.jpg"
      alt="Second slide"
    />
   <Carousel.Caption className='car'>
      <h2><span style={{fontWeight:'bold',color:'chocolate'}}>W</span>EDDING Dress</h2>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className=" "
      src="https://image.dhgate.com/0x0s/f2-albu-g15-M00-15-61-rBVa3l9zNouACEg5AAKCUJbT6Ks298.jpg/hijab-muslim-wedding-dresses-2021-appliques.jpg"
      alt="Third slide"
    />
    <Carousel.Caption className='car'>
    <h2><span style={{fontWeight:'bold',color:'chocolate'}}>W</span>EDDING Dress</h2>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      </Col>
    </Row>
  </Container>
</div>
            <BridalFooter></BridalFooter>
        </div>
    );
};

export default AboutUs;