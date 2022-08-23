import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import compression from 'compression';
import mongoose from 'mongoose';
import usersRoute from './routes/user.js';
import postRoute from './routes/post.js'

const app = express();
dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use(morgan('dev'));
app.use(helmet());
app.use(compression());

app.use("/api/users", usersRoute);
app.use("api/posts", postRoute);


const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to Mongo DB");
    } catch (err) {
        throw err;
    }
}

app.use((req, res, next) => {
    console.log("Middleware Used");
}) // Delete in production

app.listen(process.env.PORT || 8800, () => {
    connect();
    console.log("Server Started");
});