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
import About1 from './Pages/About_Page/Aboutpage';
import Footer from './Pages/footer';
import Scroller from './Pages/scroll';
import Home1 from './Pages/Home_Page/main'
import Model1 from "./Pages/Team_Page/team";
import Home2 from "./Pages/Home_Page/main1";
import SignInAdmin from "./Pages/Admin/SignInAdmin"
import AddFlight from "./Pages/Admin/Addflight";
import { AuthProvider } from "./Pages/utils/auth";
import { RequireAuth, RequireUserAuth } from "./Pages/utils/RequireAuth";
export default function HomePage() { 
  
  return (
    
    <div style={{
      backgroundColor: '#f9f9f9',
    }}>
      <AuthProvider>
    <Router>
      <Routes>      
        <Route path="/" element={<Home/>}/>         
        <Route path="/SignIn" element={<SignIn/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="/Booking/:id/:flight/:from/:to/:booking_date/:departure/:schedule/:airplane" element={<UserBooking/>}/>
        <Route path="/GuestBooking/:id/:flight/:from/:to/:booking_date/:departure/:schedule/:airplane" element={<GuestBooking/>}/>
        <Route path="*" element={<ErrorPage/>}/>
        <Route path="/Guest/:id" element={<GuestHome/>} />
        <Route path="/Admin" element={<RequireAuth><AdminHome/></RequireAuth>} />
        <Route path="/SignInAdmin" element={<SignInAdmin/>} />
        <Route path="/User/:id" element={<RequireUserAuth><UserHome/></RequireUserAuth>} />
        <Route path="/Guest/:id/GuestSearch" element={<GuestSearchPage/>} />
        <Route path="/AdminAddFlight" element={<RequireAuth><AdminAddFlight/></RequireAuth>} />
        <Route path="/User/:id/UserSearch" element={<RequireUserAuth><UserSearchPage/></RequireUserAuth>} />
        <Route path="/About" element={<About/>}/>
        <Route path="/Guest/:id/GuestAbout" element={<GuestAbout/>}/>
        <Route path="/AdminAbout" element={<AdminAbout/>}/>
        <Route path="/User/:id/UserAbout" element={<UserAbout/>}/>
        <Route path="/Team" element={<Team/>}/>
        <Route path="/Guest/:id/GuestTeam" element={<GuestTeam/>}/>
        <Route path="/AdminTeam" element={<AdminTeam/>}/>
        <Route path="/User/:id/UserTeam" element={<UserTeam/>}/>
      </Routes>
      <Scroller/>
      <Footer/>
    </Router>
    </AuthProvider>
    </div>
    
  );
}


function GuestSearchPage(){
  return(
    <>   
    <NavigationBarGuest/>
      <Search/>     
      <UpcomingFlights />
    </>
  )
}

function AdminAddFlight(){
  return(
    <>   
    <AuthProvider>
    <NavigationBarAdmin/>
      <AddFlight/>   
      <UpcomingFlights />
      </AuthProvider>
    </>
  )
}

function UserSearchPage(){
  return(
    <>   
    <NavigationBarUser/>
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

function About(){
  return(
    <>
    <NavigationBarHome/>
    <About1/>
    </>
  )
}

function GuestAbout(){
  return(
    <>
    <NavigationBarGuest/>
    <About1/>
    </>
  )
}

function AdminAbout(){
  return(
    <>
    <NavigationBarAdmin/>
    <About1/>
    </>
  )
}

function UserAbout(){
  return(
    <>
    <NavigationBarUser/>
    <About1/>
    </>
  )
}

function Team(){
  return(
    <>
    <NavigationBarHome/>
    <Model1/>
    </>
  )
}

function GuestTeam(){
  return(
    <>
    <NavigationBarGuest/>
    <Model1/>
    </>
  )
}

function AdminTeam(){
  return(
    <>
    <NavigationBarAdmin/>
    <Model1/>
    </>
  )
}

function UserTeam(){
  return(
    <>
    <NavigationBarUser/>
    <Model1/>
    </>
  )
}

function GuestBooking(){
  return(<>
  <NavigationBarGuest/>
  <Booking/>
  </>)
}

function UserBooking(){
return(<>
  <NavigationBarUser/>
  <Booking/>
  </>)
}