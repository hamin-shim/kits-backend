import mongoose from "mongoose";
import AddressSchema from "./address";
import LocationSchema from "./location";

const { Schema } = mongoose;

const CompanyAccountsSchema = new mongoose.Schema({
    account: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    contact_number: {
        type: String,
        required: true
    },
    location: [LocationSchema],
    address : [AddressSchema],
    password_update_at: new Date(),
    last_login_at: new Date(),
    is_master:{
        type: Boolean,
        required: true
    },
    authority: new mongoose.Schema({ // 이거 동작하는지 확인 필요
        hiring_post : Boolean,
        hiring_update : Boolean,
        hiring_update_status : Boolean,
        person_read : Boolean,
        person_update_status : Boolean,
        person_pool_read : Boolean,
        person_pool_favortie : Boolean,
        person_pool_offer : Boolean,
        company_user_invite : Boolean,
        company_user_auth_update : Boolean,
        company_user_delete : Boolean,
        payment : Boolean,
        company_user_profile_update : Boolean
    })
});

export default mongoose.model("CompanyAccounts", CompanyAccountsSchema);
