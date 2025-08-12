const express = require("express");
const router = require("./routes/groceryRoute");

const app = express();
const PORT = 3000;

app.use(express.json());
app.get("/", (req, res) => {
    res.status(200).send({message: "I am here!"});
});

app.use(router);
app.listen(PORT, () => {
    console.log(`Server running in port: http://localhost:${PORT}`);
});
