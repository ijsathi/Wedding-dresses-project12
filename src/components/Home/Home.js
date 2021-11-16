import React from 'react';
import Review from '../../Pages/Form/Review/Review';
import BridalBanner from '../Banner/BridalBanner';
import Part1 from '../Extra/Part1';
import BridalFooter from '../Footer/BridalFooter';
import Header from '../Header/Header';
import Services from '../Services/Services';
import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            <Header></Header>
            <BridalBanner></BridalBanner>
            <Services></Services>
            <Part1></Part1>
            <div style={{textAlign:"center"}}>
                <Review></Review>
            </div>
            <BridalFooter></BridalFooter>
        </div>
    );
};

export default Home;