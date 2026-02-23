require("dotenv").config()
const express = require("express");
const app = express();
const dbConnection = require("./db");
const cors = require("cors");

const UserModel=require("./models/User.js")

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Test route
app.get("/", (req, res) => {
    res.send("Server is running successfully 🚀");
});

// Login route
app.post("/login", async (req, res) => {
    try {
        const {name,password}=req.body;
        const user=await UserModel({name,password})
        const res=await user.save()
        res.json({
            message: "Login API called successfully",
            data: res
        });
    } catch (error) {
        
    }
});

// Start server
app.listen(3000, async () => {
    await dbConnection();
    console.log("Server is running on http://localhost:3000");
});