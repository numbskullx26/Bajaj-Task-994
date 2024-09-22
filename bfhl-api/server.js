const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());

app.post('/bfhl', (req, res) => {
  const data = req.body.data || [];
  const numbers = data.filter(item => /^\d+$/.test(item));
  const alphabets = data.filter(item => /^[a-zA-Z]$/.test(item));
  const highest_alphabet = alphabets.length > 0 ? alphabets.sort()[alphabets.length - 1] : null;

  res.json({
    is_success: true,
    user_id: "john_doe_17091999",
    email: "john@xyz.com",
    roll_number: "ABCD123",
    numbers,
    alphabets,
    highest_alphabet: highest_alphabet ? [highest_alphabet] : []
  });
});


app.get('/bfhl', (req, res) => {
  res.status(200).json({
    operation_code: 1
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
