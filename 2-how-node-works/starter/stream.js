const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  //   fs.readFile("test-file.txt", (err, data) => {
  //     if (err) console.log("error");
  //     res.end(data);
  //   });
  //   --------
  //   Stream
  //     const readable = fs.createReadStream("test-file.txt");
  //     readable.on("data", (chunk) => {
  //       res.write(chunk);
  //     });
  //     readable.on("end", () => {
  //       res.end();
  //     });
  //     readable.on("error", (err) => {
  //       console.log("error", err);
  //       res.statusCode = 500;
  //       res.end("File not found!");
  //     });

  //   Pipe
  const readable = fs.createReadStream("test-file.txt");
  readable.pipe(res);
});

server.listen(8000, "127.0.0.1", () => {
  console.log("ok, listening");
});
