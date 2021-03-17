import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://hassan:hassan123@cluster0.cnj46.mongodb.net/myecommerce?retryWrites=true&w=majority",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
      }
    );

    console.log(
      `MongoDB is connected at ${conn.connection.host}`.cyan.underline
    );
  } catch (error) {
    console.log(
      `Error connecting to MongoDB ${error.message}`.red.underline.bold
    );
    process.exit(1);
  }
};

export default connectDB;
