import React from 'react';
import { Card, CardGroup} from 'react-bootstrap';
import latest from '../../images/logo/icon-logo.png';

const Blog = () => {
    return (
        <>
        <div style={{textAlign:'center', fontWeight:"900",}}>
            <img src={latest} alt="" />
            <h1 style={{color:'rgb(88, 82, 94)'}}>๐๐๐๐๐๐ธ๐๐พ๐๐๐</h1><br />
            <h6 style={{color:'rgb(88, 82, 94)'}}>าษชษดแด สแดแดส าแดแด แดสษชแดแด</h6>
        </div><br />
            <CardGroup className=''>
  <Card>
    <Card.Img variant="top" src="https://images.alisawholesale.com//uploads/20210322/1616427157246901085-2021-03-20_18_15_11-shree-fabs-hit-design-s-271-shree-fabs-wholesaleprice-s-271.jpg" />
    <Card.Body>
    <Card.Title > <h5 style={{color:'rgb(88, 82, 94)'}}>SHREE FABS S 108 L SALWAR KAMEEZ WHOLESALER</h5></Card.Title>
      <Card.Text>
      <small>SHREE FABS S108 | WHOLESALE CLICK HERE TO SEE LATEST PRODUCTS BRANDSalwar Suits, Shree Fabs surat NO. OF PIECES4 PcsAVERAGE PRICE1299 RSCATLOG</small><br />
      <h5>Price: โน1,499.00 INR*</h5>
      <h6 style={{color:'rgb(33, 62, 54)', fontWeight:"bold"}}>In Stock</h6>
      </Card.Text>
    </Card.Body>
   
  </Card>
  <Card>
  <Card.Body>
    <Card.Title > <h5 style={{color:'rgb(88, 82, 94)'}}>SHREE FABS S108 WHOLESALER PAKISTANI SUITS</h5></Card.Title>
      <Card.Text>
      <small>SHREE FABS S108 | WHOLESALE CLICK HERE TO SEE LATEST PRODUCTS BRANDSalwar Suits, Shree Fabs surat NO. OF PIECES4 PcsAVERAGE PRICE1299 RSCATLOG</small><br />
      <h5>Price: โน5,196.19 INR*</h5>
      <h6 style={{color:'rgb(33, 62, 54)', fontWeight:"bold"}}>In Stock</h6>
      </Card.Text>
    </Card.Body>
    <Card.Img variant="top" src="https://www.pehnavafashionmart.com/userdata/public/gfx/54772.jpg" />
  </Card>
</CardGroup>
      
        </>
    );
};

export default Blog;