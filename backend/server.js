require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const produitRoutes = require('./routes/produits'); // Vérifiez ce chemin

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/produits', produitRoutes);

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connecté'))
    .catch(err => console.error('Erreur de connexion à MongoDB :', err));

// Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
