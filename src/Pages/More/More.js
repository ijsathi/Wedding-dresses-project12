import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import BridalFooter from '../../components/Footer/BridalFooter';
import Header from '../../components/Header/Header';
import useAuth from '../../hooks/useAuth';
import './More.css';

const More = () => {
  const {id} = useParams();
  const {addToCart} =useAuth();
    const [service, setService] = useState({})
    useEffect(()=>{
      fetch(`https://evening-basin-66678.herokuapp.com/services/${id}`)
      .then(res =>res.json())
      .then(data => setService(data))
    },[])
    console.log(service);
    return (
        <div>
            <Header></Header>
            <Container style={{paddingTop:'50px'}}>
              <Row>
                <Col>
                <img src={service.img} className="card-img-top h-100 w-100 " alt="" />
                </Col>
                <Col>
                <h3 className="fw-bold "> {service.name}</h3>
                <p className="fw-bold ">{service.description}</p>
                <Row>
                <Col>
                <h1><i className="fas fa-dollar-sign"></i> {service.price}</h1>
                <p><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i>  {service.rating}</p>
                </Col> <Col> <h5>Size:</h5> {service.size}</Col>
               <Col><h5>Color:</h5> BLACK🖤 <br /> WHITE🤍 </Col>
               <hr />
                <Col className='booking'>
               <p  style={{backgroundColor:"rgb(233, 172, 152)"}}>SAVE 20%</p>
                </Col>
              </Row>
               <Row>
                 <Col> <img style={{width:'20px'}} src="https://cdn-icons.flaticon.com/png/512/78/premium/78637.png?token=exp=1636737302~hmac=7ef3f5d2f85c306c240f4c9247ed406f" alt="" /> Extended warranty</Col>
               </Row>
               <Row>                
               <Col> <img style={{width:'20px'}} src="https://cdn-icons-png.flaticon.com/512/411/411763.png" alt="" />  Free shipping over $49 + free returns & exchanges</Col>
               </Row>
               <Row>                
               <Col> <img style={{width:'20px'}} src="https://cdn-icons.flaticon.com/png/512/2946/premium/2946326.png?token=exp=1636737925~hmac=f12ecd9a91c66a5036ad8ea99cde2338" alt="" />  100% Original and quality</Col>
               </Row> <br />
               <Row>
               <Col className='booking'>
               <button onClick={() => addToCart(service)}> ADD TO CART </button>
                </Col>
                <Col className='booking'>
               <Link to='/writereview'>
               <button onClick={() => addToCart(service)}> WRITE REVIEW </button>
               </Link>
                </Col>
               </Row>
                </Col>
              </Row>
            </Container>
            <BridalFooter></BridalFooter>
        </div>
    );
    
};

export default More;
