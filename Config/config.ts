import mongoose from "mongoose";

const url: string = "mongodb://localhost/Praticebooks";
const clouldurl: string =
  "mongodb+srv://sannidatabase:sannidatabase@cluster0.zh68ie9.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(url);
mongoose.connection
  .on("open", () => {
    console.log("connected to", clouldurl);
  })
  .once("error", (err) => {
    console.log("An error ocurred", err);
  });
