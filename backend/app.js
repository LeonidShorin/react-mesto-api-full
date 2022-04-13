/* eslint-disable eol-last */
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const { celebrate } = require('celebrate');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const { signinValidationScheme, signupValidationScheme } = require('./middlewares/validationScheme');
const NotFoundError = require('./errors/NotFoundError');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const app = express();
const { PORT = 3000 } = process.env;
const userRouter = require('./routes/users');
const cardRouter = require('./routes/cards');
const login = require('./controllers/login');
const { createUser } = require('./controllers/users');
const auth = require('./middlewares/auth');
const { celebrateErrorHandler, generalErrorHandler } = require('./middlewares/errorHandler');

async function start() {
  await mongoose.connect('mongodb://localhost:27017/mestodb', {
    useNewUrlParser: true,
    // useCreateIndex: true, //error
    // useFindAndModify: false, //error
  });
  app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
  });
}

start()
  .then(() => {
    app.use(cors({
      origin: [
        'http://localhost:3001',
        'http://localhost:3000',
        'http://mestobyleonid.nomoredomains.work',
        'https://mestobyleonid.nomoredomains.work'],
    }));
    app.use(helmet());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser());
    app.use(requestLogger);
    app.post('/signin', celebrate(signinValidationScheme), login);
    app.post('/signup', celebrate(signupValidationScheme), createUser);
    app.use(userRouter);
    app.use(cardRouter);
    app.use(auth, (req, res, next) => {
      next(new NotFoundError('Маршрут не найден'));
    });
    app.use(errorLogger);
    app.use(celebrateErrorHandler);
    app.use(generalErrorHandler);
  })
  .catch(() => {
    console.log('Ошибка. Что-то пошло не так.');
    process.exit();
  });