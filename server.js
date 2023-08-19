const express = require('express');
const app = express();
const Port=8000;
app.listen(Port ,()=>{
    console.log(`server is live on: ${Port}`);
});

app.get('/', (req,res)=>{
    console.log(req.path);
    res.sendFile("./index.html",{root: __dirname+"/view"});
})
app.get('/contact-me', (req,res)=>{
    console.log(req.path);
    res.sendFile("./contact-me.html",{root: __dirname+"/view"});
})
app.get('/about', (req,res)=>{
    console.log(req.path);
    res.sendFile("./about.html",{root: __dirname+"/view"});
})
app.get('/index', (req,res)=>{
    console.log(req.path);
    res.redirect('/');
})
app.use((req,res)=>{
    res.status(404).sendFile("./404.html",{root: __dirname+"/view"});
})

