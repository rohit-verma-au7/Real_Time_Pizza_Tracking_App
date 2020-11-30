const express = require("express");
const app = express();
const ejs = require("ejs")
const path = require("path")
const expressLayout = require("express-ejs-layouts")
const PORT = process.env.PORT || 3000

app.get('/', (req,res)=>{
    res.render('home')
})

// Set template engine
app.use(expressLayout)
app.set('views', path.join(__dirname,'/resources/views'))
app.set('view engine' , 'ejs')

// Creating Server
app.listen(PORT,()=>{
    console.log(`Server starts at ${PORT}`);
});