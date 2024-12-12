import axios from "axios";
import { dbConnect } from "./db.service";
export const fetchDatafromVtex = async () => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `https://${process.env.VTEX_VENDOR_ID}.vtexcommercestable.com.br/api/oms/pvt/orders/1472150500035-01`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-VTEX-API-AppToken": process.env.X_VTEX_API_APPTOKEN,
      "X-VTEX-API-AppKey": process.env.X_VTEX_API_APPKEY,
    },
  };

  return axios
    .request(config)
    .then((response) => {
      console.log("response from axios", response.data);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const fetchCarDatafromPostgresSqlServer = async () => {
  const result = await dbConnect(`SELECT * FROM public.cars`);
  console.log(result);
  return result;
};

export const addCar = async (brand: string, model: string, year: string) => {
  const result = await dbConnect(
    `INSERT INTO "First".public.cars(brand, model, year) VALUES ('${brand}', '${model}', '${year}')`,
  );
  console.log(result);
  return result;
};
