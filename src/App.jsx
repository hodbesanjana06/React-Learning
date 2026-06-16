import './App.css'
_______________PROPS_________________
 import Student from "./Days/Day03 - Props/Day03"
 import EmployeeCard from './Days/Day03 - Props/Task'


 let variable = 'this is variable prop example'

 let employee1 = {
   name :'Rahul',
   age : 23,
   depart : 'IT',
   salary : 20000,
   city : "Katraj",
   skills : ['react', 'js', 'css']
 }

 let employee2 = {
   name :'Rohit',
   age : 24,
   depart : 'Backend',
   salary : 50000,
   city : "Station",
   skills : ['py', 'js', 'django']
 }
 let employee3 = {
   name :'komal',
   age : 26,
   depart : 'Angular Devloper',
   salary : 40000,
   city : "Katraj",
   skills : ['react', 'js', 'css']
 }

 function App() {
   return(
     <>
         {/* <Student name ="rahul" age ={22} course="React"/>
         <Student name ="Riya" age ={20} course="Java"/>
         <Student variable={variable} />
          */}
         <h2 className='heading'>Top 5 Employees Of The Company</h2>

           <div className='card-main'>
               <EmployeeCard  employee={employee1}/>
               <EmployeeCard  employee={employee2}/>
               <EmployeeCard  employee={employee3}/>
              
           </div>
           <div className='card-main'>
               <EmployeeCard  employee={employee1}/>
               <EmployeeCard  employee={employee2}/>
           </div>
          

     </>
   )
 }

 export default App
