const env = process.env;

export const nodeEnv = env.NODE_ENV || 'development';

export const logStarts = (message) => {
  console.info('********');
  console.info(message);
  console.info('********');
};

export default {
  //use this for direct URL/Production
  directPostgreUri: '',
  port: env.PORT || 4242,
  host: env.HOST || '0.0.0.0',
  get serverUrl() {
    return `http://${this.host}:${this.port}`;
  },
  postgreUri: {
    HOST: env.HOST ||"0.0.0.0",
    USER: "postgres",
    PORT: 5433,
    PASSWORD: "password",
    DB: "Paisewale",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  },
};