import mongoose from "mongoose";

const Schema = mongoose.Schema;

const subcategoriesSchema = Schema(
    {

        categoryId: {
            type: Schema.Types.ObjectId,
            required: true
        },
        khName: {
            type: String,
            require: true
        },
        enName: {
            type: String,
            required: true
        },
        status: {
            type: String,
            required: true
        }

    }
)

export default mongoose.model('subcategories', subcategoriesSchema)