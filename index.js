const express = require("express");

const logger = require("./Middleware/logger");
const userRouter = require("./Router/userRouter");

const app = express();

app.use(express.json());

app.use(logger);

app.use("/", userRouter);

const PORT = 3000;

app.listen(PORT, () => {
 console.log(`Server running at http://localhost:${PORT}`);
});


module.exports = app;
