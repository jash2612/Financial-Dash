const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

const stockSchema = new mongoose.Schema({
  time: Date,
  price: Number,
});
const Stock = mongoose.model('Stock', stockSchema);

app.get('/api/stocks', async (req, res) => {
  try {
    const stocks = await Stock.find().sort({ time: -1 }).limit(50);
    res.json(stocks);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

setInterval(async () => {
  const price = Math.random() * 1000;
  const stock = new Stock({ time: new Date(), price });
  await stock.save();
}, 5000);

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});
