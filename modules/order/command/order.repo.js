const DBManager = require("../../utils/database_manager");
let dbManager;
let sequelize;
let Order;

class OrderRepository {
  constructor() {
    dbManager = new DBManager();
    if (dbManager.checkInitDB()) {
      sequelize = dbManager.getSequelize();
      Order = sequelize.import("./../../../models/order");
    }
  }

  createOrder(command, t) {
    return Order.create(command, {
      transaction: t
    });
  }

  cancelOrder(orderId, command, t) {  
    return Order.update(command,{
      where: {
        id: orderId
      },
      transaction: t
    });
  }

  transaction(txnFunction) {
    return sequelize.transaction(txnFunction);
  }
}

module.exports = OrderRepository;