import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';

import mainRoutes from './routes/mainRoutes';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use('/', mainRoutes);

const startApp = async () => {
  process.env.MONGO_URI && (await mongoose.connect(process.env.MONGO_URI));

  app.listen(process.env.PORT, () => {
    console.log('Database connected on port:', process.env.PORT);
  });
};

startApp();
