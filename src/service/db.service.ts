import pg from "pg";

const { Pool } = pg;
const client = new Pool({
  user: "postgres",
  host: "localhost",
  database: "First",
  password: "postgres",
  port: 5432,
});

export const dbConnect = async (sqlQuery: string) => {
  client.connect();
  const result = await client.query(sqlQuery);
  console.log(result.rows);
  //await client.end();
  return result.rows;
};
