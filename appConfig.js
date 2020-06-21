let appConfig = {};

appConfig.port = process.env.PORT || 3000;
appConfig.allowedCorsOrigin = process.env.ALLOWED_CORS_ORIGIN || "*";
appConfig.env = process.env.ENV || "dev";
appConfig.mongoURI = process.env.MONGO_URI ||'mongodb://127.0.0.1:27017/StudentDB'
appConfig.apiVersion = process.env.API_VERSION || '/api/v1';
appConfig.maxUploadLimit = process.env.MAX_UPLOAD_LIMIT || '50mb';
appConfig.maxParameterLimit = process.env.APP_MAX_PARAMETER_LIMIT || '50mb';


module.exports = {
    port: appConfig.port,
    allowedCorsOrigin: appConfig.allowedCorsOrigin,
    environment: appConfig.env,
    mongoURI :appConfig.mongoURI,
    apiVersion : appConfig.apiVersion,
    maxUploadLimit: appConfig.maxUploadLimit,
    maxParameterLimit: appConfig.maxParameterLimit
};