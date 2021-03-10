const router = require('express').Router();
const EntrepriseModel = require('../db/schema/entrepriseSchema');

/**
 * Chercher toutes les entreprises
 */
 router.get('/', async (req, res) => {
    try {
        const entreprises = await EntrepriseModel.getEntreprises();
        res.json(JSON.stringify(entreprises));
    } catch (err) {
        res.send(err);
    }
})

/**
 * Chercher une entreprise précise
 */
router.get('/:id', async (req, res) => {
    try {
        const entreprise = await EntrepriseModel.findEntreprise(req.params.id);
        res.json(JSON.stringify(entreprise));
    } catch (err) {
        res.send(err);
    }
})

/**
 * Ajouter une entreprise
 */
router.post('/', async (req, res) => {
    try {
        const entreprise = await EntrepriseModel.addEntreprise(req.body);
        res.json(JSON.stringify(entreprise));
    } catch (err) {
        res.send(err);
    }
})

/**
 * Modifier une entreprise
 */
router.put('/:id', async (req, res) => {
    try {
        const entreprise = await EntrepriseModel.updateEntreprise(req.params.id, req.body);
        res.json(JSON.stringify(entreprise));
    } catch (err) {
        res.send(err);
    }
})

/**
 * Supprimer une entreprise
 */
router.delete('/:id', async (req, res) => {
    try {
        const entreprise = await EntrepriseModel.deleteEntreprise(req.params.id);
        res.json(JSON.stringify(entreprise));
    } catch (err) {
        res.send(err);
    }
})

module.exports = router;