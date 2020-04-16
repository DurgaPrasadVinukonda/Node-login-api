const express= require('express')
const router = express.Router()
const mongoose = require('mongoose')
//We need to import User data in this module
const User = require('../models/user')
const db="mongodb+srv://prasad:prasad@cluster0-nxhhp.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect(db,err =>{
    if(err){
        console.error('Error' +err);
    }else {
        console.log('Connected to Mongo Db');
    }
})
router.get('/',(req,res) =>{
    res.send("Hello From Get Server")
})

// We are creating a post data 

router.post('/register',(req,res)=> {
    // we need to extract user information here
    // Extract Data From User
    let userData= req.body
    // Then we need to pass this body to our user Model
    // Convert data into user model
    let user = new User(userData)
    // Save the data into Database
    user.save((error,registeredUser) => {
        if (error){
            console.log(error)
        } else {
            res.status(200).send(registeredUser)
        }
    })
})
//we need to extract the data 
// we need to check email from here is same that exits in front end
router.post('/login',(req,res) =>{
    
    let userData= req.body
    User.findOne({email:userData.email}, (error,user) =>{
        if(error){
            console.log(error)
        } else {
             if (!user){
                 res.status(401).send({message:'Invalid Email'})
             }else 
             if (user.password  !== userData.password){
                 res.status(401).send({message:'Invalid Password'})

             }  else {
                 res.status(200).send(user).json
             }
        }
    })
    
})

router.get('/events',(req,res) =>{
    let events =[
        {
            "_id":"1",
            "name":"Auto Expo",
            "description":"lorrem ipsum",
            "date":"2012-04-23T18:25:43.511Z"
        },
        {
            
                "_id":"2",
                "name":"Auto Expo",
                "description":"lorrem ipsum",
                "date":"2012-04-23T18:25:43.511Z"
            
        },
        {
            
                "_id":"3",
                "name":"Auto Expo",
                "description":"lorrem ipsum",
                "date":"2012-04-23T18:25:43.511Z"
            
        },
        {
            
            "_id":"4",
            "name":"Auto Expo",
            "description":"lorrem ipsum",
            "date":"2012-04-23T18:25:43.511Z"
        
    }
    ]
    res.json(events)
})
router.get('/special',(req,res) =>{
    let events =[
        {
            "_id":"1",
            "name":"Auto Expo",
            "description":"lorrem ipsum",
            "date":"2012-04-23T18:25:43.511Z"
        },
        {
            
                "_id":"2",
                "name":"Auto Expo",
                "description":"lorrem ipsum",
                "date":"2012-04-23T18:25:43.511Z"
            
        },
        {
            
                "_id":"3",
                "name":"Auto Expo",
                "description":"lorrem ipsum",
                "date":"2012-04-23T18:25:43.511Z"
            
        },
        {
            
            "_id":"4",
            "name":"Auto Expo",
            "description":"lorrem ipsum",
            "date":"2012-04-23T18:25:43.511Z"
        
    }
    ]
    res.json(events)
})



module.exports = router