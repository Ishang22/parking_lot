let setSlotLimit = require("./setSlotLimit");

let ParkingLotDetails = class extends setSlotLimit {
  constructor(vehicleNumber, vehicleColour, SlotLimit) {
    //public variable
    super(SlotLimit);
    this.vehicleNumber = vehicleNumber;
    this.vehicleColour = vehicleColour;
    this.isSlotAlloted = false;
  }
};

module.exports = ParkingLotDetails;
