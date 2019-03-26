const Promise = require('bluebird');
const Sequelize = require('sequelize');
const dbConfig = require('./../../config/db/info');
const logger = require('./../utils/logger');

let instance = null;

class DecodeUtils {
    
    constructor() {
        if (!instance) {
            logger.info('Create new Decode instance!');
            this.decode = {};           
            instance = this;            
        } else {
            //logger.info(`Get existing'decode instance! `);
        }
        
        return instance;
    }

    getDecode() {        
        if (instance) {
            return instance.decode;
        } else {
            return {};
        }
    }

    setDecode(decode) {
        if (instance) {
            instance.decode = decode;
        }
    }
}

module.exports = DecodeUtils;