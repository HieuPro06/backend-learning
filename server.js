// const http = require("http");
// const hostname = "localhost";
// const port = 7777;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "text/plain");
//     res.end("Hello World");
// });

// server.listen(port, hostname, () => {
//     console.log(`Server is running at http://${hostname}:${port}`);
// })
// #15
const express = require("express");
const app = express();
const port = 7878;

app.get("/", (req, res) => {
    res.send("Server backend");
})
app.get("/love", (req, res) => {
    res.send("First love , first date")
})
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})