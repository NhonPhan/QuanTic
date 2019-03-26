const logger = require('./../../utils/logger');
const Promise = require('bluebird');
const csv = require("csvtojson");
const CsvUtils = require('./csv.utils');
const _ = require('lodash');
const moment = require('moment');
const FileEnum = require('./../../enums/file_enum');
const FilePath = require('./../../../config/asset/info');
const CsvConfig = require('./../../../config/csv/info');

class CsvTandridge {
    process(fileName) {
        logger.info('CsvTandridge process file::', fileName);
        let csvUtils = new CsvUtils();
        let filePath = process.cwd() + FileEnum.FILE_SPLIT + FilePath.TRANS + FileEnum.FILE_SPLIT + fileName;
        // build data trans
        //let transesData = [];
        let fileInfo = {fileName, filePath}
        return CsvTandridge.parse(filePath)
        .then((transesData) => {
            return csvUtils.save(transesData, fileInfo);
        });
    }

    static parse(filePath) {
        logger.info('CSV Parser file::', filePath);
        //logger.info('max_row::', CsvConfig.max_row);
        let transesData = [];
        return new Promise((resolve, reject) => {
            let parserParameters = {
                maxRowLength: CsvConfig.max_row,
                checkColumn: true,
                noheader:false,
                trim:true,
                headers: ["accountNo","accountName","propertyNo","transCode",
                "transType","transNo","description","transDate","transValue"]
            };
            csv(parserParameters)
            .fromFile(filePath)
            .then((jsonArray) => {
                //console.log(jsonArray);
                resolve(jsonArray);
            })
            .catch(err => {
                logger.error('Error CSV parser!!');
                //logger.error(err.message);
                return reject(err);
            });
        })
        
    }
}

module.exports = CsvTandridge;