const Promise = require("bluebird");
class MasterUtil {
  constructor() {}
  static processSomeLogic() {
    return new Promise((resolve, reject) => {
      resolve(true);
    });
  }
}

module.exports = MasterUtil;
