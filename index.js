let standard_input = process.stdin;

standard_input.setEncoding("utf-8");

console.log("Please input text in command line.");

standard_input.on("data", function(data) {
  if (data === "exit\n") {
    process.exit();
  } else if (data.includes("create_parking_lot")) {
    console.log("=====1=================");
  } else if (data.includes("park")) {
    console.log("=====2=================");
  } else if (data.includes("leave")) {
    console.log("=====3=================");
  } else if (data.includes("status")) {
    console.log("=====4=================");
  } else if (data.includes("registration_numbers_for_cars_with_colour")) {
    console.log("=====5=================");
  } else if (data.includes("slot_numbers_for_cars_with_colour")) {
    console.log("=====6=================");
  } else {
    console.log("User Input Data : " + data);
  }
});
