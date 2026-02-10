const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());

// Read users from file
let users = JSON.parse(fs.readFileSync("users.json"));

// Login API
app.post("/login", (req, res) => {
    const {username, password} = req.body;

    let user = users.find(u => u.username === username && u.password === password);

    if (user) {
        res.json({success: true});
    } else {
        res.json({success: false});
    }
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
