import mongoose from "mongoose";
require('dotenv').config()

//schema
export const userSchema = new mongoose.Schema({
    date: String,
    open: String,
    max: String,
    min: String,
    close: String,
    priceAjst: String,
    volume: String
  });

export const UserMongo = mongoose.model("petr4", userSchema)

//conexão
const user = process.env.user;  
const password = process.env.password;
const cluster = '@cluster0.qrw4pbb.mongodb.net';

mongoose
  .set('strictQuery', true)
  .connect(`mongodb+srv://${user}:${password}${cluster}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    retryWrites: true,
    w: 'majority',
    dbName: 'shares'
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));
