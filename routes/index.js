const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');
// const kriteriaController = require('../controllers/kriteriaController');
// const nilaiKriteriaController = require('../controllers/nilaiKriteriaController');
// const alternatifController = require('../controllers/alternatifController');
// const analisisController = require('../controllers/analisisController');

router.get('/', authController.getLogin);
router.post('/login', authController.postLogin);
router.get('/logout', authController.logout);
// router.get('/kriteria-bobot', kriteriaController.getKriteriaBobot);
// router.get('/nilai-kriteria', nilaiKriteriaController.getNilaiKriteriaBobot);
// router.get('/alternatif', alternatifController.getAlternatif);
// router.post('/alternatif', alternatifController.postAlternatif);
// router.get('/alternatif/edit/:id', alternatifController.getEditAlternatif);
// router.post('/alternatif/edit/:id', alternatifController.postEditAlternatif);
// router.post('/alternatif/nilai', alternatifController.postNilai);
// router.delete('/alternatif/:id', alternatifController.deleteAlternatif);
// router.get('/analisis', analisisController.getAnalisis);
// router.get('/hasil-analisis', analisisController.getHasilAnalisis);

module.exports = router;