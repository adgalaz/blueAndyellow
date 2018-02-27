var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 4200));
app.use(express.static(__dirname + '/'));

app.listen(app.get('port'), function() {
  console.log('Servidor corriendo en ', app.get('port'));
});