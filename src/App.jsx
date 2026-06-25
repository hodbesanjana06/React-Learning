import './App.css'
// import Final from './Days/Day07 - Forms & Controll component/Final';
import UseEffect from './Days/Day08 - useEffect/UseEffect';

function App(){
let student =[
  {
    id : 101,
    name : "sanjana",
    location : "Katraj",
    noticeperiod : "1 month",
    skills :['react', 'DSA', 'c#']
  },
  {
    id : 102,
    name : "rahul",
    location : "gujarwadi",
    noticeperiod : "2 month",
    skills :['HTML', 'CSS', 'JS']
  },
  {
    id : 103,
    name : "Chameli",
    location : "goa",
    noticeperiod : "1 month",
    skills :['react', 'DSA', 'c#']
  },
]
  
  return(

    <>
    <div className='main-box'>
      
      {/* <Form/> */}
      {/* <Game players={players}/> */}
      {/* <Book movies={movies}/> */}
      {/* <Final student= {student}/> */}
      <UseEffect/>
    </div>
      
    </>
  );
}

export default App;