'use strict';
const Joi = require('joi');

// require and configure dotenv, will load vars in .env in PROCESS.ENV
require('dotenv').config();


// define validation for all the env vars
const envVarsSchema = Joi.object({
  NODE_ENV: Joi.string().allow(['development', 'production', 'test', 'provision']).default('development'),
  SERVER_PORT: Joi.number().default(4040),
  MONGOOSE_DEBUG: Joi.boolean().when('NODE_ENV', {
    is: Joi.string().equal('development'),
    then: Joi.boolean().default(true),
    otherwise: Joi.boolean().default(false)
  }),
  JWT_SECRET: Joi.string().required().description('JWT Secret required to sign'),
  DISABLE_STATIC_SERVE: Joi.boolean().default(false),

  // MongoDB
  MONGO_HOST: Joi.string().required().description('Mongo DB host url  database muino'),
  MONGO_PORT: Joi.number().default(27017),
  MONGO_USER: Joi.string().description('MONGO User required to sign'),
  MONGO_PWD: Joi.string().description('MONGO Secret required to sign'),

  // MySQL
  MYSQL_HOST: Joi.string().required().description('MySQL DB host url  database muino'),
  MYSQL_DATABASE: Joi.string().required().description('MySQL DB nAME  database muino'),
  MYSQL_PORT: Joi.number().default(27017),
  MYSQL_USER: Joi.string().description('MySQL User required to sign'),
  MYSQL_PWD: Joi.string().description('MySQL Secret required to sign'),

  // Reset password email settings
  SMTP_PORT: Joi.number().default(587),
  SMTP_HOST: Joi.string().description('SMTP server url'),
  SMTP_SECURE: Joi.boolean().default(false),
  SMTP_USER: Joi.string().description('SMTP email'),
  SMTP_PASS: Joi.string().description('SMTP Secret required to sign')
}).unknown()
  .required();

const { error, value: envVars } = Joi.validate(process.env, envVarsSchema);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {
  env: envVars.NODE_ENV,
  port: envVars.SERVER_PORT,
  mongooseDebug: envVars.MONGOOSE_DEBUG,
  jwtSecret: envVars.JWT_SECRET,
  frontend: 'angular',
  loaderio_enable: envVars.LOADERIOeNABLE,
  mongo: {
    host: envVars.MONGO_HOST,
    port: envVars.MONGO_PORT,
    mongouser: envVars.MONGO_USER,
    mongopwd: envVars.MONGO_PWD
  },
  mysql: {
    host: envVars.MYSQL_HOST,
    port: envVars.MYSQL_PORT,
    user: envVars.MYSQL_USER,
    pwd: envVars.MYSQL_PWD,
    database: envVars.MYSQL_DATABASE
  },
  email: {
    smtp_port: envVars.SMTP_PORT,
    smtp_host: envVars.SMTP_HOST,
    smtp_secure: envVars.SMTP_SECURE,
    smtp_user: envVars.SMTP_USER,
    smtp_pass: envVars.SMTP_PASS
  },
  disable_static_serve: envVars.DISABLE_STATIC_SERVE
};

module.exports = config;
