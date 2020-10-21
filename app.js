const express=require("express");
const bodyParser = require("body-parser");
const {check,validationResult}=require("express-validator"); 
const adminRoutes=require('./routes/admin');
const storeRoutes=require('./routes/store');
const path=require('path');
const { Hash } = require("crypto");
const { urlencoded } = require("body-parser");
const { compileFunction } = require("vm");
const app=express(); //initializing express application object
app.set("view engine","ejs");
app.set("views","templates"); 




app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static("public"));
app.use(express.static(path.join(__dirname,"public")));

app.use("/admin",adminRoutes);
app.use(storeRoutes);

app.post("/index",bodyParser.urlencoded({extended:false}),[
    check('username','This username must be 3+ characters long')
    .exists()
    .isLength({min: 3}),
    check('email','Email is not valid')
     .isEmail()
     .normalizeEmail()
    

],
(req,res)=>{
  const errors = validationResult(req)
  if(!errors.isEmpty())
  {
      //return res.status(422).jsonp(errors.array())
      const alert=errors.array()
      res.render('/index',{
          alert
      })
  }
})
app.get('',(req,res)=>
{
res.render("404");
});


app.listen(7005);

