const server = require("./app");

server.listen(process.env.WEB_PORT, () => {
  console.log(`Server is listening on Port:${process.env.WEB_PORT}`);
});
