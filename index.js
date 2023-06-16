import express from "express";
import http from "http";
import cors from "cors";
import 'dotenv/config';

// Local dependencies
import router from "./routes/index.js";
import connectDb from "./config/databaseConnection.js";
import corsOptions from "./config/corsOptions.js";

const app = express();
const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL || "";

/**
 * Application-level middleware
 */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(corsOptions));

app.use(express.json());
app.use("/", router);
const server = http.Server(app);

const connectDataBase = async() => {
  try {
    await connectDb(DATABASE_URL);
    server.listen(PORT, () => {
      console.log(`Listening on port: ${PORT}`);
    });
  } catch (error) {
    console.log(`Error ${error}`);
  }
}

connectDataBase();

export default server;