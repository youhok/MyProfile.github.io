import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ScreenShotSchema = Schema(
    {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    }
)

const PlatFormsSchema = Schema(
    {
        icon: {
            type: String,
        },
        name: {
            type: String
        },
        url: {
            type: String
        }
    }
)


const projectSchema = Schema(
    {
        categoryId: {
            type: Schema.Types.ObjectId,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        thumbnail: {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            }
        },
        description: {
            type: String,
            required: true
        },
        features: {
            type: [],
            required: true
        },
        screenshots: [ScreenShotSchema],
        demoLinks: {
            type: [],
            required: false
        },
        downloadable: {
            type: Boolean,
            required: false
        },
        platforms: {
            type: [PlatFormsSchema],
            required: false
        },
        requirements: {
            type: [],
            required: false
        },
        releaseDate: {
            type: Date,  // Use Date type for date-time fields
            default: Date.now // Set default to the current date and time
        },
        note: {
            type: String,
        },
        status: {
            type: String,
        },
        totalDownload: {
            type: Number,
            required: false  // Corrected the type from Int to Number
        }
    }

)


export default mongoose.model('project', projectSchema)