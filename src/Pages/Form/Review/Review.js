import React, { useEffect, useState } from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const Review = () => {
    const [services, setOurServices] = useState([])
    useEffect(() => {
        fetch('https://evening-basin-66678.herokuapp.com/review')
            .then(result => result.json())
            .then(data => setOurServices(data))
    }, [])
    return (
        <div>
            <div className="text-center p-3 fw-fold">
                <img src="https://brideyleotheme.b-cdn.net/img/bridey-logo-1590373739.jpg" alt="" /><br />
                <h1><span style={{ fontWeight: 'bold', color: 'rgb(234 142 112)' }}>O</span>ur Customers Review</h1>
                <p>SEE OUR CUSTOMER REVIEW, SEE OUR DRESS'ES & BUY DRESS <br /> STAY WITH US <br /><span style={{ color: 'rgb(234, 142, 112)', fontWeight: 'bold' }}>THANKS <br />🤎</span></p>
            </div>
            <div className="row w-100  row-cols-1 row-cols-md-3 p-5 gy-4 text-center" >
                {
                    services.map(dt =>
                        <div key={dt._id}>
                            <div className="col ">
                                <div className="card h-100">
                                    <div style={{ textAlign: "center" }}><img style={{ width: "100px" }} className="card-img-top  " src={dt.img} alt="" /></div>
                                    <div className="card-body">
                                        <h5 style={{ color: 'rgb(20, 51, 42)' }} className="card-title fw-bold">{dt.name}</h5>
                                        <h6 style={{ color: 'rgb(20, 51, 42)' }} className="card-title fw-bold">Profession: {dt.work}</h6>
                                        <p className="card-text fw-bold"><small>{dt.review}</small></p>
                                        <Stack  spacing={0}>
                                           <p style={{color:"#faaf00"}}><Rating name="size-small" defaultValue={dt.rating} size="small" /></p> 
                                        </Stack>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Review;