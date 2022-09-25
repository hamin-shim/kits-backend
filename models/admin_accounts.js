import mongoose from "mongoose";
import LocationSchema from "./Location";

const { Schema } = mongoose;

const AdminAccountSchema = new mongoose.Schema({
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
    password_update_at: new Date(),
    last_login_at: new Date(),
    authority:[]
});

export default mongoose.model("AdminAccount", AdminAccountSchema);
