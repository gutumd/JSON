const fs = require("fs");

const data = fs.readFileSync("./json/data.json", "utf8");

const cars = JSON.parse(data);

cars.cars.car[0].mark = "Mercedes-Benz";
cars.cars.car[0].model = "B-CLASS";
cars.cars.car[0].color = "Aqua";

fs.writeFileSync("./json/data.json", JSON.stringify(cars, null, 2), "utf8");
