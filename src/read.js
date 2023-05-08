const fs = require("fs");

fs.readFile("./json/data.json", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(data);
});
