/**
 * Created by ivan on 29/7/2017.
 */
var fs = require('fs');
var config = JSON.parse(fs.readFileSync('config.json', 'utf8'));

exports.configuracion = config;