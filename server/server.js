import app from './express';
require('dotenv').config();

let port = process.env.PORT || 3000;

app.listen(port, (err) => {
    if (err) {
        console.log(err);
    }
    console.info("Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
});