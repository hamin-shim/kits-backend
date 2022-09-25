import mongoose from "mongoose";
const { Schema } = mongoose;

const StaticSkillsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
});

export default mongoose.model("StaticSkills", StaticSkillsSchema);
