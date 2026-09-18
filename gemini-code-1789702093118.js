// FORMAT TIPE SOAL:
// "mc" = Pilihan Ganda (A, B, C, D, E)
// "input" = Isian Teks/Angka (Subtes GE, RA, ZR)
// "memory" = Khusus Subtes 9 (Hafalan 3 menit lalu soal)

const IST_DATA = [
  {
    id: "SE",
    name: "Subtes 1: Melengkapi Kalimat (SE)",
    durationSec: 360, // 6 Menit
    type: "mc",
    instruction: "Selesaikan kalimat berikut dengan memilih satu kata yang paling tepat dari 5 opsi yang tersedia.",
    questions: [
      { q: "Seekor kuda selalu mempunyai ...", options: ["A. Kandang", "B. Ladam", "C. Pelana", "D. Kuku", "E. Suri"], key: "D" },
      { q: "Lawan kata dari HARAPAN adalah ...", options: ["A. Duka", "B. Putus Asa", "C. Sengsara", "D. Cinta", "E. Benci"], key: "B" }
      // Lanjutkan soal 3 - 20 di sini...
    ]
  },
  {
    id: "WA",
    name: "Subtes 2: Mencari Kata Berbeda (WA)",
    durationSec: 360, // 6 Menit
    type: "mc",
    instruction: "Carilah SATU kata yang tidak memiliki kesamaan dengan empat kata lainnya.",
    questions: [
      { q: "Kata yang berbeda adalah ...", options: ["A. Meja", "B. Kursi", "C. Burung", "D. Lemari", "E. Tempat Tidur"], key: "C" }
      // Lanjutkan soal 2 - 20 di sini...
    ]
  },
  {
    id: "AN",
    name: "Subtes 3: Analogi Kata (AN)",
    durationSec: 420, // 7 Menit
    type: "mc",
    instruction: "Temukan kata yang melengkapi analogi kata pertama dan kedua.",
    questions: [
      { q: "Hutan : Pohon = Tembok : ?", options: ["A. Batu bata", "B. Rumah", "C. Semen", "D. Putih", "E. Dinding"], key: "A" }
    ]
  },
  {
    id: "GE",
    name: "Subtes 4: Sifat Bersama (GE)",
    durationSec: 480, // 8 Menit
    type: "input", // Isian Teks
    instruction: "Ketik kata yang merangkum kesamaan dari dua kata berikut. (Contoh: Mawar & Melati -> Bunga)",
    questions: [
      { q: "Ayam & Burung Hitam", key: "Burung" }, // Kunci hanya patokan, aslinya dinilai manual (0,1,2)
      { q: "Mata & Telinga", key: "Panca Indera" }
    ]
  },
  {
    id: "RA",
    name: "Subtes 5: Berhitung (RA)",
    durationSec: 600, // 10 Menit
    type: "input", // Isian Angka
    instruction: "Selesaikan soal hitungan matematika berikut.",
    questions: [
      { q: "Jika sebuah pensil harganya Rp 5.000, berapa harga 3 pensil?", key: "15000" }
    ]
  },
  {
    id: "ZR",
    name: "Subtes 6: Deret Angka (ZR)",
    durationSec: 600, // 10 Menit
    type: "input", // Isian Angka
    instruction: "Lanjutkan pola deret angka berikut.",
    questions: [
      { q: "2   4   6   8   10   ?", key: "12" }
    ]
  },
  {
    id: "FA",
    name: "Subtes 7: Potongan Bentuk (FA)",
    durationSec: 420, // 7 Menit
    type: "mc",
    instruction: "Gabungkan potongan gambar dan pilih bentuk utuh yang sesuai.",
    questions: [
      // Kamu upload gambar fa_1.png ke github, lalu masukin namanya ke image:
      { q: "Pilih bentuk yang tepat:", image: "fa_1.png", options: ["A", "B", "C", "D", "E"], key: "A" }
    ]
  },
  {
    id: "WU",
    name: "Subtes 8: Kubus (WU)",
    durationSec: 540, // 9 Menit
    type: "mc",
    instruction: "Cari kubus yang sama dengan posisi yang diputar.",
    questions: [
      { q: "Kubus mana yang sama dengan gambar rujukan?", image: "wu_1.png", options: ["A", "B", "C", "D", "E"], key: "B" }
    ]
  },
  {
    id: "ME",
    name: "Subtes 9: Daya Ingat (ME)",
    durationMemorySec: 180, // 3 Menit Hafalan
    durationSec: 360, // 6 Menit Soal
    type: "memory",
    memoryImage: "me_hafalan.png", // Gambar lembar hafalan kata
    instruction: "Hafalkan daftar kata berikut selama 3 menit. Setelah itu, gambar akan tertutup otomatis.",
    questions: [
      { q: "Kata yang berawalan huruf K adalah sejenis...", options: ["A. Bunga", "B. Binatang", "C. Kesenian", "D. Negara", "E. Perkakas"], key: "B" }
    ]
  }
];