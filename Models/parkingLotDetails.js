let setSlotLimit = require("./setSlotLimit");

let ParkingLotDetails = class extends setSlotLimit {
  constructor(vehicleNumber, vehicleColour, SlotLimit, initialLimit) {
    //public variable
    super(SlotLimit, initialLimit);
    this.vehicleNumber = vehicleNumber;
    this.vehicleColour = vehicleColour;
    this.isSlotAlloted = false;
  }
};

module.exports = ParkingLotDetails;
