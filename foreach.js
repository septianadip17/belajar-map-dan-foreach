// ForEach

var angka = [1,2,3,4,5,6,7,8];
var nama = ['Sandhika', 'Galih', 'Nofa']
// for (var i = 0; i < angka.length; i++) {
//   console.log(angka[i]);
// }
// angka.forEach(function(e){
//   console.log(e);
// });
nama.forEach(function(e, i){
  console.log('Mahasiswa ke-' + (i + 1) + ' adalah : ' + e);
})
