import mongoose from "mongoose";

const mongoDb = async() =>  { await mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected!"))
    .catch((err) => console.log("Some error occured while connecting to DB", err));
}

export default mongoDb;