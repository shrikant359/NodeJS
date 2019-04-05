var expr=require('express');
var hbs = require('hbs');
var app=expr();
const fs=require('fs');
const port=process.env.PORT||3000;
app.set('view engine','hbs');
//app.use(expr.static(__dirname + '/view'));
//app.use(expr.static(__dirname + '/pvt'));
app.get('/',(req,res) =>{
res.render('home.hbs',{
pageTitle:'Home Page',
welcomeMessage:'Welcome to my website',
currentYear: new Date().getFullYear()
});
});
app.get('/about',(req,res)=>{
res.render('about.hbs',{
pageTitle:'About page',
currentYear: new Date().getFullYear()
});
});
app.get('/contacts',(req,res)=>{
res.render('contacts.hbs',{
emailid:'emailid',
contact:'contact',
address:'address'
});
});
//app.listen(3000);
app.listen(port,()=>{
	console.log('server is up to on port ${port}');
});