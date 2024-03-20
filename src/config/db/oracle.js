// const oracledb = require("oracledb");
// const mypw = "Admin123"; // set mypw to the hr schema password

// oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

// let result;

// async function connect() {
//   try {
//     const connection = await oracledb.getConnection({
//       user: "EDUCATION_DEV_ORCL",
//       password: mypw,
//       connectString: "localhost/orcl",
//     });

//     console.log("Connect successfully");
//   } catch (error) {
//     console.log("Oppps: ", error);
//   }
// }

// module.exports = { connect };

const { Sequelize } = require("sequelize");

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize("orcl", "EDUCATION_DEV_ORCL", "Admin123", {
  host: "localhost",
  dialect: "oracle",
});

try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
