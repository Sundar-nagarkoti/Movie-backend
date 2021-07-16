let express=require("express");

let server=express(); //this line makes server

let data=require("./data.json");

let g=data.map((e)=>{
    return e.genre;
})


server.get("/movies",function(req,res){
    res.send(data);
});

server.get("/genre",function(req,res){
    res.send(g);
});

server.listen(4000);