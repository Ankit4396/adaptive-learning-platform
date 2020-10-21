
const Product=require("../models/teachers");
exports.addProductForm=(req,res,next)=>{
  res.render("add-teacher",
  
  {
    title:"Add-test-details"
    
  });
};
exports.addForm=(req,res,next)=>{
  res.render("index",
  
  {
    title:"Login"
    
  });
};
exports.addorm=(req,res,next)=>{
  res.render("register",
  
  {
    title:"Login",
   
  });
};
exports.postAddProduct=(req,res,next)=>{
    
    const products=new Product(req.body);
    products.add();
    res.redirect("/");
    
  };
  
  exports.fetchAllProducts=(req,res,next)=>{
   
    const products=Product.fetchAll((products)=>{
        res.render("store",{
       
            prod:products,
            title:"Test Details",
            path: "/", 
        
        });
       
    });
  };
   

 
 
   


exports.fetchProduct=(req,res,next)=>{
    const id=req.params.productId;
    Product.fetchById(id,(product)=>
    {
     res.render("product-detail",{
       prod:product,
       title:"Products Details",
       path:"/product/id",
     }); 
    });
   
};
exports.u=('/users',(req,res)=>{
  const user={
      name:req.body.name,
      password:req.body.password
  }
  users.push(user)

})