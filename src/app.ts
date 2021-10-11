import express from 'express';

const app = express();
const PORT = 8000;
import cors from 'cors';
import mongoose from 'mongoose';
import routes from './routes';
const {
  MONGODB_ATLAS_USERNAME,
  MONGODB_ATLAS_PASSWORD,
  MONGODB_ATLAS_DBNAME,
} = process.env;
const uri = `mongodb+srv://${MONGODB_ATLAS_USERNAME}:${MONGODB_ATLAS_PASSWORD}@cluster0.lrp5d.mongodb.net/${MONGODB_ATLAS_DBNAME}?retryWrites=true&w=majority`;

const option = { useNewUrlParser: true, useUnifiedTopology: true };
app.use(cors());
app.use(routes);
mongoose.set('useFindAndModify', true);
mongoose
  .connect(uri, option)
  .then(() => {
    app.listen(PORT, () => {
      console.info(`App is runnin on port ${PORT}`);
    });
  })
  .catch((error) => {
    throw error;
  });
