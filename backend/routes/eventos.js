const express = require('express');
const router = express.Router();

// Mock authentication middleware
const authMiddleware = (req, res, next) => {
    // Implement authentication logic here
    next();
};

// Mock data storage (replace with a proper database call)
let events = [];

// GET all events
router.get('/', (req, res) => {
    res.json(events);
});

// GET event by ID
router.get('/:id', (req, res) => {
    const event = events.find(e => e.id === parseInt(req.params.id));
    if (!event) return res.status(404).send('Event not found');
    res.json(event);
});

// POST create an event
router.post('/', authMiddleware, (req, res) => {
    const newEvent = {
        id: events.length + 1,
        ...req.body
    };
    events.push(newEvent);
    res.status(201).json(newEvent);
});

// PUT update an event
router.put('/:id', authMiddleware, (req, res) => {
    const event = events.find(e => e.id === parseInt(req.params.id));
    if (!event) return res.status(404).send('Event not found');
    Object.assign(event, req.body);
    res.json(event);
});

// DELETE an event
router.delete('/:id', authMiddleware, (req, res) => {
    const eventIndex = events.findIndex(e => e.id === parseInt(req.params.id));
    if (eventIndex === -1) return res.status(404).send('Event not found');
    events.splice(eventIndex, 1);
    res.status(204).send();
});

module.exports = router;