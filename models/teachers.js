const fs=require("fs");
const path=require("path");
const filePath=path.join(__dirname,"../data","test.json");
const fetchProductsFromFile=(cb)=>{
    fs.readFile(filePath,(err,data)=>{
        if(err)
        return cb([]);
        else
        return cb(JSON.parse(data));
        });
        
};
class Product{
    constructor(n){
       this.name=n.name;
       this.startTime=n.startTime;
       this.endTime=n.endTime;
       this.topic=n.topic;
       this.subject=n.subject;
       this.DOB=n.DOB;

    }
    //adding to json file
   add(){
    
       this.id=Math.random().toString();
       fs.readFile(filePath,(err,data)=>
    {
        let products=[];
        if(!err){
          products=JSON.parse(data);
        }
        
        products.push(this);
        fs.writeFile(filePath,JSON.stringify(products),(err)=>{
            if(err)console.log(err);
        });
        
    });
   
    }
    
    static fetchAll(cb)
       {
           fetchProductsFromFile(cb); 
           
    }
    static fetchById(id,cb)
    {

        fetchProductsFromFile((products)=>{
        const product=products.filter((p)=>{
            return p.id===id;
        });

        cb(product);
        });
    }
    
}
module.exports=Product;