import mongoose from "mongoose";

const foodSchema = new mongoose.Schema(
    {
        name: {
            type : String,
            required : true,
            unique : false,
            trim : true,
        },
    
        calories : {
            type : Number,
            required : true,
            min : 0
        },
    
        protein : {
            type : Number,
            required : true,
            min : 0
        },
    
        carbs : {
            type : Number,
            required : true,
            min : 0
        },
    
        fat: {
            type: Number,
            required: true,
            min: 0
        },
    
        servingSize : {
            type : Number,
            required : true,
            min: 1
        },
    
        
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
            required: true
        },
    
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
    },
    {
        timestamps: true,
        versionKey: false,
    },
);


foodSchema.set('toJSON', {
        transform: (doc, ret) => {
            ret.id = ret._id;
            delete ret.__v;
            delete ret._id;
            return ret;
        }
    }
)


export const Food = mongoose.model("Food", foodSchema);