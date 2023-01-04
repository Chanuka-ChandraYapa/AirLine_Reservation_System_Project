import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import UpcomingFlights from './Pages/Upcoming_Flight/cards';
import NavigationBar from './Pages/Navigation_Bar/naviburger';
import MainFeaturedPost from './Pages/Upcoming_Flight/about';
import SignIn from './Pages/SignIn_Page/SignInSide';
import SignUp from './Pages/SignUp_Page/SignUp';
import Search from './Pages/Search_Page/search';
import Table from './Pages/Search_Page/Tables';
import Booking from './Pages/booking/booking';
import Summary from './Pages/Summary_Page/summary'
import ErrorPage from './Pages/Error_Page/Error_Page';
import About from './Pages/About_Page/Aboutpage';
import Footer from './Pages/footer';
import Scroller from './Pages/scroll';
import Home from './Pages/Home_Page/main'


function App() { 
  return (
    <Router>
      <NavigationBar/>      
      <Routes>      
        <Route path="/" element={<Home/>}/> 
        <Route path="/Upcoming_flight" element={<Flight/>}/>          
        <Route path="/SignIn" element={<SignIn/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="/Search" element={<SearchPage/>}/>
        <Route path="/Booking" element={<Booking/>}/>
        <Route path="/Summary" element={<Summary/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
      <Scroller/>
      <Footer/>
    </Router>
  );
}

function Flight() {
  return (
    <>      
      <UpcomingFlights />
      <MainFeaturedPost/>
    </>
  );
}

function SearchPage(){
  return(
    <>   
      <Search/>
      <Table/>
    </>
  )
}




export default App;
