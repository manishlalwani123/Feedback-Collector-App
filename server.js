const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());

// 🔗 Connect to local MongoDB
mongoose.connect('mongodb://localhost:27017/feedbackdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("MongoDB connection error:", err));

// 🎯 Feedback Schema
const feedbackSchema = new mongoose.Schema({
  name: String,
  message: String,
  date: { type: Date, default: Date.now }
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

// ➕ Save feedback
app.post('/feedback', async (req, res) => {
  const { name, message } = req.body;
  const fb = new Feedback({ name, message });
  await fb.save();
  const allFeedbacks = await Feedback.find().sort({ date: -1 });
  res.json(allFeedbacks);
});

// 📤 Get all feedback
app.get('/feedback', async (req, res) => {
  const feedbacks = await Feedback.find().sort({ date: -1 });
  res.json(feedbacks);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
