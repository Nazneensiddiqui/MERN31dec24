const express=require("express");
const app=express();
const port=8550;

const cors=require("cors");
const mongoose=require("mongoose");
const bodyParser=require("body-parser")

const empRoute=require("./Routes/empRoute")


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

mongoose.connect("mongodb://127.0.0.1:27017/cocomalon").then((res)=>{
    console.log("DB Connected")
})

app.use(cors())
app.use("/employees",empRoute)

app.listen(port , ()=>{
    console.log(`server run on ${port}`);
})