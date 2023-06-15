const net = require("net");
const { IP, PORT } = require("./constants");

const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT

  });

  conn.on("data", (data) => {
    console.log(`server sent: ${data}`);
  });

  conn.on("connect", () => {
    console.log("connected successfully");
    conn.write("Name: ME");



  });

  conn.setEncoding("utf8");

  return conn;
};




module.exports = {
  connect
};