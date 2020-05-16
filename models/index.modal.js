import config from "../config";
import signupModal from './signup.modal';
const Sequelize = require("sequelize");

const sequelize = new Sequelize(config.postgreUri.DB, config.postgreUri.USER, config.postgreUri.PASSWORD, {
  host: config.postgreUri.HOST,
  port: config.postgreUri.PORT,
  dialect: config.postgreUri.dialect,

  pool: {
    max: config.postgreUri.pool.max,
    min: config.postgreUri.pool.min,
    acquire: config.postgreUri.pool.acquire,
    idle: config.postgreUri.pool.idle
  }
}) || config.directPostgreUri;

sequelize
  .authenticate()
  .then((data) => {
    console.log("**** connection has been established "+ data);
  })
  .catch((error) => {
    console.error("**** unable to connect to database "+ error)
  })

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.signup = signupModal(sequelize, Sequelize);

export default db;