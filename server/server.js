const express= require('express')
const bodyParser= require('body-parser')
const cors= require('cors')
const PORT = 4000
//Use routes in our file
const api = require('./routes/api')

//Creating a Instance of express

const app = express()
app.use(cors())


//Specify to use body parser a json data
app.use(bodyParser.json())
app.use('/api',api)

app.get('/', function(req,res){
    res.send("Hello from server")
})

//We are listening for the port
app.listen(PORT, function(){
    console.log('Server Running on Localhost:' +PORT);
})