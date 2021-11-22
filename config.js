require('dotenv').config() 

exports.port = process.argv[2] || process.env.PORT || 4000;
exports.dbUrl = process.env.MONGO_URL || process.env.DB_URL || 'mongodb://localhost:27017/test';
exports.secret = process.env.JWT_SECRET || 'esta-es-la-api-burger-queen';
// Constantes Admin
exports.adminUsername = process.env.ADMIN_USERNAME || 'John Smith';
exports.adminPassword = process.env.ADMIN_PASSWORD || 'adminPineapple';
exports.adminEmail = process.env.ADMIN_EMAIL       || 'johnsmith@pineapple.com';
exports.adminName = process.env.ADMIN_NAME         || 'John';
exports.adminLastname = process.env.ADMIN_LASTNAME || 'Smith';
