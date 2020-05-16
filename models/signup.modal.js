export default (sequelize, Sequelize) => {
  const Signup = sequelize.define("signup", {
    name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    }
  });

  return Signup;
};