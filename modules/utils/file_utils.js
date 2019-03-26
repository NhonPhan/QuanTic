const logger = require('./logger');
const Promise = require('bluebird');
//const csvReport = require('csv-report');
const Report = require('fluentreports').Report;
const PdfUtils = require('./../file/pdf/pdf.utils');

class FileUtils {
    constructor(){
        
    }
    convertCsv2Pdf(data, pdfFilePath) {
        return new Promise((resolve, reject) => {
            try {
                let rpt = new Report(pdfFilePath)
                    .data(data)									 // Add our Data
                    //.pageHeader(["My Grocery List"])    		 // Add a simple header
                    .detail("{{count}} {{unit}} of {{item}}");   // Put how we want to print out the data line.
                
                rpt.render((err, reportName) => {
                    if(err) {
                        logger.info('Error gen pdf file!!!');    
                        return reject(false);
                    } 
                    logger.info('Your report has been rendered to ::', reportName);
                    resolve(true);
                    // filePathGen = process.cwd() + FileEnum.FILE_SPLIT + reportName;
                    // filePathBills = process.cwd() + FileEnum.FILE_SPLIT + FilePath.BILL + FileEnum.FILE_SPLIT + reportName;
                    // //logger.info('Your report has been rendered to ::', filePathGen);
                    // fse.move(filePathGen, filePathBills)
                    // .then(() => {
                    //     //logger.info('Your report has been moved to ::', filePathBills);
                    //     logger.info('makePdf Tandridge ::', 'Finish!');
                    //     return resolve(true);
                    // })
                    // .catch(err => {
                    //     logger.info('Error move pdf file!!!');    
                    //     return reject(false);
                    // }) 
                });
                
            } catch (err) {
                logger.error(err.message);
                reject(err);
            }
        });
    }

    // convertCsv2Pdf1(csvFilePath, pdfFilePath) {
    //     return new Promise((resolve, reject) => {
    //         try {
    //             logger.info ('Starting convert csv to pdf', csvFilePath, pdfFilePath);
    //             const options = {
    //                 file: csvFilePath,
    //                 out: pdfFilePath,
    //                 delim: ','
    //             };
                 
    //             // render
    //             const report = new csvReport(options)
    //                 .render()
    //                 .then(pdfPath => {
    //                     logger.info ('Finish convert csv to pdf::', pdfPath);
    //                     resolve(true);
    //                 })
    //                 .catch(err => {
    //                     logger.error(err.message);
    //                     reject(err);
    //                 });
                
    //         } catch (err) {
    //             logger.error(err.message);
    //             reject(err);
    //         }
    //     });
    // }
}
module.exports = FileUtils;