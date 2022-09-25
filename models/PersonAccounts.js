import mongoose from "mongoose";
import AddressSchema from "./Address.js";
import LocationSchema from "./Location.js";

const { Schema } = mongoose;

const PersonAccountsSchema = new mongoose.Schema({
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
    social : {
        type : {
            type:String,
            required: true
        },
        social_id : {
            type: String,
            required: true
        }
    },
    authorized: {
        type: Boolean,
        required: true
    }
});

export default mongoose.model("PersonAccounts", PersonAccountsSchema);
