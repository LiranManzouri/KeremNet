import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import postRouter from './routes/posts-route'

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

app.use('/posts', postRouter);

app.listen(5000, () => {
    console.log("Server is running on port 5000!");
})