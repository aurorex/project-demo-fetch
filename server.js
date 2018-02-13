// llamamos a la libreria express
var express = require('express');
var app = express();
// elegimos el puerto en donde va a correr nuestro servidor
const port = process.env.PORT || 3001;
// le pasamos como argumento el puerto anterior y dentro del callback colocamos el mensaje que aparecerá en la consola
app.listen(port, () => {
  console.log('Server running on port ' + port + '!');
});
app.use(express.static(__dirname + '/public'));


