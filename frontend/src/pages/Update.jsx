import axios from "axios";
import { useState, useEffect } from "react";


const Update=()=>{
    const [empData , setEmpdata]=useState([])

    const loadData=()=>{
        let api="http://localhost:8550/employees/updatedata";
        axios.get(api).then((res)=>{
            console.log(res.data)
            setEmpdata(res.data)
        })
    }
useEffect(()=>{
    loadData()
},[])

const deletData=(id)=>{
    let api=` http://localhost:8550/employees/updatedata/${id}`;
    axios.delete(api).then((res)=>{
        alert("Data Succesfully Delete")
    })
}

let sno=0;
const ans=empData.map((key)=>{
    sno++;
    return(
        <>
        <tr align="center">
            <td>{sno}</td>
            <td>{key.empno}</td>
            <td>{key.name}</td>
            <td>{key.city}</td>
            <td>{key.salary}</td>
            <td>{key.mobile}</td>
            <td><button onClick={()=>{deletData(key.id)}}>Delete</button></td>
           
        </tr>
        </>
    )
})

    return(
        <>
        <center>
            <h1>The Employees Update Page :</h1>
            <table border="2px" align="center" width="800px" bgcolor="lightgreen">
        <thead>
            <tr>
                <th>S.No.</th>
                <th>Employee No.</th>
                <th>Employee Name</th>
                <th>Employee City</th>
                <th>Employee Salary</th>
                <th>Employee Mobile No.</th>
                <th>Action</th>
             
            </tr>
            {ans}
        </thead>
       </table>
        </center>
        </>
    )
}
export default Update