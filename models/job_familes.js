import mongoose from "mongoose";
import JobTypesSchema from "./job_types";

const { Schema } = mongoose;

const JobFamilesSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    job_types: [JobTypesSchema]
})

export default mongoose.model("JobFamiles", JobFamilesSchema);