import { Sequelize } from "sequelize";
const { PG_DB, PG_USER, PG_PASSWORD, PG_HOST, PG_PORT } = proccess.env;
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
  await sequelize.sync();
  console.log("Tables sync");
};
