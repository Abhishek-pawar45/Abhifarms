var express=require("express");
var router=express.Router();
router.use('/',(req,res)=>{
    res.send("Get Request for Products");
})

var express=require("express"); router=express.Router();
router.get('/get-product-details',(req,res)=>{
    res.send("Get Request for Products");
});

module.exports=router;
