import { ApolloServer } from "apollo-server-koa";
import Koa from "koa";
import typeDefs from "./graphql/schema";
import resolvers from "./graphql/resolver";

const server = new ApolloServer({
  debug: true,

  resolvers,
  typeDefs,
});

const app = new Koa();
server.start().then(() => {
  app.use(server.getMiddleware());

  const port = 8080;
  app.listen(port, () => {
    console.log("server listening at port %s", port);
  });
});
//app.use(server.getMiddleware());

// const port = 8080;
// app.listen(port, () => {
//   console.log("server listening at port %s", port);
// });
