import { ApolloServer } from "apollo-server-koa";
import Koa from "koa";
import typeDefs from "./graphql/schema.js";
import resolvers from "./graphql/resolver.js";
import path from "path";
import { convertExcelToJson } from "./utilities/common.js";

const filePath = path.join(
  __dirname,
  "Product_text_attributes_1726066780587.xlsx",
);

(async () => {
  // test function for convertExcelToJson
  const convertExcelToJsonPromise = await convertExcelToJson(filePath);
  console.log("convertExcelToJsonPromise", convertExcelToJsonPromise);

  const server = new ApolloServer({
    debug: true,
    resolvers,
    typeDefs,
  });

  const app = new Koa();
  server.start().then(() => {
    app.use(server.getMiddleware());
    const port = process.env.PORT || 8000;
    app.listen(port, () => {
      console.log("server listening at port %s", port);
    });
  });
})();
