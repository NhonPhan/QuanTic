class OrderCreateCommand {
  constructor(stateId, order_name) {
    this.state_id = stateId;
    this.order_name = order_name;
  }
}
module.exports = OrderCreateCommand;
