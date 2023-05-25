const mysql = require("mysql");

// Khởi tạo kết nối đến database
const connection = mysql.createConnection({
  host: "localhost",
  password: "22121944",
  user: "root",
  port: 3306,
  database: "feedbacks",
});

connection.connect((err) => {
  if (err) {
    console.log("Kết nối thất bại", err);
  } else {
    console.log("Kết nối thành công");
  }
});

module.exports = connection;
