import { SecurityConstant } from './security.const';
export class Config {
    public static DbConnection: string = "mongodb://localhost:27017/userDatabase";
    public static basePath: string = "data";
    public static apiversion: string = "v1";

    public static ElasticSearchConnection : string  = "http://localhost:9200";
    public static ApplyElasticSearch : boolean = false;
}

export 
class SqlConfig {

    public static isSqlEnabled: boolean = true;
    public static database: string = "cicerotal3";
    public static username: string = "sa";
    public static password: string = "Aug@2018";

    public static sequlizeSetting: any = {
        host: "172.19.101.120",
        dialect: 'mssql',

        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
        port: 57005,
        dialectOptions: {
            encrypt: true,
            requestTimeout:50000
        }
        // SQLite only
        //storage: 'path/to/database.sqlite'
    };

}

export class Security {
    public static isAutheticationEnabled ="disabled";//allowed values: "disabled","enabledWithoutAuthorization","enabledWithAuthorization"
    public static authenticationType = SecurityConstant.TokenBased;//allowed values: "passwordBased","TokenBased"
    public static overrideLogin = false;
    public static defaultNetSession: string = "master";
    public static useFaceBookAuth = false;
}

export class facebookAuth {
    public static clientID = '11';// your App ID
    public static clientSecret = 'aa';// your App Secret
    public static callbackURL = 'http://localhost:23548/auth/facebook/callback';
}

export class passportSet {
    public static passport;

    public static setPassport(pasportInstance) {
        passportSet.passport = pasportInstance;
    }

    public static getPassport() {
        return passportSet.passport;
    }
}