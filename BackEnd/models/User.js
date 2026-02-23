const mongoose=require("mongoose");
const userSchema= new mongoose.Schema({
name:{type:String},
password:{type:String}
}
)

const UserModel= mongoose.model("User",userSchema);
module.exports=UserModel;
