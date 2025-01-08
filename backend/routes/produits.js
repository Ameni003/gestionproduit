const express = require('express');
const router = express.Router();
const Produit = require('../models/produit');

// GET /api/produits
router.get('/', async (req, res) => {
  try {
    const produits = await Produit.find();
    res.json(produits);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /api/produits/:id
router.get('/:id', async (req, res) => {
  try {
    const produit = await Produit.findById(req.params.id);
    if (!produit) return res.status(404).json({ message: 'Produit non trouvé' });
    res.json(produit);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/produits
router.post('/', async (req, res) => {
  const produit = new Produit({
    nom: req.body.nom,
    prix: req.body.prix,
    categorie: req.body.categorie,
  });
  try {
    const nouveauProduit = await produit.save();
    res.status(201).json(nouveauProduit);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT /api/produits/:id
router.put('/:id', async (req, res) => {
  try {
    const produit = await Produit.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!produit) return res.status(404).json({ message: 'Produit non trouvé' });
    res.json(produit);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE /api/produits/:id
router.delete('/:id', async (req, res) => {
  try {
    const produit = await Produit.findByIdAndDelete(req.params.id);
    if (!produit) return res.status(404).json({ message: 'Produit non trouvé' });
    res.json({ message: 'Produit supprimé' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;