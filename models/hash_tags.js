import mongoose from "mongoose";

const { Schema } = mongoose;

const HashTagsSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    }
})

export default mongoose.model("HashTag", HashTagsSchema);