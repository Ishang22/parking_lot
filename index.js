// let parkingLot = require("./Models/index").parkingLotDetails;
// let parkingLot1 = require("./Models/index").setSlotLimit;
// console.log("=====parkingLot====parkingLot===",parkingLot);
// let parkingLot11 = new parkingLot1(10);
// console.log(parkingLot11, parkingLot1.SlotLimit);
// let newcar = new parkingLot(1, "RED", parkingLot1.SlotLimit - 1);
// console.log(newcar, parkingLot1.SlotLimit);
//console.log(newcar);

let parkingLotController = require("./Controllers/index").parkingLotController;
let standard_input = process.stdin;

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
      break;
    case "status":
      break;
    case "registration_numbers_for_cars_with_colour":
      break;
    case "slot_numbers_for_cars_with_colour":
      break;
    case "exit\n":
      process.exit();
      break;
    default:
      console.log("invalid input");
  }
});
