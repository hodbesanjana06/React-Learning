import './App.css'

import EmpCard from './Days/Day04 - useState/EmpCard';

function App(){
  return(
    <>
      <h2 className="heading">Employee Card </h2>

      <div className='main-box'>
          <EmpCard name ={'Sanjana'} age={23} dept={'Frontend'} />
          <EmpCard name ={'Sanjana'} age={23} dept={'Frontend'}/>

      </div>
      
    </>
  );
}

export default App;