const Thought = require('./models/Thought');

// Controller functions

// Create a new thought
exports.createThought = async (req, res) => {
  try {
    const newThought = await Thought.create(req.body);
    res.status(201).json(newThought);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Fetch all thoughts
exports.getAllThoughts = async (req, res) => {
  try {
    const thoughts = await Thought.find();
    res.json(thoughts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Fetch thoughts of a specific user
exports.getUserThoughts = async (req, res) => {
  try {
    const thoughts = await Thought.find({ author: req.params.userId });
    res.json(thoughts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a thought
exports.updateThought = async (req, res) => {
  try {
    const updatedThought = await Thought.findByIdAndUpdate(req.params.thoughtId, req.body, { new: true });
    if (!updatedThought) {
      return res.status(404).json({ error: 'Thought not found' });
    }
    res.json(updatedThought);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a thought
exports.deleteThought = async (req, res) => {
  try {
    const deletedThought = await Thought.findByIdAndDelete(req.params.thoughtId);
    if (!deletedThought) {
      return res.status(404).json({ error: 'Thought not found' });
    }
    res.json({ message: 'Thought deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
