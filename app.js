const express=require("express");
const date=require(__dirname+"/date.js");
// this does not contain db
const app=express();

const todos=["Buy food", "Eat Food"];
const workItems=[];
app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/", function(req, res){

    let day = date.getDate();

    res.render("list", {listTitle: day, newListItems: todos});
});

app.post("/", function(req, res){

    todo=req.body.todoinp;

    if(req.body.list==="Work"){
        workItems.push(todo);
        res.redirect("/work");
    }
    else{
        todos.push(todo);
        res.redirect("/");
    }

});

app.get("/work", function(req, res){
    res.render("list",{listTitle: "Work List", newListItems: workItems});
});

app.get("/about", function(req, res){
    res.render("about");
});

app.listen(3000, function(){
    console.log("server started at port 3000");
});