const bodyParser = require('body-parser');
const express = require('express');
const app =express();

const userroutes =require('./routes/user')


const sequelize = require('./util/database');
const User = require('./models/user');
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json({extended:false}));
app.use("/newuser",userroutes)

// app.post('/newuser/adduser', async (req, res, next)=> {
   
//     try{
//         if(!req.body.phone){
//             throw new Error('phone number is mandatory');
         
//         }
//         const name = req.body.name;
//         const email = req.body.email;
//         const phonenumber = req.body.phone;
//         const data = await User.create({name: name, email: email,  phonenumber: phonenumber})
//         res.status(201).json({newUserDetails: data})
//     }
//     catch(err){
//         res.status(500).json({
//             error:err
//         })
//     }


// })
// app.get('/newuser/getusers',async(req,res,next)=>{
//     try{
// const users=await User.findAll();
// res.status(201).json({allUsers:users})

//     }
//     catch(err){
//         console.log('Get user is falling',json.stringify(err))
//         res.status(500).json({error:err})

//     }
// })

// app.delete('/newuser/deleteuser/:id',async(req,res,next)=>{
//     try{
//         if(req.params.id=='undefined'){
//             console.log('ID is missing');
//             return res.status(400).json({err: 'ID IS MISSING'})
//         }
// const uId= req.params.id;
// await User.destroy({where:{id:uId}})
// res.sendStatus(200);

//     }
//     catch(err){
//         console.log('error');
//         res.status(500).json(err)

//     }
// })



sequelize.sync().then(result=>{
    app.listen(3000);
})
.catch((err)=>{
console.log(err)
})

// app.listen(3000);

