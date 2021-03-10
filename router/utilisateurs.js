const router = require('express').Router();
const UtilisateurModel = require('../db/schema/utilisateurSchema');

/**
 * Chercher tous les utilisateurs
 */
router.get('/', async (req, res) => {
    try {
        const utilisateurs = await UtilisateurModel.getUtilisateurs();
        res.send(JSON.stringify(utilisateurs));
    } catch (err) {
        res.status(404).send(err);
    }
})

/**
 * Chercher un utilisateur précis
 */
router.get('/:id', async (req, res) => {
    try {
        const utilisateur = await UtilisateurModel.findUtilisateur(req.params.id);
        res.send(JSON.stringify(utilisateur));
    } catch (err) {
        res.status(404).send(err);
    }
})

/**
 * Ajouter un utilisateur
 */
router.post('/', async (req, res) => {
    try {
        const utilisateur = await UtilisateurModel.addUtilisateur(req.body);
        res.send(JSON.stringify(utilisateur));
    } catch (err) {
        res.status(404).send(err);
    }
})

/**
 * Modifier un utilisateur
 */
router.put('/:id', async (req, res) => {
    try {
        const utilisateur = await UtilisateurModel.updateUtilisateur(req.params.id, req.body);
        res.send(JSON.stringify(utilisateur));
    } catch (err) {
        res.status(404).send(err);
    }
})

/**
 * Supprimer un utilisateur
 */
router.delete('/:id', async (req, res) => {
    try {
        const utilisateur = await UtilisateurModel.deleteUtilisateur(req.params.id);
        res.send(JSON.stringify(utilisateur));
    } catch (err) {
        res.status(404).send(err);
    }
})

module.exports = router;