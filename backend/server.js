import express from 'express'
import { cors } from 'cors'


const PORT = 5000
const app = express();
app.use(cors())

const quotes = [
    "Life is what happens when you're busy making other plans. – John Lennon",
  "The greatest glory in living lies not in never falling, but in rising every time we fall. – Nelson Mandela",
  "Your time is limited, don't waste it living someone else's life. – Steve Jobs",
  "If you look at what you have in life, you'll always have more. – Oprah Winfrey",
  "The purpose of our lives is to be happy. – Dalai Lama"
];

app.get('/api/quote', (req, res) => {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    res.json({quote: quotes[randomIndex]});
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

