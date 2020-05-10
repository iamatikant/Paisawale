import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../components/App';

const server = express();
server.use(express.static('dist'));

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
  res.render('index');
});

server.listen(4242, () => console.log('Server listening on port 4242'));