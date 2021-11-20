import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import OurServices from './Pages/OurServices/OurServices';
import AboutUs from './Pages/AboutUs/AboutUs';
import ContactUs from './Pages/ContactUs/ContactUs';
import NotFound from './components/NotFound/NotFound';
import More from './Pages/More/More';
import SignUp from './Pages/SignUp/SignUp';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Opinion from './Pages/Opinion/Opinion';
import MyBooking from './Pages/MyOrder/MyBooking';
import Thanks from './Pages/Thanks/Thanks';
import Form from './Pages/Form/Form';
import BridalFooter from './components/Footer/BridalFooter';
import BridalBanner from './components/Banner/BridalBanner';
import BridalDashboard from './Pages/Dashboard/BridalDashboard';
import SignIn from './Pages/SignUp/SignIn';
import Register from './Pages/SignUp/Register/Register';
import Review from './Pages/Form/Review/Review';
import MyBuying from './Pages/MyOrder/MyBuying';
import WriteReview from './Pages/Form/Review/WriteReview';
import PayBill from './Pages/Dashboard/PayBill/PayBill';

function App() {
  return (
    <div className="">
      <AuthProvider>
      <Router>
       <Switch>
         <Route exact path='/'>
           <Home></Home>
         </Route>
         
         <Route path='/home'>
           <Home></Home>
         </Route>
         <PrivateRoute path='/dresses'>
           <OurServices></OurServices>
         </PrivateRoute>
         <PrivateRoute path='/mybooking'>
            <MyBooking></MyBooking>
         </PrivateRoute>
         <Route path='/aboutus'>
           <AboutUs></AboutUs>
         </Route>
         <Route path='/contactus'>
            <ContactUs></ContactUs>
         </Route>
         <PrivateRoute path='/more/:id'>
            <More></More>
          </PrivateRoute>
          <Route path='/signup'>
            <SignUp></SignUp>
          </Route>
          <Route path='/opinion'>
          <Opinion></Opinion>
          </Route>
          <Route path='/review'>
            <Review></Review>
          </Route>
          <Route path='/writereview'>
            <WriteReview></WriteReview>
          </Route>
          <Route path='/thanks'>
            <Thanks> </Thanks>
          </Route>
          <Route path='/form'>
            <Form></Form>
          </Route>
          <Route path="/bridalFooter">
           <BridalFooter></BridalFooter>
         </Route>
         <Route path='/banner'>
           <BridalBanner></BridalBanner>
         </Route>
         <PrivateRoute path='/bridaldashboard'>
           <BridalDashboard></BridalDashboard>
         </PrivateRoute>
         <Route path='/myBuying'>
           <MyBuying></MyBuying>
         </Route>
         <Route path='/signin'>
           <SignIn></SignIn>
         </Route>
         <Route path='/reg'>
           <Register></Register>
         </Route>
         <Route path='/paybill'>
           <PayBill></PayBill>
         </Route>
         <Route path="*">
           <NotFound></NotFound>
         </Route>
       </Switch>
     </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
