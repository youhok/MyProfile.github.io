import mongoose from "mongoose";

const Schema = mongoose.Schema;


const categoriesSchema = Schema(
    {
        khName: {
            type: String,
            required: true
        },
        enName: {
            type: String,
            required: true
        },

        type: String,

        status: {
            type: String,
            required: true
        }

    }
)

export default mongoose.model('categories', categoriesSchema)