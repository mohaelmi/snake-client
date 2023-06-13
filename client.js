const net = require("net")


const connect = () => {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  })

  conn.setEncoding("utf8")

  conn.on("data", (data) => {
    console.log(`server sent: ${data}`);
  })

  conn.on("connect", () => {
    console.log("connected successfully");
    conn.write("Name: ME")
    
   

  })
  
  conn.setEncoding("utf8");

  return conn
}




module.exports =  {
  connect
}