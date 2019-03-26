const logger = require("./../../utils/logger");
const DBManager = require("./../../utils/database_manager");
let dbManager;
let sequelize;

class MasterDao {
  constructor() {
    dbManager = new DBManager();
    if (dbManager.checkInitDB()) {
      sequelize = dbManager.getSequelize();
    }
  }

  /*
   * get state
   */
  getState() {
    logger.info("DAO :: getState");
    let sql = "SELECT id, name";
    sql += " FROM state";
    return sequelize.query(sql, {
      type: sequelize.QueryTypes.SELECT
    });
  }

  /*
   * get state by id
   */
  getStateById(stateId) {
    logger.info("DAO :: getStateById");
    let sql = "SELECT id, name ";
    sql += "FROM state ";
    sql += "WHERE id = :stateId";
    return sequelize.query(sql, {
      replacements: { stateId: stateId },
      type: sequelize.QueryTypes.SELECT
    });
  }

  /*
   * transaction for this dao
   */
  transaction(txnFunction) {
    return sequelize.transaction(txnFunction);
  }
}

module.exports = MasterDao;
