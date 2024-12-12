import { gql } from "apollo-server-koa";

const userSchema = gql`
  type Query {
    user(id: Int!): User
    allUsers: [User]
    getOrders: order
    getCars: [Cars]
  }

  type Mutation {
    addCar(brand: String!, model: String!, year: String!): String
  }
  type User {
    age: Int!
    email: String!
    hobbies: [String!]
    id: Int!
    name: String!
  }
  type orderItem {
    id: String
    name: String
    value: Int
  }
  type order {
    orderId: String
    sequence: Int
    marketplaceServicesEndpoint: String
    origin: String
    totals: [orderItem]
  }
  type Cars {
    brand: String
    model: String
    year: String
  }
`;
export default userSchema;
