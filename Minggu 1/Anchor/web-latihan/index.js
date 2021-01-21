// //tipe data
// //number (angka)
// 1
// 2

// //string (tulisan)
// "hello world"

// //bolean
// true
// false

// //null (tidak ada data didalam nya)
// null

// //variable 
// var nama = "isi variable"

// //print data
// console.log('hello world')

// // IF ElSE
// // if (pernyataan) {
// //     'perlakuan kondisi benar'
// // }
// // else {
// //     'perlakuan kondisi salah'
// // }
// if (8 > 9) {
//     console.log('benar')
// }
// else {
//     console.log('salah 8>9')
// }

let athleteFinalPosition = 'first place' || 'a' || 'b';

switch (athleteFinalPosition) {

    case 'first place' || 'a' || 'b':
        console.log('You get the bronze medal!');
        break;
    case 'first place':
        console.log('You get the gold medal!');
        break;
    case 'first place' || 'a':
        console.log('You get the silver medal!');
        break;


    default:
        console.log('No medal awarded.');
        break;

}