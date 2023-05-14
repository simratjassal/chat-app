const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = ()=>{
  mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true,
    useFindAndModify:true
  })
    .then(() => console.log("DB Connection Successfull...!!!".cyan.bold))
    .catch((err) => {
      console.log(err.message);
    });

}

module.exports = connectDB;
