import express from "express";
import crudRouter from "./routes/crudRoutes.js";
import userRouter from "./routes/userRoutes.js";
import morgan from "morgan";
import configMongoDB from "./config/mongoDB.js";

const app = express();
const PORT = process.env.PORT;

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
configMongoDB();
app.use("/api/crud", crudRouter);
app.use("/api/user", userRouter);

app.listen(PORT, () => {
    console.log("Server started on port", PORT);
});