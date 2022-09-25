import mongoose from "mongoose";
const { Schema } = mongoose;

const StaticJobTypesSchema = new mongoose.Schema({
    value: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
});

export default mongoose.model("StaticJobTypes", StaticJobTypesSchema);
