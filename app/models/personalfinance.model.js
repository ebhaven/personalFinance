module.exports = (sequelize, Sequelize) => {
    const tb = sequelize.define("tradebook", {
      symbol: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      isin: {
        type: Sequelize.STRING
      },
      exchange: {
        type: Sequelize.STRING
      },
      segment: {
        type: Sequelize.STRING
      },
      series: {
        type: Sequelize.STRING
      },
      trade_date: {
        type: Sequelize.STRING
      },
      trade_type: {
        type: Sequelize.STRING
      },
      quantity: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.STRING
      },
      
    },{
        timestamps: false
      });
  
    return tb;
  };