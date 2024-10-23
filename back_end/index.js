require('dotenv').config();
const express=require('express');
const port=process.env.PORT;

const app=express();
const project=[
    {
    "id":"1",
    "name":"sdwan",
    "start_date":"1-1-2023",
    "end_date":"12-2-2023",
    },
    {
        "id":"2",
        "name":"pcidss",
        "start_date":"1-1-2023",
        "end_date":"12-2-2023",
        },

    
       ];

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