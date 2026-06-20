import './App.css'
// import ConditionalRendering from './Days/Day05 - Conditional-Rendering/ConditionalRendering';
// import Task from './Days/Day05 - Conditional-Rendering/Task';
import Employee from './Days/Day05 - Conditional-Rendering/Employee';

function App(){
  return(
    <>
    <div className='main-box'>
      
      {/* < ConditionalRendering/> */}
      {/* <Task/>  */}
      <Employee id = {101} name ="Rahul" age ={22} dept = "Frontend dev" username = "Rahul_dev" exp={2} skills={["JavaScript", "React", "Node.js", "CSS"]}/>
      <Employee id = {102} name ="Riya" age ={24} dept = "Backend dev" username = "Riya@_dev" exp={1} skills={["python", "Django", "Node.js", "Mysql"]}/>

    </div>
      
    </>
  );
}

export default App;