let setSlotLimit = require("./setSlotLimit");

let ParkingLotDetails = class extends setSlotLimit {
  constructor(SlotLimit, initialLimit, carDetails) {
    super(SlotLimit, initialLimit, carDetails);
  }
};

module.exports = ParkingLotDetails;
