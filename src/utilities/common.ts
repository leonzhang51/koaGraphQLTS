import ExcelJS from "exceljs";

export const convertExcelToJson = async (file: string) => {
  const workbook = new ExcelJS.Workbook();
  console.log("file", file);
  try {
    await workbook.xlsx.readFile(file);
    const worksheet = workbook.worksheets[0];
    const json: Array<{ [key: string]: any }> = [];
    worksheet.eachRow({ includeEmpty: true }, function (row, rowNumber) {
      const rowObject: { [key: string]: any } = {};
      row.eachCell({ includeEmpty: true }, function (cell, colNumber) {
        rowObject[`col${colNumber}`] = cell.value;
      });
      json.push(rowObject);
    });
    return json;
  } catch (error) {
    console.error("convert error", error);
    return [];
  }
};
