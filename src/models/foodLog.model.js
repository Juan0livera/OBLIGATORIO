import mongoose from "mongoose";



const foodLogSchema = new mongoose.Schema(
    {
        user : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "User",
            required : true
        },

        food : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Food",
            required : true
        },

        meal : {
            type : String,
            required : false,
        },

        consumedAt : {
            type: Date,  
            default: Date.now 
        }
    }
)



export const FoodLog = mongoose.model("FoodLog", foodLogSchema);