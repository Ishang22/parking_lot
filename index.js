let parkingLotController = require("./Controllers/index").parkingLotController;
let standard_input = process.stdin;
const fs = require("fs");
const fileName = "groceryList.json";
standard_input.setEncoding("utf-8");

console.log("Please input text in command line.");

standard_input.on("data", async data => {
  let expr = data.split(" ")[0];
  switch (expr) {
    case "create_parking_lot":
      await parkingLotController.createParkingLot(data.split(" "));
      break;
    case "park":
      await parkingLotController.allotParkingSlot(data.split(" "));
      break;
    case "leave":
      await parkingLotController.leaveSlot(data.split(" "));
      break;
    case "status":
      break;
    case "registration_numbers_for_cars_with_colour":
      break;
    case "slot_numbers_for_cars_with_colour":
      break;
    case "exit\n":
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
