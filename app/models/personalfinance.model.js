module.exports = (sequelize, Sequelize) => {
    const pf = sequelize.define("pfdata", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return pf;
  };