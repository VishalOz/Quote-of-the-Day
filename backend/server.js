import express from 'express'
import "cors"

const PORT = 3000
const app = express();


app.get('/', (req, res) => {
    res.send("Hto wada hto")
});

app.listen(PORT, () => {
    console.log("Server is running on port 3000")
})

