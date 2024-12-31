const empModel = require("../Models/empModel")

const SaveData=async(req , res)=>{
   const{eno,enm,ect,esa,emn}=req.body;

 const mydata=  await empModel.create({
    empno:eno,
    name:enm,
    city:ect,
    salary:esa,
    mobile:emn,
  
   })
   res.send(mydata)
}

const DisplayData=async(req , res)=>{
    const mydata= await empModel.find()
    res.send(mydata)
}

const UpdateData=async(req , res)=>{
    const mydata= await empModel.find()
    res.send(mydata)
}

const DeleteData=async(req , res)=>{
    const myid=req.query.id
    await empModel.findByIdAndDelete(myid)
    const mydata= await empModel.find()
    res.send(mydata)
    
}

module.exports={
    SaveData,
    DisplayData,
    UpdateData,
    DeleteData
}