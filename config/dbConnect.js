import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017/blog", {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    console.log("Don't worry koraaa, Database connected successfully")
  )
  .catch((err) => console.log(err.message));