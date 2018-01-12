function chirp(n) {


  if (n === 0) {
    return "";
  }
  return 'chirp ' + chirp(--n)
}

$(document).ready(function () {
  $("#result").html(chirp(3));
});


// var result = '';
// var string = 'chirp'
// if (n === 0) {
//   return '';
// }
//  chirp(n--)
//   for (var i = 1; i <= num; i++) {
//     result += chirp;
// }