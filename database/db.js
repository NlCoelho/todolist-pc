const mongoose = require("mongoose");

const connectToDb = () => {
  mongoose
    .connect(
      "mongodb+srv://ricardocoelhoco:AJZGhJ3gKnZgcOAc@cluster0.oonha.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
      /*{
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }*/
    )
    .then(() => console.log("MongoDB Atlas CONECTADO!"))
    .catch((err) => console.log(err));
};

module.exports = connectToDb;
