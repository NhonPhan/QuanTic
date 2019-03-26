const logger = require("./../utils/logger");
const httpCodes = require("http-status-codes");
const MasterQueryService = require("./query/master.query");
let service;

class MasterController {
  constructor() {}

  /*
   * get state
   */
  getState(req, res) {
    logger.info("GET-STATE");
    try {
      service = new MasterQueryService();
      service
        .getState()
        .then(results => {
          let dataRes = {
            type: "state",
            state: results
          };
          return res.status(httpCodes.OK).json(dataRes);
        })
        .catch(err => {
          logger.error(err);
          return res
            .status(httpCodes.BAD_REQUEST)
            .json({ error: "Get state error!!!" });
        });
    } catch (err) {
      logger.error(err);
      return res
        .status(httpCodes.BAD_REQUEST)
        .json({ error: "Error when processing!!" });
    }
  }
  /*
   * get state by id
   */
  getStateById(req, res) {
    logger.info("GET-STATE-BY-ID");
    let stateId = req.params.stateId;
    try {
      service = new MasterQueryService();
      service
        .getStateById(stateId)
        .then(results => {
          let dataRes = {
            type: "state",
            state: results
          };
          return res.status(httpCodes.OK).json(dataRes);
        })
        .catch(err => {
          logger.error(err.message);
          return res
            .status(httpCodes.BAD_REQUEST)
            .json({ error: "Get state by id error!!!" });
        });
    } catch (err) {
      logger.error(err);
      return res
        .status(httpCodes.BAD_REQUEST)
        .json({ error: "Error when processing!!" });
    }
  }
}

module.exports = MasterController;
