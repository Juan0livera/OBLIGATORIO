import mongoose from "mongoose";



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
        age : Number,
    },
    role : {
        type: String,
        enum : ["User", "Admin"],
        default : "User"
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
        // renombramos el id para quitar _
        ret.id = ret._id
        // y lo borramos
        delete ret._id;

        return ret;
    }
});

export const User = mongoose.model("User", userSchema)