require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const appointmentRoutes = require('./routes/appointmentRoutes');
const cors = require('cors');
const queryRoutes = require('./routes/queries');
const bodyParser = require('body-parser');

connectDB();
const app = express();
app.use(bodyParser.json());

app.use(cors());
app.use(express.json());
app.use('/api/appointments', appointmentRoutes);
app.use('/api/queries', queryRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
