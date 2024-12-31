import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';


const Insert=()=>{
const [input , setInput]=useState({});

const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setInput(values=>({...values , [name]:value}))
}

const handleSubmit=()=>{
    let api="http://localhost:8550/employees/savedata";
    axios.post(api , input).then((res)=>{
     toast.success("Data Succesfuly Save")
        console.log(res.data)
        
    })
    
}

 return(
        <>
        <center>
       <h1>The Employees Insert Page </h1> 
       <div style={{width:"50%", height:"320px", border:"1px solid red", backgroundColor:"pink" , textAlign:"center", paddingTop:"30px" ,fontSize:"20px"}}>
        Enter Employee No.  : <input type="text" name="eno" onChange={handleInput} style={{width:"200px", padding:"5px", borderRadius:"10px"}}/><br/><br/>
        Enter Employee Name  : <input type="text" name="enm" onChange={handleInput} style={{width:"200px", padding:"5px", borderRadius:"10px"}}/><br/><br/>
        Enter Employee City  : <input type="text" name="ect" onChange={handleInput} style={{width:"200px", padding:"5px", borderRadius:"10px"}}/><br/><br/>
        Enter Employee Salary  : <input type="text" name="esa" onChange={handleInput} style={{width:"200px", padding:"5px", borderRadius:"10px"}}/><br/><br/>
        Enter Employee Mobile No.  : <input type="text" name="emn" onChange={handleInput} style={{width:"200px", padding:"5px", borderRadius:"10px"}}/><br/><br/>
        <button onClick={handleSubmit} style={{padding:"5px",width:"100px" , borderRadius:"10px", backgroundColor:"lightgreen"}}>DataSave</button>
       </div>
       </center>
       <ToastContainer/>
       </>
       
    )
}
export default Insert;