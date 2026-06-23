import './App.css'
// import Form from './Days/Day07 - Forms & Controll component/Form';
// import Game from './Days/Day07 - Forms & Controll component/Game';
import Book from './Days/Day07 - Forms & Controll component/Book';

function App(){
// let players = [
//   {
//     id : 101 ,
//     name: 'rohit',
//     hourse_played : 340,
//     favorite_weapon : "Vandal",
//     country : "India" , 
//     joindate: "12-05-2023"
//   },
//   {
//     id : 102 ,
//     name:'dhoni',
//     hourse_played : 320,
//     favorite_weapon : "Vandal",
//     country : "USA" , 
//     joindate: "2-05-2023"
//   },
//   {
//     id : 103 ,
//     name :'virat',
//     hourse_played : 140,
//     favorite_weapon : "Vandal",
//     country : "Delhi" , 
//     joindate: "1-05-2025"
//   },
// ]

let movies = [
  {
    id : 101,
    year : 2021,
    director : "Mohan Joshi",
    mname : "QOT"
  },
  {
    id : 102,
    year : 2025,
    director : "Raju Rastoji Joshi",
    mname : "DoT's"

  },
  {
    id : 103,
    year : 2011,
    director : "Mohan Joshi",
    mname : "FIdda"

  },
]
  
  return(

    <>
    <div className='main-box'>
      
      {/* <Form/> */}
      {/* <Game players={players}/> */}
      <Book movies={movies}/>

    </div>
      
    </>
  );
}

export default App;