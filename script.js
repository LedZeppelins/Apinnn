let Jumkelas = 7
let berfungsi = 3
let diperbaiki = 4
let i  = 0

while (i <= Jumkelas){
    if(i <= berfungsi){
        document.write(`Ruang kelas ${i} berfungsi <br>`);
        
    } else if (i == diperbaiki){
        document.write (`Ruang kelas ${i} sedang diperbaiki <br>`)
    }
    else document.write (`Ruang kelas ${i} tidak berfungsi <br>`);
    i++;
}

// let i = prompt(`Masukkan Nilai Anda: `)
// if(i >= 85){
//     document.write(`A`)
// }else if(i >= 70){
//     document.write(`B`)
// }else if(i >= 55){
//     document.write(`C`)
// }else {
//     document.write(`D`)
// }