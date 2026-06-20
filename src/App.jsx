import './App.css'
import ListKey from './Days/Day06 - List-Keys/ListKey';
import Task from './Days/Day06 - List-Keys/Task';
import MovieDashboard from './Days/Day06 - List-Keys/MovieDashboard';

function App(){
  let movies = [
  {
    id: 1,
    title: "Tumbadchi Manjula",
    rating: 9
  },
  {
    id: 2,
    title: "Dashavtar",
    rating: 10
  },
  {
    id: 3,
    title: "Avatar",
    rating: 8
  }
]

  return(

    <>
    <div className='main-box'>
      
      {/* <ListKey/> */}
      {/* <Task movies = {movies}/> */}
      <MovieDashboard  movies = {movies}/>
      
    </div>
      
    </>
  );
}

export default App;