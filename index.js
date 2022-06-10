import express from 'express';
import {PORT} from './config.js'
import {Book} from './book.js'
import {router as booksRouter} from './routes/booksRouter.js'
import {router as userRouter} from './routes/userRouter.js'

const app = express();

app.use('/api/books', booksRouter);
app.use('/api/user', userRouter);

app.listen(PORT);
