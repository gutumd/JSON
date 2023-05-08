const fs = require("fs");

const data = fs.readFileSync("./json/data.json", "utf8");

const cars = JSON.parse(data);

cars.cars.car.push({
  mark: "Toyotaa",
  model: "Camry",
  color: "Silver",
});

fs.writeFileSync("./json/data.json", JSON.stringify(cars, null, 2), "utf8");
