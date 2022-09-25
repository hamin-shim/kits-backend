import mongoose from "mongoose";
const { Schema } = mongoose;

const StaticJobsSchema = new mongoose.Schema({
    value: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
});

export default mongoose.model("StaticJobs", StaticJobsSchema);
