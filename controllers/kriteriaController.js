const kriteria = [
    { kode: 'C1', nama: 'Fasilitas yang Lengkap', bobot: 4, tipe: 'benefit'},
    { kode: 'C2', nama: 'Keamanan Laut dan Kondisi Ombak', bobot: 1, tipe: 'benefit'},
    { kode: 'C3', nama: 'Kenyamanan Tinggi', bobot: 3, tipe: 'benefit'},
    { kode: 'C4', nama: 'Aksesibilitas yang Baik', bobot: 2, tipe: 'benefit'},
    { kode: 'C5', nama: 'Kebersihan yang Terjaga', bobot: 5, tipe: 'benefit'}
];

// const totalBobot = kriteria.reduce((sum, k) => sum + k.bobot, 0);
// const kriteriaNormalisasi = kriteria.map(k => ({
//     ...k,
//     bobot: k.bobot / totalBobot
// }));

const subKriteria = [
    {
        kode: 'C1',
        penilaian:
        [
            {
                nilai: 1,
                deskripsi: 'Terdapat kamar Mandi/Toilet'
            },
            {
                nilai: 1,
                deskripsi: 'Terdapat tempat sampah'
            },
            {
                nilai: 1,
                deskripsi: 'Adanya jalur pejalan kaki'
            },
            {
                nilai: 1,
                deskripsi: 'Terdapat tempat parkir'
            },
            {
                nilai: 1,
                deskripsi: 'Terdapat tempat ibadah'
            },
        ],
        penjelasan: '(Masing-masing sub-fasilitas memiliki bobot 1; total maksimal 5)'
    },
    {
        kode: 'C2',
        penilaian:
        [
            {
                nilai: 1,
                deskripsi: 'Ombak tenang dan aman untuk anak-anak'
            },
            {
                nilai: 1,
                deskripsi: 'Kehadiran penjaga pantai aktif'
            },
            {
                nilai: 1,
                deskripsi: 'Tersedianya tanda peringatan bahaya laut'
            },
            {
                nilai: 1,
                deskripsi: 'Tersedia fasilitas penyelamatan (pelampung, perahu penyelamat, dll)'
            },
            {
                nilai: 1,
                deskripsi: 'Fasilitas penitipan barang berharga'
            },
        ],
        penjelasan: '(Masing-masing sub-fasilitas memiliki bobot 1; total maksimal 5)'
    },
    {
        kode: 'C3',
        penilaian:
        [
            {
                nilai: 1,
                deskripsi: 'Tidak ada hewan liar berbahaya atau mengganggu'
            },
            {
                nilai: 1,
                deskripsi: 'Bebas dari aktivitas pengamen dan pungutan liar'
            },
            {
                nilai: 1,
                deskripsi: 'Akses mudah untuk parkir kendaraan'
            },
            {
                nilai: 1,
                deskripsi: 'Ketersediaan fasilitas untuk membersihkan diri dan barang'
            },
            {
                nilai: 1,
                deskripsi: 'Sikap ramah masyarakat/penjual sekitar'
            },
        ],
        penjelasan: '(Masing-masing sub-fasilitas memiliki bobot 1; total maksimal 5)'
    },
    {
        kode: 'C4',
        penilaian:
        [
            {
                nilai: 1,
                deskripsi: 'Akses mudah untuk kendaraan roda dua dan empat'
            },
            {
                nilai: 1,
                deskripsi: 'Lokasi dekat tempat makan'
            },
            {
                nilai: 1,
                deskripsi: 'Lokasi dekat tempat ibadah'
            },
            {
                nilai: 1,
                deskripsi: 'Lokasi dekat pusat kota'
            },
            {
                nilai: 1,
                deskripsi: 'Dekat dengan sarana transportasi umum (halte, terminal)'
            },
        ],
        penjelasan: '(Masing-masing sub-fasilitas memiliki bobot 1; total maksimal 5)'
    },
    {
        kode: 'C5',
        penilaian:
        [
            {
                nilai: 1,
                deskripsi: 'Kebersihan dari sampah organik (kelapa, daun-daunan, kayu)'
            },
            {
                nilai: 1,
                deskripsi: 'Kebersihan dari sampah anorganik (plastik, bungkus makanan, kertas, kain)'
            },
            {
                nilai: 1,
                deskripsi: 'Bebas dari kotoran hewan'
            },
            {
                nilai: 1,
                deskripsi: 'Fasilitas umum terawat'
            },
            {
                nilai: 1,
                deskripsi: 'Kebersihan air laut di sekitar pantai'
            },
        ],
        penjelasan: '(Masing-masing sub-fasilitas memiliki bobot 1; total maksimal 5)'
    }
];


exports.getKriteria = (req, res) => {
    // if (!req.session.user) {
    //     return res.redirect('/');
    // }
    res.render('kriteria', { kriteria, subKriteria });
};