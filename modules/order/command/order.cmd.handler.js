const OrderModel = require("./order.model");
let model;
class OrderCmdHandler {
  constructor() {
    model = new OrderModel();
  }

  createOrder(command) {
    return model.createOrder(command);
  }

  cancelOrder(orderId,command) {
    return model.cancelOrder(orderId,command);
  }
}

module.exports = OrderCmdHandler;
