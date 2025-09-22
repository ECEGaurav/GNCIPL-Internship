const express = require('express');
const router = express.Router();
const Event = require('../models/Event');


// Get all events sorted: upcoming first, past last
router.get('/', async (req, res) => {
  try {
    const now = new Date();

    // 1. Upcoming events (endDate >= now) -> sort by startDate ascending
    const upcoming = await Event.find({ endDate: { $gte: now } }).sort({ startDate: 1 });

    // 2. Past events (endDate < now) -> sort by endDate descending
    const past = await Event.find({ endDate: { $lt: now } }).sort({ endDate: -1 });

    // Combine both arrays
    const events = [...upcoming, ...past];

    res.json(events);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

 

// Create event 
router.post('/', async (req, res) => {
  try {
    const { title, description, startDate, endDate, location } = req.body;
    if (!title || !startDate || !endDate) {
      return res.status(400).json({ error: 'title, startDate and endDate are required' });
    }
    const ev = new Event({ title, description, startDate, endDate, location });
    await ev.save();
    res.status(201).json(ev);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// Delete event
router.delete('/:id', async (req,res)=>{
  try{
    const ev = await Event.findByIdAndDelete(req.params.id);
    if(!ev) return res.status(404).json({ error: 'Not found' });
    res.json({ success: true });
  }catch(err){ res.status(500).json({ error: err.message }); }
});

module.exports = router;
