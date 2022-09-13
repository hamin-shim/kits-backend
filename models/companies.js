import mongoose from "mongoose";
import CompanyAccounts from "./company_accounts"

const { Schema } = mongoose;

const CompanySchema = new mongoose.Schema({
    account: [CompanyAccounts],
    company_name: {
        type: String,
        required: true
    },
    foundation_date: String,
    hiring: [],
    introduction: String,
    logo_url: String,
    registration_num: {
        type: String,
        required: true
    },
    services: [new mongoose.Schema({
        service_name : String,
        service_introduction: String,
        service_url: String
    })],
    year_data: {
        sales: [new mongoose.Schema({
            year:{
                type:String,
                required:true
            },
            total_sales:String,
            profit:String
        })],
        employee: [new mongoose.Schema({
            year:{
                type:String,
                required:true,
                months: [
                    new mongoose.Schema({
                        total:Number,
                        hired:{
                            type:Number,
                            default:0
                        },
                        fired:{
                            type:Number,
                            default:0
                        }
                    })
                ]
            }
        })]
    },
    hash_tags:[],
    image_url:[], // 이거 뭐에 쓰이는건지 모르겠음. 아직도
    reviews: new mongoose.Schema({
        totals: new mongoose.Schema({
            opportunity:Number,
            welfare_salary:Number,
            work_life_bal:Number
        }),
        lists:[]
    })
});

export default mongoose.model("Company", CompanySchema);
