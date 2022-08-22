import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:String
},
{
    timestamps:true,
    versionKey:false
})

export const TaskModel = mongoose.model('Tasks', taskSchema)