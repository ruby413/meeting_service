const { GoogleSpreadsheet } = require("google-spreadsheet");
const creds = require("./googleSpreadSheetKey.json");
// let today = new Date();
const accessSpreadsheet = async (
  name,
  phone,
  pickupDate,
  pickupPlace,
  address1,
  address2,
  payment
) => {
  const doc = new GoogleSpreadsheet(
    "1MsXnSJvNZxn3kwKntVLHYw5qSi5m9AjK5L9L3JqQwNA"
  );
  await doc.useServiceAccountAuth(creds);
  await doc.loadInfo();
  const sheet = doc.sheetsByIndex[0];
  const loadDt = new Date();
  await sheet.addRow({
    "타임스탬프": new Date(Date.parse(loadDt) + 9000 * 60 * 60).toLocaleString('ko-KR'),
    "이름" : name,   
    "연락처": "'"+phone,
    "수령요일" : pickupDate,
    "수령장소" : pickupPlace,
    "주소" : address1,
    "공동현관 출입방법" : address2,
    "결제" : payment
  });
};

module.exports = { accessSpreadsheet: accessSpreadsheet };
