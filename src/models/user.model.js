import mongoose from "mongoose";
import { Roles, Role } from "../constants/constants.role.js";



const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique: true,
        trim: true,
    },
    email : {
        type : String,
        required : true,
        unique: true,
        lowercase: true,
    },
    password :  {
        type : String,
        required : true,
        select : false,
    },
    age : {
        type : Number,
    },
    role : {
        type: String,
        enum : Roles,
        default : Role.user
    },
    plan : {
        type: String,
        enum: ["plus", "premium"],
        default: "plus"
    }
})


userSchema.set('toJSON', {
    transform : (doc, ret) => {
        delete ret.password;
        ret.id = ret._id
        delete ret._id;
        delete ret.__v;
        return ret;
    }
});

export const User = mongoose.model("User", userSchema)