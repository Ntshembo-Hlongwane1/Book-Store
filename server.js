import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { connect } from "mongoose";
import AuthRoute from './Routes/Auth/Auth';
import AccountManager from './Routes/AccountManger/AccountManger';
import booksRouter from './Routes/books.js'
import genresRouter from './Routes/genres.js'
import authorsRouter from './Routes/authors.js'
config();
const server = express();

//============================================Middlewares==========================================
server.use(cors());

//=====================================MongoDb connection & configs===============================
const mongoURI = process.env.mongoURI;
const connectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
};
connect(mongoURI, connectionOptions, (error) => {
  if (error) {
    return console.log(error);
  }
  console.log(`Connection to MongoDB was succesful`);
});

//=================================================================================================
server.use(AuthRoute)
server.use(AccountManager)
server.use('/books', booksRouter);

server.use('/genres', genresRouter);

server.use('/authors', authorsRouter);

//===================================Server connection & Configs===================================
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});
