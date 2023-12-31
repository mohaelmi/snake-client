const { controlKeys } = require("./constants");
let connection;

//function conn object and uses standard input to recieve user inputs
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);

  return stdin;
};


//sends userinput to the server uses connection object
const handleUserInput = function(key) {

  if (controlKeys[key]) {
    connection.write(controlKeys[key]);
  }
  connection.write("Say: Hello!");
  if (key === '\u0003') {
    process.exit();
  }
};

module.exports = {
  setupInput
};
