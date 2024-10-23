require('dotenv').config();
const express=require('express');
const project=require('./project.json');
const port=process.env.PORT;

const app=express();

app.get('/projects',(req,res)=>{
      
      res.send(project)
});


app.get('/project',(req,res)=>{
    const id=req.query.id;
    const proj=project.find(p=>p.id==id);
    if(proj){
        res.send(proj);
    }else{
        const error=[{
            "error":"project not found"
        }]
        res.send(error);

    }
    
});


app.listen(port,()=>{
  console.log(`The Server is running on port ${port}`);

});