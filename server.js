const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// SAVE DATA
app.post("/save", (req,res)=>{
    const newData = req.body;

    fs.readFile("data.json","utf8",(err,data)=>{
        let json = data ? JSON.parse(data) : [];
        json.push(newData);

        fs.writeFile("data.json", JSON.stringify(json,null,2), ()=>{
            res.json({message:"Saved Successfully"});
        });
    });
});

// GET DATA
app.get("/students",(req,res)=>{
    fs.readFile("data.json","utf8",(err,data)=>{
        res.json(data ? JSON.parse(data) : []);
    });
});

// DELETE
app.delete("/delete/:id",(req,res)=>{
    fs.readFile("data.json","utf8",(err,data)=>{
        let json = JSON.parse(data);
        json.splice(req.params.id,1);

        fs.writeFile("data.json", JSON.stringify(json,null,2), ()=>{
            res.json({message:"Deleted"});
        });
    });
});

app.listen(3000,()=>console.log("Server Running"));