let express=require("express");

let server=express(); //this line makes server

let data=require("./data.json");

server.get("/movies",function(req,res){
    res.json(data);
});




server.get("/genre",function(req,res){
   
let allGenreObjects= data.map((e)=>{
   return e.genre;
});

let uinqueGenre=[];
for(let i=0;i<allGenreObjects.length;i++){
   let genreId=allGenreObjects[i]["_id"];

   let index=uinqueGenre.findIndex(function(e){
       return e._id==genreId;
   });

   if(index==-1){
       uinqueGenre.push(allGenreObjects[i]);
   }
}

    res.json(uinqueGenre);
});

server.listen(4000);