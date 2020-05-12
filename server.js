import express from 'express';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';

const server = express();

server.use(sassMiddleware({
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'dist')
}));


server.set('view engine', 'ejs');

server.get('/', (req, res) => {
  res.render('index');
});

server.use(express.static('dist'));

server.listen(4242, () => console.log('Server listening on port 4242'));