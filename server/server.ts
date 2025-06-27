import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import postsRouter from './routes/posts-route'
import loginRouter from './routes/login-route'

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

app.use('/posts', postsRouter);
app.use('/login', loginRouter);

app.listen(5000, () => {
    console.log("Server is running on port 5000!");
})