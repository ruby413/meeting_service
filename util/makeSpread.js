const { GoogleSpreadsheet } = require("google-spreadsheet");
const creds = require("./googleSpreadSheetKey.json");
// let today = new Date();
const accessSpreadsheet = async (
  phone,
  name,
  pickupDate,
  pickupPlace,
  address,
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
    "연락처": "'"+phone,
    "이름" : name,
    "수령요일" : pickupDate,
    "수령장소" : pickupPlace,
    "주소" : address,
    "결제" : payment
  });
};

module.exports = { accessSpreadsheet: accessSpreadsheet };
