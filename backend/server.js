const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const eventosRoutes = require('./routes/eventos');
const promotoresRoutes = require('./routes/promotores');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware configuration
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route imports
app.use('/api/auth', authRoutes);
app.use('/api/eventos', eventosRoutes);
app.use('/api/promotores', promotoresRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
