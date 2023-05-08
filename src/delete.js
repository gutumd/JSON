const fs = require("fs");

const data = fs.readFileSync("./json/data.json");
const cars = JSON.parse(data);

const index = cars.cars.car.findIndex((car) => car.id === 2);

if (index !== -1) {
  cars.cars.car.splice(index, 1);
}

fs.writeFileSync("./json/data.json", JSON.stringify(cars, null, 2));
