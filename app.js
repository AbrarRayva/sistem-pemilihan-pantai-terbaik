// Imports
const express = require('express');
const session = require('express-session');
const routes = require('./routes');
const sequelize = require('./config/database');
const app = express();

// Middleware
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}));
app.use(routes);

// Sync Database
sequelize.sync({ alter: true })
    .then(() => {
        console.log('Database disinkronkan');
    })
    .catch(err => {
        console.error('Gagal menyinkronkan database:', err);
        process.exit(1);
    });

// Run Express
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
});