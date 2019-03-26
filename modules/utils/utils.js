const crypto = require('crypto');

class Utils {
    constructor(){

    }
    createSystemId() {
        let SECRET_SYSTEM_ID_LENGTH = 5;
        //create system id with 10 hex
        let bufferSystemId = crypto.randomBytes(SECRET_SYSTEM_ID_LENGTH);
        let systemId = bufferSystemId.toString('hex');
        return systemId.toUpperCase();
    }
    
}

module.exports = Utils;