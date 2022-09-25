import mongoose from "mongoose";

const { Schema } = mongoose;

const JobSkillSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    }
})

export default mongoose.model("JobSkill", JobSkillSchema);
