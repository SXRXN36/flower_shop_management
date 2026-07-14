require("dotenv").config();

const express = require("express");
const cors = require("cors");

const db = require("./config/db");
const flowerRoutes = require("./routes/flowerRoutes");
const customerRoutes = require("./routes/customerRoutes");
const orderRoutes = require("./routes/orderRoutes");

const app = express();

app.use(cors());
app.use(express.json());


// Test API
app.get("/", (req, res) => {
    res.json({
        message: "Flower Shop API Working"
    });
});


// Test Database Connection
app.get("/test-db", async (req, res) => {
    try {
        const [result] = await db.query(
            "SELECT 1 AS connected"
        );

        res.json({
            message: "Database Connected",
            result
        });

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
});


// Flower API
app.use("/api/flowers", flowerRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/orders",orderRoutes);

// Start Server
app.listen(process.env.PORT || 3000, () => {
    console.log(
        `Server Running on port ${process.env.PORT || 3000}`
    );
});