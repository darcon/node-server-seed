/**
 * Created by xiaoyi on 2015/6/26.
 */
var log4js = require('log4js');
log4js.loadAppender('file');
log4js.addAppender(log4js.appenders.file('./logs/info.log'), 'info');
log4js.addAppender(log4js.appenders.file('./logs/error.log'), 'error');
log4js.addAppender(log4js.appenders.file('./logs/warn.log'), 'warn');
log4js.addAppender(log4js.appenders.file('./logs/fatal.log'), 'fatal');

var infoLogger = log4js.getLogger('info');
infoLogger.setLevel('info');

var errorLogger = log4js.getLogger('error');
errorLogger.setLevel('error');

var warnLogger = log4js.getLogger('warn');
warnLogger.setLevel('warn');


var log ={
    info : function(msg){
        infoLogger.info(msg);
    },
    error: function(error){
        errorLogger.error(error);
    },
    warn : function(msg){
        warnLogger.warn(msg);
    }
}

module.exports = log;