const logger = require('./../../utils/logger');
const TransCmdHandler = require('./../../transaction/command/trans.cmd.handler');
// const Promise = require('bluebird');
// const fse = require('fs-extra');
// const FileEnum = require('./../../enums/file_enum');
// const FilePath = require('./../../../config/asset/info');
let handler;
class CsvUtils{
    constructor(){

    }
    save(transesData, fileInfo) {
        logger.info('CsvUtils save trans import data.')
        handler = new TransCmdHandler();
        return handler.importTranses(transesData, fileInfo);        
    }
}

module.exports = CsvUtils;