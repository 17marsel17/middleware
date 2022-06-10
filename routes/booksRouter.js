
import express from 'express'
import {store} from '../book.js'

export const router = express.Router();

router.get('/', (req, res) => {
    const {books} = store;
    res.json(books);
});

router.get('/:id', (req, res) => {
    const {books} = store;
    res.json(books);
});

router.post('/', (req, res) => {
    const {books} = store;
    const {title, desc, authors, favority, fileCover, fileName} = req.body;

    const newBook = new Book(title, desc, authors, favority, fileCover, fileName);
    books.push(newBook);

    res.status(201);
    res.json(newBook);
});

router.put('/:id', (req, res) => {
    const {books} = store;
    const {title, desc, authors, favorite, fileCover, fileName} = req.body;

    const newBook = new Book(title, desc, authors, favorite, fileCover, fileName);
    books.push(newBook);

    res.status(201);
    res.json(newBook);
});

router.delete('/:id', (req, res) => {
    const {books} = store;
    const {id} = req.params;
    const idx = books.findIndex(el => el.id === id);

    if (idx === -1) {
        res.status(404);
        res.json('404 | страница не найдена');
        return;
    }

    books.splice(idx, 1);
    res.json('ok');
});
