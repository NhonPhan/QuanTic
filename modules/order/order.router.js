const express = require('express');
const OrderController = require('./order.controller');

// Create our Express router
const router = express.Router();

let controller = new OrderController();

// Create endpoint handlers for staff
router.route('/orders').post( controller.createOrder);
//  router.route('/orders').put(controller.updateStaff);
 router.route('/orders').put(controller.cancelOrder);
// router.route('/staffs').get(controller.getStaffAll);
 router.route('/order/:id').get(controller.getCheckStatusOrder);
module.exports = router;
