import mongoose from "mongoose";
const URI = process.env.MONGO_URI
mongoose.connect(URI)
mongoose.connection.on("error", err => {
    console.error(`Error en la conexion de MongoDB: ${err.message}`)
})
mongoose.connection.on("connected", () => console.log("Conexion exitosa a MongoDB"))

export default () => {
    return mongoose.connection;
}