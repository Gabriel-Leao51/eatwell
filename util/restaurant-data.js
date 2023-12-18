const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "..", "data", "restaurants.json");

getStoredRestaurants = () => {
  const fileData = fs.readFileSync(filePath);
  const storedRestaurants = JSON.parse(fileData);

  return storedRestaurants;
};

storeRestaurants = (storableRestaurants) => {
  fs.writeFileSync(filePath, JSON.stringify(storableRestaurants));
};

module.exports = {
  getStoredRestaurants: getStoredRestaurants,
  storeRestaurants: storeRestaurants,
};
