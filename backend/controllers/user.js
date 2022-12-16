const User =require('../models/user')
const addUser = async (req, res, next)=> {
   
    try{
        if(!req.body.phone){
            throw new Error('phone number is mandatory');
         
        }
     
        const name = req.body.name;
        const email = req.body.email;
        const phonenumber = req.body.phone;
        const data = await User.create({name: name, email: email,  phonenumber: phonenumber})
        res.status(201).json({newUserDetails: data})
    }
    catch(err){
        res.status(500).json({
            error:err
        })
    }


}

const getusers = async(req,res,next)=>{
    try{
    
const users = await User.findAll();
res.status(201).json({allUsers:users})

    }
    catch(err){
        console.log('Get user is falling',json.stringify(err))
        res.status(500).json({error:err})

    }
}
const deleteUser =async(req,res,next)=>{
    try{
        if(req.params.id=='undefined'){
            console.log('ID is missing');
            return res.status(400).json({err: 'ID IS MISSING'})
        }
const uId= req.params.id;
await User.destroy({where:{id:uId}})
res.sendStatus(200);

    }
    catch(err){
        console.log('error');
        res.status(500).json(err)

    }
}
 module.exports =  {
    addUser,
    getusers,
    deleteUser
}