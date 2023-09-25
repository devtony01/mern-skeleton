import app from './express';
import mongoose from 'mongoose';
require('dotenv').config();

let mongodb_uri = process.env.MONGODB_URI;

try {
    await mongoose.connect(mongodb_uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
} catch (error) {
    console.error(error.message);
    throw new Error(`Unable to connect to database: ${mongodb_uri}`);
}

let port = process.env.PORT || 3000;

app.listen(port, (err) => {
    if (err) {
        console.log(err);
    }
    console.info("Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
});