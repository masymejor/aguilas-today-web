const express = require('express');
const router = express.Router();

// Mock data for the sake of example
let promoters = [];

// GET all promoters
router.get('/promoters', (req, res) => {
    res.json(promoters);
});

// POST create promoter
router.post('/promoters', (req, res) => {
    const newPromoter = req.body;
    promoters.push(newPromoter);
    res.status(201).json(newPromoter);
});

// PUT verify promoter by ID
router.put('/promoters/:id', (req, res) => {
    const { id } = req.params;
    const promoter = promoters.find(p => p.id === id);
    if (!promoter) {
        return res.status(404).send('Promoter not found');
    }
    promoter.verified = true;
    res.json(promoter);
});

module.exports = router;