import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import helmet from 'helmet';
import cors from 'cors';
import Template from './../template';
import userRoutes from './routes/user.routes';
import authRoutes from './routes/auth.routes'

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(compression());
app.use(helmet());
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).send(Template());
});

app.use('/', userRoutes);
app.use('/', authRoutes);

// Catch unauthorised errors
app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
      res.status(401).json({"error" : err.name + ": " + err.message});
    }else if (err) {
      res.status(400).json({"error" : err.name + ": " + err.message});
      console.log(err);
    }
});

export default app;