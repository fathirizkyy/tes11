const route=require('express').Router()

route.get('/',(req,res)=>{
    res.send("tes 123")
})

module.exports=route