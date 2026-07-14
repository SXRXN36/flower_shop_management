require("dotenv").config();

const express = require("express");
const cors = require("cors");
const flowerRoutes = require("./routes/flowerRoutes");
const app = express();

app.use(cors());
app.use(express.json());

require("./config/db");

app.get("/", (req, res) => {
    res.json({
        message: "Flower Shop API Working"
    });
});

app.use("/api/flowers", flowerRoutes);

app.listen(process.env.PORT, () => {
    console.log("Server Running");
});