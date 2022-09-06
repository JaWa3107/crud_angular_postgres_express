module.exports = {
    HOST: "localhost",
    USER: "admin",
    PASSWORD: "docker",
    DB: "world",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
