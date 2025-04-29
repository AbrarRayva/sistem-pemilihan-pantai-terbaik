// Digunakan hanya untuk inisialisasi database SQLite (Set Admin dan Password)
const sequelize = require('./config/database');
const User = require('./models/User');
const Alternatif = require('./models/Alternatif');
const NilaiAlternatif = require('./models/NilaiAlternatif');

async function initializeDatabase() {
    try {
        await sequelize.sync({ force: true }); // force: true untuk inisialisasi awal
        console.log('Database berhasil disinkronkan');

        // Buat user awal
        const adminUser = await User.findOne({ where: { username: 'admin' } });
        if (!adminUser) {
            await User.create({
                username: 'admin',
                password: 'kelompok5' // Sistem login sederhana, tidak perlu hashing
            });
            console.log('User admin berhasil dibuat');
        } else {
            console.log('User admin sudah ada');
        }

    } catch (error) {
        console.error('Gagal menginisialisasi database:', error);
    } finally {
        await sequelize.close();
    }
}

initializeDatabase();