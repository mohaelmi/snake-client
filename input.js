const { controlKeys } = require("./constants")
let connection; 
const setupInput = (conn) => {
  connection = conn
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);

  return stdin;
};



const handleUserInput = function (key) {
  
 
  if(controlKeys[key]){ 
    connection.write(controlKeys[key])
  }
  connection.write("Say: Heey")
  if (key === '\u0003') {
    process.exit();
  }
};

module.exports = {
  setupInput
}
