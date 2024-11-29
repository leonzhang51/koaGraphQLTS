import { gql } from "apollo-server-koa";

const userSchema = gql`
  type Query {
    user(id: Int!): User
    allUsers: [User]
  }

  type User {
    age: Int!
    email: String!
    hobbies: [String!]
    id: Int!
    name: String!
  }
`;
export default userSchema;
