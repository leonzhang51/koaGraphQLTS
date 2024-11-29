import { getUserByIndex } from "../service/datastore";
import { resolverArg } from "../graphql/interfaces";
import { fetchDatafromVtex } from "../service/service";
const userQueryResolver = (_: any, args: resolverArg) => {
  return args.id;
};

const allUsersQueryResolver = () => {
  return new Array(10).fill(0).map((_, index) => index);
};

const UserTypeResolver = {
  age: (id: number) => {
    const user = getUserByIndex(id);
    return user.age;
  },
  email: (id: number) => {
    const user = getUserByIndex(id);
    return user.email;
  },
  hobbies: (id: number) => {
    const user = getUserByIndex(id);
    return user.hobbies;
  },
  id: (id: number) => {
    const user = getUserByIndex(id);
    return user.id;
  },
  name: (id: number) => {
    const user = getUserByIndex(id);
    return user.name;
  },
};
export default {
  Query: {
    user: userQueryResolver,
    allUsers: allUsersQueryResolver,
    getOrders: async () => {
      const testData = await fetchDatafromVtex();
      return testData;
    },
  },
  User: UserTypeResolver,
};
