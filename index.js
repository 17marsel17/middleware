import express from 'express';
import {PORT} from './config.js'
import {router as booksRouter} from './routes/booksRouter.js'
import {router as userRouter} from './routes/userRouter.js'
import {logger} from './middleware/logger.js'
import {error as error404} from './middleware/err-404.js'

const app = express();

app.use(logger);

app.use('/api/books', booksRouter);
app.use('/api/user', userRouter);

app.use('error404');

app.listen(PORT);
