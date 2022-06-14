import express from 'express';
import {PORT} from './config.js'
import {router as booksRouter} from './routes/booksRouter.js'
import {router as userRouter} from './routes/userRouter.js'
import {logger} from './middleware/logger.js'

const app = express();

app.use(logger);

app.use('/api/books', booksRouter);
app.use('/api/user', userRouter);

app.listen(PORT);
