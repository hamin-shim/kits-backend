import mongoose from "mongoose";
import CompanySchema from "./companies";
import JobTypeSchema from "./job_types";
import AddressSchema from "./Address";
import LocationSchema from "./Location";

const { Schema } = mongoose;

const HiringSchema = new mongoose.Schema({
    company:[CompanySchema],
    job_type:[JobTypeSchema],
    salary:{
        type:String,
        required:true
    },
    due_date:new Date(),
    detail:{
        type:String,
        default:""
    },
    other_text: String,
    workplace_address:[AddressSchema],
    workplace_location:[LocationSchema],
    is_hiring:{
        type:Boolean,
        required:true
    }
})

export default mongoose.model("Hiring", HiringSchema);