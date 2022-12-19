import express from "express";
import cors from "cors";




const app = express();
//middlewares

app.use(express.json());
app.use(cors());

app.post('/api/users/:id/update', (req, res) => {
    setTimeout(() => {
        res.send(req.body);
    }, 2000);
})



app.listen(8000, () => {
  console.log("conected to the backend!");
});
