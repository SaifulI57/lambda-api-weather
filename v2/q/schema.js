import mongoose, { Schema } from "mongoose";

const province = new Schema({
    id: String,
    name: String,
    path: String,
    domain: String
});

export let modelP = mongoose.model("qprovince", province);
