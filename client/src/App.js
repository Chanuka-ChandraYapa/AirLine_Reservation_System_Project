import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import UpcomingFlights from './Pages/Upcoming_Flight/cards';
import NavigationBarAdmin from './Pages/Admin/Navigation_Bar/naviburger';
import NavigationBarHome from "./Pages/Navigation_Bar/naviburger";
import NavigationBarGuest from "./Pages/Guest/Navigation_Bar/naviburger";
import NavigationBarUser from "./Pages/User/Navigation_Bar/naviburger"
import MainFeaturedPost from './Pages/Upcoming_Flight/about';
import SignIn from './Pages/SignIn_Page/SignInSide';
import SignUp from './Pages/SignUp_Page/SignUp';
import Search from './Pages/Search_Page/search';
import Booking from './Pages/booking/booking';
import ErrorPage from './Pages/Error_Page/Error_Page';
import About from './Pages/About_Page/Aboutpage';
import Footer from './Pages/footer';
import Scroller from './Pages/scroll';
import Home1 from './Pages/Home_Page/main'
import Model1 from "./Pages/Team_Page/team";
import ProtectedRoute from "./ProtectedRoute";
import Home2 from "./Pages/Home_Page/main1";
import SignInAdmin from "./Pages/Admin/SignInAdmin"
export default function HomePage() { 
  return (
    <div style={{
      backgroundColor: '#f9f9f9',
    }}>
    <Router>
      {/* <NavigationBar/>       */}
      <Routes>      
        <Route path="/" element={<Home/>}/>         
        <Route path="/SignIn" element={<SignIn/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="/Search" element={<SearchPage/>}/>
        <Route path="/Booking" element={<Booking/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Team" element={<Model1/>}/>
        <Route path="*" element={<ErrorPage/>}/>
        <Route path="/Guest" element={<GuestHome/>} />
        <Route path="/Admin" element={<AdminHome/>} />
        <Route path="/SignInAdmin" element={<SignInAdmin/>} />
        <Route path="/User" element={<UserHome/>} />
      </Routes>
      <Scroller/>
      <Footer/>
    </Router>
    </div>
  );
}


function SearchPage(){
  return(
    <>   
      <Search/>     
      <UpcomingFlights />
    </>
  )
}

function Home(){
  return(
    <>
    <NavigationBarHome/> 
    <Home1/>
    <MainFeaturedPost/>
    <UpcomingFlights />
    </>
  )
}

function GuestHome(){
  return(
  <>
  <NavigationBarGuest/>
  <Home2/>
  <MainFeaturedPost/>
  <UpcomingFlights />
  
  </>)
}

function AdminHome(){
  return(
  <>
  <NavigationBarAdmin/>
  <Home2/>
  <MainFeaturedPost/>
  <UpcomingFlights />
  
  </>)
}

function UserHome(){
  return(
  <>
  <NavigationBarUser/>
  <Home2/>
  <MainFeaturedPost/>
  <UpcomingFlights />
  
  </>)
}