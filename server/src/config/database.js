import mongoose from "mongoose";

async function connectMongoDB() {
    try {
        await mongoose.connect(process.env.DATABASE_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
    } catch (error) {
        console.log(error);
    }
}

export default connectMongoDB;