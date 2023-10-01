import express from 'express';
import bodyParser from 'body-parser';
import expressLayouts from 'express-ejs-layouts';
import router from './routes/blogRoutes.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();
const PORT = 3000;
dotenv.config()

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(expressLayouts);

app.set('layout', './layouts/main');
app.set('view engine', 'ejs');


app.use(router);

app.listen(PORT, () => {
  console.log(`Your server is running on port ${PORT}`);
});
