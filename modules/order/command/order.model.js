const Promise = require("bluebird");
const logger = require("../../utils/logger");
const Hashing = require("../../utils/hashing");
const OrderRepository = require("./order.repo.js");
const OrderCreateCommand = require("./order.create.cmd");
const OrderCancelCommand = require("./order.cancel.cmd");
const MasterService = require("../../master/query/master.query");

let repo;
class OrderModel {
  constructor() {
    repo = new OrderRepository();
  }

  /*
   * create order
   */
  createOrder(command) {
    if (command instanceof OrderCreateCommand) {
      return repo.createOrder(command).then(result => {
        return Promise.resolve(result.id);
      });
    } else {
      return Promise.reject(new Error("Command is invalid!"));
    }
  }

  /*
   * cancel order
   */

  cancelOrder(orderId,command) {
    if (command instanceof OrderCancelCommand) {
      return repo.cancelOrder(orderId,command).then(result => {
        return Promise.resolve(result);
      });
    } else {
      return Promise.reject(new Error("Command is invalid!"));
    }
  }



}

module.exports = OrderModel;
