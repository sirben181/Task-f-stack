const express=require('express');
const dotenv=require('dotenv')

dotenv.config({path:'./config/config.env'})


const PORT=process.env.PORT || 5000
const app=express();

//using the static folder
app.use(express.static('build'))
//require routes
app.use('/',require('./routes'))

app.listen(PORT,()=>{
    console.log(`The server is running on port ${PORT}`)
})