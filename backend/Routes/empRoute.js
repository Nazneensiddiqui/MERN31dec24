const express=require("express");
const route=express.Router();
const empControler=require("../Controlers/empControler")


route.post("/savedata",empControler.SaveData);
route.get("/displaydata",empControler.DisplayData)
route.get("/updatedata", empControler.UpdateData)
route.get("/updatedata/id" , empControler.DeleteData)

module.exports=route;