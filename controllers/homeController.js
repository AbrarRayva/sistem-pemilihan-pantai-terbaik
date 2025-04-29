const Alternatif = require('../models/Alternatif');

exports.getJumlahAlternatif = async (req, res) => {
    if(!req.session.user) {
        return res.redirect('/');
    }
    
    try{
        const jumlahAlternatif = await Alternatif.count();
        res.render('home', { jumlahAlternatif })
    } catch (error) {
        console.error('Error mengambil alternatif:', error);
    }
};