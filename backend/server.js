import express from "express"
import cors from "cors"

const app = express()

//app.use(cors())
//app.use(express.json())

//app.use("/api/")
const PORT = 8080;

app.get("/", (req, res) => {
    res.send("Hello from Node.js app kj\n");
});

app.listen(PORT, function() {
    console.log(`Listening on ${PORT}`);
});

