const mysql = require("mysql2/promise");
let connection;
module.exports = {
	async initDB() {
		connection = await mysql.createConnection({
			host: "localhost",
			user: "root",
			password: "Mysql123456",
			database: "photo",
		});
	},
	getDB() {
		return connection;
	},
};
