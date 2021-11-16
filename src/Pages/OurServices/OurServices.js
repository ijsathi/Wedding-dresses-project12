import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BridalFooter from '../../components/Footer/BridalFooter';
import Header from '../../components/Header/Header';
import useAuth from '../../hooks/useAuth';
import './OurServices.css';

const OurServices = () => {
    const {contexts} = useAuth()
    const [services, setOurServices] = useState([])
    useEffect(()=>{
        fetch('https://evening-basin-66678.herokuapp.com/services/', {
            headers:{
                'authorization' : `Bearer ${contexts.token}`
            }
        })
        .then(result=> result.json())
        .then(data=>setOurServices(data))
    },[])
    return (
        <div className=''>
            <Header></Header>
            <div className="text-center p-3 fw-fold">
                <img src="https://brideyleotheme.b-cdn.net/img/bridey-logo-1590373739.jpg" alt="" /><br />
                <h1><span style={{fontWeight:'bold',color:'rgb(234 142 112)'}}>O</span>ur Popular Dresses</h1>
                <p>Bringing to life all the loveliness a bride has long envisioned, finding your beautiful wedding dress with us creates wonderful memories that will last forever.</p>
            </div>
            <div className="row  row-cols-1 row-cols-md-3 p-5 gy-4 text-center" >
            {
                services.map(dt =>
                    <div key={dt.id}>
                      <div className="col services-card">
                        <div className="card ser-card h-100">
                        <Link className='more-img' to={`/more/${dt._id}`}>
                        <img className="card-img-top " height='450px' src={dt.img}alt="" />
                            </Link>
                            
                             <div className="card-body">
                             <h6 style={{color:'rgb(20, 51, 42)'}} className="card-title fw-bold">{dt.name}</h6>
                             <p className="card-text"><small>{dt.description}</small></p>
                             <Container>
                                 <Row>
                                     <Row> <Col><p className=" fw-bold"><img style={{width:'28px'}} src="https://cdn-icons.flaticon.com/png/512/5447/premium/5447406.png?token=exp=1636733597~hmac=566aa5064366133086f6096e24a26f10" alt="" /> {dt.size}</p></Col>
                                     <Col className='star-icon'><p className=" fw-bold"><i className="fas fa-dollar-sign"></i> {dt.price}</p></Col>
                                    </Row>                              
                                 
                                 </Row>
                                 <Row><hr /></Row>
                                 <Row className='booking ' style={{textAlign:"center"}}>
                                 <Col style={{color:'rgb(20, 51, 42)'}}> {dt.class}</Col>
                                    <Col className='details-btn'> <Link style={{textAlign:"center"}} to={`/more/${dt._id}`}>
                                    <button>View Details <i className="fas fa-info-circle"></i></button>
                                </Link></Col>
                                 </Row>
                             </Container>
                            </div>
                        </div>
                      </div>
                    </div>
                    )
            }
           
        </div>
        <BridalFooter></BridalFooter>
            
        </div>
    );
};

export default OurServices;