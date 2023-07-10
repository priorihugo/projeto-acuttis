import CalcRoute from "./routes/CalcRoute.js";
import express from "express";
import cors from "cors";

const PORT = process.env.PORT || 8888;
const app = express();

app.use(cors());

app.get('/' , (req , res) =>{
    res.send('hello world')
})

app.use("/calcula", CalcRoute);

app.listen(PORT);
