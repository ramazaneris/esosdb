var esosdb = require("./module/index");
var db = new esosdb.DataBase({
  path: "./esosdb/database.json",
  space: 3,
});

db.set("module.name", "esosdb", (data) => {
  console.log(data);
});

db.set("module.version", "2.1.0", (data) => {
  console.log(data);
});
