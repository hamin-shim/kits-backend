import mongoose from "mongoose";
import PersonSchema from "./person";
import JobTypesSchema from "./job_types";

const { Schema } = mongoose;

const ForHireSchema = new mongoose.Schema({
    person:[PersonSchema],
    status:{
        type:String,
        required:true,
        default:"applied"
    },
    apply_at:new Date(),
    is_deprecated:{
        type:Boolean,
        default:false
    },
    detail:{ // person.profile에 있는거 전부 끌어왔는데 이게 맞는건지 모르겠음
        introduction: String,
        job_types: [JobTypesSchema],
        prefer_address: [],
        authroized: {
            type: Boolean,
            required: true
        },
        awards: [{
            name:{
                type:String,
                required: true
            },
            institution:{
                type:String,
                required: true
            },
            award_at:{
                type:String,
                required: true
            }
        }],
        skills: [{
            skill:[JobSkillSchema],
            level:{
                type:String,
                required: true
            }
        }],
        career: [{
            company_branch : [],
            company_name : {
                type:String,
                required: true
            },
            job_name : String,
            start_at : { //  Date로 저장할지 vs "2022-01-03"의 문자로 저정할지 확인 필요
                type:String,
                required: true
            }, 
            end_at : String,
            detail : String,
            attach_url : []
        }],
        certificiation: [{
            name:{
                type:String,
                required: true
            },
            institution: String,
            issue_at: String,
            attach_url : []
        }],
        education : [
            {
                school : String,
                major : String,
                start_at : String,
                end_at : String,
                status : String
            }
        ],
        social_url: {
            facebook : String,
            twitter : String,
            instagram : String,
            yotubue : String,
            github : String,
            linked_in : String,
            behance : String,
            blog : String
        },
        personality : {
            int_vs_ex : {
                type: Number,
                required: true
            },
            intense_vs_premeditate : {
                type: Number,
                required: true
            }
        }
    }
})

export default mongoose.model("ForHire", ForHireSchema);