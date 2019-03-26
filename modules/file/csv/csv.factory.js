const logger = require('./../../utils/logger');
const CsvConst = require('./csv.const');
const CsvTandridge = require('./csv.tandridge');
let csv;
class CsvFactory {
    constructor(){

    }
    createCsv(type) {
        switch (type) {
            case CsvConst.TANDRIDGE:
                csv = new CsvTandridge();
                break;
            default:
                csv = new CsvTandridge();
                break;
        }     
        return csv;
    }
}

module.exports = CsvFactory;