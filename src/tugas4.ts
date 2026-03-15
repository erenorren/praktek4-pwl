const sapaan = (param: string | number): string => {
    if (typeof param === "string") {
        return `Halo, ${param}`;
    } else {
        return `Umur: ${param} tahun`;
    }
};

console.log(sapaan("Andi")); 
console.log(sapaan(25));       