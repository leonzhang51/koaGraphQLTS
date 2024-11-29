import axios from "axios";
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
