import mongoose from "mongoose";

const { Schema } = mongoose;

const JobTypesSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    }
})

export default mongoose.model("JobTypes", JobTypesSchema);
