import express from 'express';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';
import config from "./config";
import router from './router/index.router';
import bodyParser from 'body-parser';
import db from './models/index.modal';

const server = express();

// parse requests of content-type - application/json
server.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: true }));



server.use(sassMiddleware({
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'dist')
}));


server.set('view engine', 'ejs');

db.sequelize.sync();

server.get('/', (req, res) => {
  res.render('index');
});

router(server);

server.use('/router', router);

server.use(express.static('dist'));

server.listen(config.port, () => console.log(`Server listening on port ${config.port}`));