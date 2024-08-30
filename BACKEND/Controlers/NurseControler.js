const nurse =require("../Model/NurseModel");


// //data display
// const getAllNurses = async(req,res,next)=>{
//     let nurses;

//     try{
//         nurses= await nurse.find();

//     }
//     catch(err){
//         console.log(err);

//     }
//     //not found
//     if(!nurses){
//         return res.status(404).json({message :"nurse"})
//     }
//     //disply all user
//     return res.status(200).json({nurses});
// };
const getAllNurses = async (req, res, next) => {
    let nurses;
    try {
        nurses = await nurse.find();
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Error fetching nurses" });
    }

    // Return all nurses
    return res.status(200).json({ nurses });
};


//data insert
const addnurses=async(req,res,next)=>{

    const {name,nic,email,phone,appnumber,rnumber,time,diseases,discription}=req.body;

    let nurses;

    try{
        nurses= new nurse({name,nic,email,phone,appnumber,rnumber,time,diseases,discription});
        await nurses.save();
    }catch(err){
        console.log(err);
    }
    //not insert users 
    if(!nurses){
        return res.status(404).json({message:"unable to add nurse"});
    }
    return res.status(200).json({nurses});
    

};

// Get User by ID
const getById = async (req, res, next) => {
    const id = req.params.id;

    let nurse1;

    try {
        nurse1 = await nurse.findById(id);
    } catch (err) {
        console.log(err);
    }

    // Not available users
    if (!nurse1) {
        return res.status(404).json({ message: "nurse not found" });
    }

    return res.status(200).json({ nurse1 });
};

//Update user details
// const UpdateNurse = async (req,res,next) =>{

//     const id=req.params.id;
//     const{name,nic,email,phone,appnumber,rnumber,time,diseases,discription}=req.body;

//     let nurses;

//     try{
//         nurses=await nurse.findByIdAndUpdate(id,
//             {name:name,nic:nic,email:email,phone:phone,appnumber:appnumber,rnumber:rnumber,time:time,diseases:diseases,discription:discription});
//             nurses = await nurse.save();
//     }catch(err){
//         console.log(err);
//     }

//     if (!nurses) {
//         return res.status(404).json({ message: "Unable to update details" });
//     }

//     return res.status(200).json({ nurses });

// };
const UpdateNurse = async (req, res, next) => {
    const id = req.params.id;
    const { name, nic, email, phone, appnumber, rnumber, time, diseases, discription } = req.body;

    let nurses;
    try {
        nurses = await nurse.findByIdAndUpdate(id, {
            name, nic, email, phone, appnumber, rnumber, time, diseases, discription
        }, { new: true });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Error updating nurse" });
    }

    if (!nurses) {
        return res.status(404).json({ message: "Unable to update details" });
    }

    return res.status(200).json({ nurses });
};


//Delete User Details
const deleteNurse = async (req,res,next) =>{
    const id=req.params.id;

    let nurse1;

    try{
        nurse1= await nurse.findByIdAndDelete(id)
    }catch(err){
        console.log(err);
    }

    if (!nurse1) {
        return res.status(404).json({ message: "Unable to Delete details" });
    }

    return res.status(200).json({ nurse1 });
};

exports.getAllNurses = getAllNurses;
exports.addnurses = addnurses;
exports.getById = getById;
exports.UpdateNurse=UpdateNurse;
exports.deleteNurse=deleteNurse;