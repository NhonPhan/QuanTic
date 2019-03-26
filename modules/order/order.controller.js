const logger = require("../utils/logger");
const httpCodes = require("http-status-codes");
const empty = require("is-empty");
const Handler = require("./command/order.cmd.handler");
const OrderCreateCommand = require("./command/order.create.cmd");
const OrderCancelCommand = require("./command/order.cancel.cmd");
const OrderQueryService = require("./query/order.query");
let handler;
let service;
class OrderController {
  constructor() {}

  /*
   * create order
   */
  createOrder(req, res) {
    logger.info("CREATE-ORDER", "Starting", req.body.order_name);
    try {
      let state_Id = req.body.state_id;
      let order_name = req.body.order_name;

      let command = new OrderCreateCommand(state_Id, order_name);
      handler = new Handler();
      handler
        .createOrder(command)
        .then(orderID => {
          logger.info("CREATE-ORDER", "Finished!", orderID);
          let dataRes = {
            type: "order",
            order: {
              id: orderID
            }
          };
          return res.status(httpCodes.OK).json(dataRes);
        })
        .catch(err => {
          logger.error(err.message);
          logger.info("CREATE-ORDER", "Error!");
          return res
            .status(httpCodes.BAD_REQUEST)
            .json({ error: "Create order error!!!" });
        });
    } catch (err) {
      logger.error(err);
      return res
        .status(httpCodes.BAD_REQUEST)
        .json({ error: "Error when processing!!" });
    }
  }

  /*
   * delete order
   */
  cancelOrder(req, res) {
    logger.info("CANCEL-ORDER", "Starting", req.body.id);
    try {
      let id = req.body.id;
      let state_id = 4;
      let command = new OrderCancelCommand(state_id);
      handler = new Handler();
      handler
        .cancelOrder(id, command)
        .then(result => {
          logger.info("CANCEL-ORDER", "Finished!");
          let dataRes = {
            type: "order",
            order: {
              id: id
            }
          };
          return res.status(httpCodes.OK).json(dataRes);
        })
        .catch(err => {
          logger.error(err.message);
          logger.info("CANCEL-ORDER", "Error!");
          return res
            .status(httpCodes.BAD_REQUEST)
            .json({ error: "Cancel order error!!!" });
        });
    } catch (err) {
      logger.error(err);
      return res
        .status(httpCodes.BAD_REQUEST)
        .json({ error: "Error when processing!!" });
    }
  }

  /*
   * get check order by id
   */
  getCheckStatusOrder(req, res) {
    logger.info("GET-CHECK-ORDER-STATUS", "Starting", req.params.id);
    let id = req.params.id;
    try {
      service = new OrderQueryService();
      service
        .getCheckStatusOrder(id)
        .then(result => {
          let dataRes = {
            type: "order_status"
          };
          switch (result.state_id) {
            case 1:
              dataRes.order_status = "CREATED";
              return res.status(httpCodes.OK).json(dataRes);
            case 2:
              dataRes.order_status = "COMFIRMED";
              return res.status(httpCodes.OK).json(dataRes);
            case 3:
              dataRes.order_status = "DELIVERED";
              return res.status(httpCodes.OK).json(dataRes);
            default:
              dataRes.order_status = "CANCELLED";
              return res.status(httpCodes.OK).json(dataRes);
          }
        })
        .catch(err => {
          logger.error(err.message);
          return res
            .status(httpCodes.BAD_REQUEST)
            .json({ error: "Get check order status error!!!" });
        });
    } catch (err) {
      logger.error(err);
      return res
        .status(httpCodes.BAD_REQUEST)
        .json({ error: "Error when processing!!" });
    }
  }
}

module.exports = OrderController;
