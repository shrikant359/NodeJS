var expr=require('express');
var hbs = require('hbs');
var app=expr();
//app.use(expr.static(__dirname + '/public'));
//app.use(expr.static(__dirname + '/pvt'));
app.set('view engine','hbs');
app.get('/',(req,res) =>{
//res.send('<h1>This is our first code</h1>');
/*var obj={
	'name':'Samarjeet singh',
	'Section':'D1619',
	'Registration no.':'11610623'
}
res.send(obj);*/
res.render('home.hbs',{
pageTitle:'Home Page',
welcomeMessage:'Welcome to my website',
currentYear: new Date().getFullYear()
});
});
app.get('/Courses',(req,res)=>{
	//res.send("Introduction");
	var Courses={
	'Cap918':'ionic',
	'Cap919':'Nodejs',
	'Cap906':'Python',
	'Cap375':'Gamedesisgn'
}
res.send(Courses);
});
app.get('/Grades',(req,res)=>{
	//res.send("Opened Page2");
	var Grades={
	'Cap918':'A+',
	'Cap919':'A',
	'Cap906':'O',
	'Cap375':'O'
}
res.send(Grades);
});

app.get('/Marks',(req,res)=>{
	//res.send("Opened Page2");
	var Marks={
	'Cap918':'82',
	'Cap919':'75',
	'Cap906':'89',
	'Cap375':'95'
}
res.send(Marks.Cap918);
});
app.get('/Attendance',(req,res)=>{
	//res.send("Opened Page2");
	var Attendance={
	'Cap918':'82%',
	'Cap919':'100%',
	'Cap906':'89%',
	'Cap375':'95%'
}
res.send(Attendance);
});
app.listen(3000);