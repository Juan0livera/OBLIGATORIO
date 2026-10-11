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

        quantity: {
            type: Number,
            required: true,
            min: 1
        },

        consumedAt : {
            type: Date,  
            default: Date.now 
        }
    }
)

foodLogSchema.set('toJSON', {
    transform: (doc, ret) => {
        ret.id = ret._id;
        delete ret.__v;
        delete ret._id;
        return ret;
    }
})



export const FoodLog = mongoose.model("FoodLog", foodLogSchema);