const mysql = require("mysql");
// 비밀번호는 별도의 파일로 분리해서 버전관리에 포함시키지 않아야 합니다.
const connection = mysql.createConnection({
  host: "nmodelindeliveryweb.c3ebrsk3facw.ap-northeast-2.rds.amazonaws.com",
  user: "ruby413",
  password: "nmodelinDev1",
  port: "3306",
  database: "nmodelinDelivery",
});

connection.connect();

const allItem = () => {
  connection.query("SELECT * FROM temp_item", function (
    error,
    results,
    fields
  ) {
    if (error) {
      console.log(error);
    }
    console.log(results);
    return results;
  });
};

const allModel = () => {
  connection.query("SELECT * FROM temp_model", function (
    error,
    results,
    fields
  ) {
    if (error) {
      console.log(error);
    }
    console.log(results);
    return results;
  });
};

const allReturnInfo = () => {
  connection.query("SELECT * FROM temp_return_info", function (
    error,
    results,
    fields
  ) {
    if (error) {
      console.log(error);
    }
    console.log(results);
    return results;
  });
};

allItem()
module.exports = {allItem : allItem, allModel : allModel, allReturnInfo : allReturnInfo}

connection.end();
