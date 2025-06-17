import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config()
const app = express();

app.use(cors())
app.use(express.json())

const PORT = process.env.PORT ?? 3000;
app.get("/",(req,res)=>{
    res.send("root route")
})
// process.exit(1);

app.listen(PORT,()=>{
     console.log(`The server is running on port ${PORT}`);
     
}
    )