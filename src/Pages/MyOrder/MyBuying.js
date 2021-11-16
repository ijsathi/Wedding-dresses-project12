import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './MyBooking.css';

const MyBuying = () => {
    const {selectedBooking, remove} = useAuth();
    const totalPrice = selectedBooking.reduce((total,booking)=>total + booking.price, 0)
    return (
        <div>
            {
              selectedBooking.length ?
              <div className='text-center p-3 fw-bold'>
                <h2>Total {selectedBooking.length} Dress Added</h2>
                <h4>Total Cost : {totalPrice}</h4>
                <Link to='/form'>
                  <button>Order Place</button>
                </Link>
              </div>:
              <div className="text-center"><h1>No Cost</h1></div>
            }
            <div className="">
            {selectedBooking.length ? <div>
            {
                selectedBooking.map(booking => (

                    // <h1>{booking.name}</h1>
                    <Container style={{paddingTop:'50px'}}>
              <Row key={booking._id}>
                <Col>
                <img src={booking.img} className="card-img-top h-100 w-100 " alt="" />
                </Col>
                <Col>
                <h2 className="fw-bold "> {booking.name}</h2>
                <p className="fw-bold ">{booking.description}</p>
                <Row>
                <Col>
                <h1><i className="fas fw-small fa-dollar-sign"></i> {booking.price}</h1>
                <p><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i></p>
                </Col>
                <Col>
                           
                            <Row>
                              <Col>
                              <button className=' detail-btm' onClick={() => remove (booking._id)}><i className="fas fa-trash"></i> Remove </button></Col>
                            </Row>
                </Col>
                <hr />
              <p className="text-center fw-bold">{booking.time}</p>
              
              </Row>
                </Col>
              </Row>
            </Container>
           
                ))
            }
            </div> :
             <div> 
             <h1 className='text-danger text-center'>No Booking Found</h1>    
             <h4 className='text-center'>Go To Our <Link style={{textDecoration:"none", color:"green"}} to='/dresses'>SHOP</Link> & Added Dress'es Add to Cart</h4>       
           </div>
            }
            </div>
        </div>
    );
};

export default MyBuying;