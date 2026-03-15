class Lingkaran {
    jariJari: number;

    constructor(r: number) {
        this.jariJari = r;
    }

    hitungLuas(): number {
        return Math.PI * this.jariJari * this.jariJari;
    }
}

const bulat = new Lingkaran(7);
console.log(`Luas lingkaran dengan jari-jari 7 adalah: ${bulat.hitungLuas().toFixed(2)}`);