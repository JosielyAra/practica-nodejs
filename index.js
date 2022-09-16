const fs = require("fs");
/*


fs.writeFile('./texto.txt', 'linea uno', function(err){
    if(err){
        console.log(err);
    }
    console.log('archivo creado');
});

console.log('ult lin de cod');
*/

fs.readFile("./texto.txt", function (err, data) {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});
