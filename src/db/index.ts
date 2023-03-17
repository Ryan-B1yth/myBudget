import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';

import mainRoutes from './routes/mainRoutes';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use((_, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader(
//     'Access-Control-Allow-Methods',
//     'GET, POST, PUT, PATCH, DELETE',
//   );
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   next();
// });

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
