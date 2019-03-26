const redis = require('redis');
const bluebird = require("bluebird");
// make node_redis promise compatible
bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

class RedisManager {
    constructor() {
        
    }
    
}

module.exports = RedisManager;