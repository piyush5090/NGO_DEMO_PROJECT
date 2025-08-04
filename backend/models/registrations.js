import { model } from "mongoose";

import mongoose from "mongoose";

const registrationSchema = new mongoose.Schema({
    fullname: String,
    email: String,
    phone: String,
    role: {
        type: String,
        enum: ["intern","volunteer"]
    },
    motivation: String,
    createdAt: {
        type: Date,
        default : Date.now,
    },
    age: Number,
    availability: {
        type: String,
        enum: ["Part-time","Full-time"]
    },
    resumeURL : String,
    status: {
        type: String,
        default: "Pending",
        enum : ["Pending","Accepted","Rejected"]
    }
});

export default mongoose.model('registrations',registrationSchema);