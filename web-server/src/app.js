const path=require('path')
const express = require('express')
const hbs=require('hbs')
console.log(__dirname)

const app=express()
//defines path for express config
const publicDirectoryPath= path.join(__dirname,'../public')
const viewsPath=path.join(__dirname,'/templates/views')
const partialsPath=path.join(__dirname,'/templates/partials')
//setup handlebars engine and views location


app.set('views',viewsPath)
//app.engine('html', require('hbs').renderFile);
app.set('view engine','hbs')

hbs.registerPartial('partialsPath','header')
//setup static directory to serve
app.use(express.static(publicDirectoryPath))
//app.set('views', path.join(__dirname, 'views'));
// app.get('',(req,res)=>{
//     res.send('Hello express')
// })


app.get('',(req,res)=>{
    res.render('index',{
        title:'weather',
        name:'Andrew'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About',
        name:'RohitJuhi'
    })
})
app.get('/help',(req,res)=>{
    res.render('help',{
        title:'Help',
        name:'RohitJuhi'
    })
})

// app.get('',(req,res)=>{
//     res.send('<h1>Weather App</h1>')
// })
// app.get('/help',(req,res)=>{
//     res.send('Help page')
// })
// app.get('/help',(req,res)=>{
//     res.send('{name:"Andrew",age:29}')
// })
// app.get('/about',(req,res)=>{
//     res.send('<h1>Node Application Weather</h1> ')
// })
app.get('/weather',(req,res)=>{
    res.send('{forecast:35,location:"Raipur" }')
})
//app.com
//app.com/help
//app.com/about
app.listen(3000,()=>{
    console.log('server is up on port 3000' )
})
