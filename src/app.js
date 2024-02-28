const express = require('express')
const port = 8080; 
const mongoose = require('mongoose')
const handlebars = require('express-handlebars');
const viewsRouter = require('./routes/views.router');

const app = express(); 

mongoose.connect(`mongodb+srv://angelpablocuevas1989:EghP7p3eTEtgWPyu@codercluster.5ny2sqo.mongodb.net/`).then(()=>{
    console.log('connected')
})

app.use(express.json());
app.use(express.urlencoded({extended:true}))

/** handlebars */
app.engine('handlebars',handlebars.engine());
app.set('views',__dirname+'/views');
app.set('view engine','handlebars');

app.use('/', viewsRouter)


app.listen(port, ()=>console.log(`up and running on port ${port}`))

