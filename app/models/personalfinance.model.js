module.exports = (sequelize, Sequelize) => {
    const pf = sequelize.define("tradebook", {
      client_id: {
        type: Sequelize.STRING
      },
      isin: {
        type: Sequelize.STRING
      },
      scheme_name: {
        type: Sequelize.STRING
      },
      plan: {
        type: Sequelize.STRING
      },
      transaction_mode: {
        type: Sequelize.STRING
      },
      trade_date: {
        type: Sequelize.STRING
      },
      folio_number: {
        type: Sequelize.STRING
      },
      units: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      }
    });
  
    return pf;
  };