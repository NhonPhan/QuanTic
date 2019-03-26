const logger = require("../../utils/logger");
const Promise = require("bluebird");
const OrderDao = require("./order.dao");
const OrderDto = require("./../dto/order.dto");

let dao;
class OrderQueryService {
  constructor() {
    logger.info("constructor of StaffQueryService");
    dao = new OrderDao();
  }

  getCheckStatusOrder(id) {
    return dao.getCheckStatusOrder(id).then(result => {
      if (!result) {
        return Promise.reject(new Error("No role found!"));
      }
      let item = result[0];
      let dto = new OrderDto(item.id, item.state_id, item.order_name);
      return Promise.resolve(dto);
    });
  }
}

module.exports = OrderQueryService;
