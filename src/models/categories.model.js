import mongoose from "mongoose";

const categoriesSchema = new mongoose.Schema(
    {
        name : ({
            type: String,
            required: true,
            unique : true,
            trim : true,
        }),

        description : ({
            type: String,
            trim: true

        })
    },
    {
        timestamps : true
    }
) 

categoriesSchema.set('toJSON', {
    transform : (doc, ret) => {
        ret.id = ret._id;

        delete ret._id;
        delete ret.__v;
        return ret;
    }
})

export const Category = mongoose.model("Category", categoriesSchema);