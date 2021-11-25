import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import logo from '../.././images/logo/icon-logo.png';
import wedding1 from '../.././images/banner/wedding-banner1.png';
import wedding2 from '../.././images/banner/wedding-banner2.png';
import wedding3 from '../.././images/banner/wedding-banner3.png';
import wedding4 from '../.././images/banner/wedding-banner4.png';
import './BridalBanner.css';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function BridalBanner() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
      <div className="banner">
    <Box id='slideImg'>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
      <img onChange={handleStepChange} id="slideImg" src={wedding1} alt="" />
      <img onChange={handleStepChange} id="slideImg" src={wedding2} alt="" />
      <img onChange={handleStepChange} id="slideImg" src={wedding3} alt="" />
      <img onChange={handleStepChange} id="slideImg" src={wedding4} alt="" />
      </AutoPlaySwipeableViews>
      <MobileStepper
        activeStep={activeStep}
      />
    </Box>
    <div className="overlay">
    <div className="content" >
      <p style={{color:"#e9ac98"}}>STAY WITH US</p>
      <p style={{color:"white"}}>
          <img src={logo} alt="" />
      </p>
      <h1><span style={{fontWeight:'bold',color:'rgb(88, 82, 94)'}}>25% OFF</span> </h1>
      <h3 style={{fontWeight:'bold',color:'rgb(88, 82, 94)'}}>and free Ship order over $100. 
      <img style={{width:'70px'}} src="https://cdn-icons-png.flaticon.com/512/5976/5976095.png" alt="" /></h3>
      <div>
        <button className='header-btn' type='button'><a className='youtube' style={{color:'white',}} href="https://youtu.be/i9E_Blai8vk">WATCH MORE</a> </button>
      </div>
    </div>
  </div>
  </div>
  );
}

export default BridalBanner;