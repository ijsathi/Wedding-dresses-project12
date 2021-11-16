import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import useAuth from '../../hooks/useAuth';
import './Services.css';
import latest from '../../images/logo/icon-logo.png'

const Services = () => {
    // const {addToCart} =useAuth()
    const [services, setOurServices] = useState([])

    useEffect(()=>{
        fetch('https://evening-basin-66678.herokuapp.com/services/')
        .then(result=> result.json())
        .then(data=>setOurServices(data))
    },[])
    return (
        <>
        <div style={{textAlign:'center', fontWeight:"900",}}>
            <img src={latest} alt="" />
            <h1 style={{color:'rgb(88, 82, 94)'}}>𝓑𝓮𝓼𝓽 𝓼𝓮𝓵𝓵𝓮𝓻</h1><br />
            <h6 style={{color:'rgb(88, 82, 94)'}}>𝒩𝑒𝓌 𝐿𝑜𝑜𝓀𝓈 𝒯𝑜 𝐿𝑜𝓋𝑒</h6>
        </div>
         <div className="row  row-cols-1 row-cols-md-3 p-5 gy-4 " >
            {
                services.slice(0,6).map(dt =>
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
        </>
        
    );
};

export default Services;