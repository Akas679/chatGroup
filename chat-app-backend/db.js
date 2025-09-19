const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("chatdb", "root", "admin", {
  host: "localhost",
  dialect: "postgres",
  port: 5432, // 👈 Add the Postgres port here
});

sequelize.authenticate()
  .then(() => console.log("✅ Database connected"))
  .catch((err) => console.error("❌ DB connection error:", err));

module.exports = sequelize;
