import Sequelize from "sequelize";

const db = new Sequelize("skripsi", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
