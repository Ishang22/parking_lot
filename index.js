let parkingLotController = require("./Controllers/index").parkingLotController;
let keyMapFunction = require("./Constant/keyToFile");
let standard_input = process.stdin;
const fs = require("fs");
const fileName = "groceryList.json";
standard_input.setEncoding("utf-8");

console.log("Please input text in command line.");

standard_input.on("data", async data => {
  data = data.split(" ");
  data[data.length - 1] = data[data.length - 1].replace(/\n|\r/g, "");

  if (keyMapFunction[data[0]]) {
    await parkingLotController[keyMapFunction[data[0]]](data);
  } else if (data[0].includes(".txt")) {
    await parkingLotController.readDataFromFile(data);
  } else {
    console.log("invalid input");
  }
});
