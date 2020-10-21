const express=require("express");
const productController=require("../controllers/teacher");
const router=express.Router();


router.get("/add-teacher",productController.addProductForm);
router.get("/register",productController.addorm);
router.post("/add-teacher",productController.postAddProduct);
router.get("/",productController.addProductForm);



 module.exports=router;


