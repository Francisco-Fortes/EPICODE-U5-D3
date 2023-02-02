import { Sequelize } from "sequelize";
const { PG_DB, PG_USER, PG_PASSWORD, PG_HOST, PG_PORT } = process.env;
const sequelize = new Sequelize(PG_DB, PG_USER, PG_PASSWORD, {
  host: PG_HOST,
  port: PG_PORT,
  dialect: "postgres", //chose DB you are going to use
});
//constructor that takes as parameters db, username, pass + options(host, port, dialect)
export default sequelize;

export const pgConnect = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected to Postgres");
  } catch (error) {
    console.log(error);
    process.exit(1); // kills node.js process
  }
};

export const syncModels = async () => {
  await sequelize.sync({});
  console.log("Tables sync");
};
//User.sync() - This creates the table if it doesn't exist (and does nothing if it already exists)
//User.sync({ force: true }) - This creates the table, dropping it first if it already existed
//User.sync({ alter: true }) - This checks what is the current state of the table in the database
//(which columns it has, what are their data types, etc), and then performs the necessary changes in the table to
// make it match the model.
