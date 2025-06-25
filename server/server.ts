import express from 'express';
import mongoose from 'mongoose';
import process from "process";
import postRouter from './routes/posts-route'

mongoose.connect('mongodb://localhost:27017/kerem-net')
    .then(() => mongoose.connection.db.listCollections({name: 'KeremNet'}).toArray())
    .then((collections) => {
        if (collections.length === 0) {
            return mongoose.connection.db.createCollection('KeremNet');
        }
    })
    .then(() => console.log('Connected!'))
    .catch((error) => console.error('Error connecting to MongoDB:', error));

process.on('SIGINT', async () => {
    await mongoose.connection.close();
    console.log('Mongoose connection is disconnected'
        + ' due to application termination');
    process.exit(0);
});

const app = express();

app.use('/posts', postRouter);

app.get("/", (req, res) => {
    res.redirect("http://localhost:5000");
})

app.listen(5000, () => {
    console.log("Server is running on port 5000!");
})