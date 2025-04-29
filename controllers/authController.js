const User = require('../models/User');

exports.getLogin = (req, res) => {
    if (req.session.user) {
        return res.redirect('/home');
    }
    res.render('login', { error: null });
};

exports.postLogin = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ where: { username, password } });
        if (user) {
            req.session.user = user;
            res.redirect('/home');
        } else {
            res.render('login', { error: 'Username atau password salah' });
        }
    } catch (error) {
        res.render('login', { error: 'Terjadi kesalahan' });
    }
};

exports.logout = (req, res) => {
    req.session.destroy();
    res.redirect('/');
};