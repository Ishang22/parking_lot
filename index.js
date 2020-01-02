let parkingLotController = require("./Controllers/index").parkingLotController;
let standard_input = process.stdin;
const fs = require("fs");
const fileName = "groceryList.json";
standard_input.setEncoding("utf-8");

console.log("Please input text in command line.");

standard_input.on("data", async data => {
  data = data.split(" ");
  data[data.length - 1] = data[data.length - 1].replace(/\n|\r/g, "");
  switch (data[0]) {
    case "create_parking_lot":
      await parkingLotController.createParkingLot(data);
      break;
    case "park":
      await parkingLotController.allotParkingSlot(data);
      break;
    case "leave":
      await parkingLotController.leaveSlot(data);
      break;
    case "status":
      await parkingLotController.getStatusOfCar(data);
      break;
    case "registration_numbers_for_cars_with_colour":
      await parkingLotController.getNumbersWithColour(data);
      break;
    case "slot_numbers_for_cars_with_colour":
      await parkingLotController.leaveSlot(data);
      break;
    case "exit":
      fs.unlink(fileName, err => {
        if (err) throw err;
        process.exit();
      });
      process.exit();
      break;
    default:
      console.log("invalid input");
  }
});
