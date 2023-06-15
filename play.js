const { connect } = require("./client");
const { setupInput } = require("./input");


console.log("connecting ...");


//called connect fuction and passed setupInput that holds user inputs 
setupInput(connect())
