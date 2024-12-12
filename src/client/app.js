//import { request } from "graphql-request";
const GRAPHQL_URL = "http://localhost:8080/graphql";

async function fetchGreeting() {
  //const response = await request(GRAPHQL_URL, getCars);

  const response = await fetch(GRAPHQL_URL, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      query: `
          query GetCars {
    getCars {
      brand
      model
      year
    }
  }
        `,
    }),
  });

  const { data } = await response.json();
  console.log("data from graphql", data);
  return data.getCars;
}

fetchGreeting().then((data) => {
  console.log("response", data);
  const title = document.querySelector("h1");
  title.textContent = data[0].brand;
});
