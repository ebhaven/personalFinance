module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "newPASS@1234",
    DB: "personal_finance",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };