import casual from "casual";
import { User } from "../graphql/interfaces";
const hobbies = [
  "soccer",
  "travelling",
  "dancing",
  "painting",
  "sailing",
  "fishing",
  "movies",
  "coding",
];

function generateUser(): User {
  return {
    age: casual.integer(20, 30),
    email: casual.email,
    hobbies: [casual.random_element(hobbies)],
    id: casual.integer(1, 10),
    name: casual.name,
  };
}

const USERS = new Array(10).fill(0).map((x) => generateUser());

function getUserByIndex(index: number): User {
  return USERS[index];
}

export { getUserByIndex };
