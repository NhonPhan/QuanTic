const logger = require("../../utils/logger");
const DBManager = require("../../utils/database_manager");
const Sequelize = require("sequelize");

let dbManager;
let sequelize;

class OrderDao {
  constructor() {
    dbManager = new DBManager();
    if (dbManager.checkInitDB()) {
      sequelize = dbManager.getSequelize();
    }
  }

  getCheckStatusOrder(stateId) {
    logger.info("DAO :: getCheckStatusOrder", stateId);
    let sql = "SELECT state_id ";
    sql += "FROM order_db.order ";
    sql += "WHERE id = :state_id";

    return sequelize.query(sql, {
      replacements: { state_id: stateId },
      type: sequelize.QueryTypes.SELECT
    });
  }

  transaction(txnFunction) {
    return sequelize.transaction(txnFunction);
  }
}

module.exports = OrderDao;
