/**
 * Created by xiaoyi on 2015/6/26.
 */
var BaseConfig = {
    db:{
        poolConfig : {
            min :2,
            max :3,
            log :false
        },
        connectionConfig:{
            userName    :"username",
            password    :"password",
            server      :"serverIp"
        }
    },
    access_level:{
        NO_PASS : 0,
        NORMAL :1,
        ADMIN:2
    }
}
module.exports = BaseConfig;