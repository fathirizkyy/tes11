const express=require('express')
const router=require('./routes/route')
const mongoose=require('mongoose')
const app=express()
const port=8000
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/v1/api',router)


app.get('/',(req,res)=>{
    res.send('tes')
})


mongoose.connect('mongodb://localhost:27017/mydb',{
    useUnifiedTopology: true
}).then(() => {
    console.log('Berhasil terhubung ke MongoDB');
  }).catch((error) => {
    console.error('Kesalahan saat terhubung ke MongoDB:', error);
  });
app.listen(port,()=>{
    console.log(`server berjalan di port ${port}`)
})
