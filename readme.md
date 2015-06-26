Documents
-------------
项目封装了一些常用的功据、标准了文件结构，实现更快速的开发。
powered by Node.js/gulp


> **特点:**

> - 利用Gulp进行构建，
> - 实现JS代码的**检测**、**压缩**、**合并**等.

#### 安装

    npm install

#### 构建发布

    gulp

<<<<<<< HEAD
#### 常用Module
=======
#### 常用Module
>>>>>>> bf0fe676011192e71c031b6be15bb8d0ba129176

 1. [gulp](https://github.com/gulpjs/gulp) 构建工具
 2. [tedious](https://github.com/pekim/tedious) mssql链接库
 3. [tedious-connection-pool](https://github.com/pekim/tedious-connection-pool) mssql链接池
 4. [node-mysql](https://github.com/felixge/node-mysql) mysql链接库
 5. [log4js](https://github.com/nomiddlename/log4js-node) 日志库
 6. [async](https://github.com/caolan/async)
 7. [when](https://github.com/caolan/async)
 8. [util](https://nodejs.org/api/util.html)


<<<<<<< HEAD
#### 常用Util

##### logUtil使用
=======
#### 常用Util

##### logUtil使用
>>>>>>> bf0fe676011192e71c031b6be15bb8d0ba129176
日志输出，等级 info、error/warn

    var log = require('../utils/logUtil');
    ...
    log.info('info');
    log.warn('warn');
    log.error('err');

<<<<<<< HEAD
##### mssqlUtil使用
=======
##### <i class="icon-pencil"></i>mssqlUtil使用
>>>>>>> bf0fe676011192e71c031b6be15bb8d0ba129176
Sqlserver 连接工具类,基于when.js(Promises/A)，基于<kbd>require('tedious').TYPES</kbd>进行参数类型校验

    var when = require('when');
	var log  = require('../utils/logUtil');
	var dbUtil = require('../utils/dbPoolUtil');
	function query(){
		var deffered = when.defer();
		var parameters = [{
			name:'id',
			type:'Int'
			value:1
		}];

		var sql = 'select id, name from t_user where id =@id;';

		dbUtil.execSQL(sql, parameters)
        .then(function(data){
            log.info(data);
            deffered.resolve(data);
        })
        .catch(function (err) {
            log.error(err);
            deffered.reject(err);
        });

	    return deffered.promise;
	}


#### License
    MIT
