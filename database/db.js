const mongoose = require("mongoose");

const connectToDb = () => {
  mongoose
    .connect(
      process.env.MONGODB_URI
      /*{
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }*/
    )
    .then(() => console.log("MongoDB Atlas CONECTADO!"))
    .catch((err) => console.log(err));
};

module.exports = connectToDb;
