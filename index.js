const express = require("express");
const studentRouter = require("./studentRouter");
const teacherRouter = require("./teacherRouter");
const app = express();

app.use("/students", studentRouter);
app.use("/teachers", teacherRouter);

const port = 4000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
