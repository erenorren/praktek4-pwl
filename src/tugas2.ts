interface Buku {
    judul: string;
    pengarang: string;
    tahunTerbit: number;
    tersedia: boolean;
}

const bukuFavorit: Buku = {
    judul: "Belajar TypeScript Itu Seru",
    pengarang: "Admin Praktikum",
    tahunTerbit: 2024,
    tersedia: true
};

console.log("Detail Buku:", bukuFavorit);