// server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Sample jokes
const jokes = [
    { id: 1, joke: "Why don't scientists trust atoms? Because they make up everything!" },
    { id: 2, joke: "Why did the scarecrow win an award? Because he was outstanding in his field!" },
    { id: 3, joke: "What do you call fake spaghetti? An impasta!" },
];


app.get('/api/jokes', (req, res) => {
    res.json(jokes);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});