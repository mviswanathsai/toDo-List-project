const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

const items = [];
const workItems = [];

app.get("/", (req, res) => {

  let day = date.getDate();

  res.render("list", {listTitle: day , items: items });

})

app.get("/work", (req, res) => {

  res.render("list", {listTitle: "Work"  , items: workItems });

})

app.post("/", (req, res)=>{

  if(req.body.list === "Work"){
    workItems.push(req.body.newItem);
    res.redirect("/work");
  }
  else{
    items.push(req.body.newItem);
      res.redirect("/");
  }


})



app.listen(3000, () => {
  console.log("server up at 3k sir!");
})
