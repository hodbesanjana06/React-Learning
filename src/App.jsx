import "./Days/Router/router.css";
import {Routes , Route} from "react-router-dom"
import Navbar from './Days/Router/Navbar';
import Home from './Days/Router/Home';
import Courses from './Days/Router/Courses';
import About from './Days/Router/About';
import Mission from './Days/Router/Mission';
import Team from './Days/Router/Team';
import Contact from './Days/Router/Contact';
import NotFound from './Days/Router/NotFound';
import CourseDetails from './Days/Router/CourseDetails';

function App(){
  
  return(

     <>

        <Navbar/>
        <hr />

        <Routes>

          <Route path='/' element={<Home/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/courses' element={<Courses/>} />
          <Route path='/c/:id' element={<CourseDetails/>} />

          <Route path='/about' element={<About/>}>
              <Route path='mission' element={<Mission/>}/>
              <Route path='team' element={<Team/>}/>
          </Route>
          <Route path='/contact' element={<Contact/>} />
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        

     </>
  )
}

export default App;