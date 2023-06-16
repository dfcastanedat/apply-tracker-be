import mongoose from "mongoose";

/**
 * Database connection
 */
const connectDb = (url) => {
    return mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

export default connectDb;