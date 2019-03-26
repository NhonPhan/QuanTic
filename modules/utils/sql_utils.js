class SqlUtils {
    constructor(){

    }
    static escape(sql) {
        let sqlRet = sql;
        sqlRet = sqlRet.replace(/%/g, '\\%')
        sqlRet = sqlRet.replace(/_/g, '\\_')
        return sqlRet;
    }
}

module.exports = SqlUtils;