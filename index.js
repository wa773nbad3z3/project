const express = require('express');
const app = express();
const port = 3000;

app.set('views', 'views');
app.set('vie engine', 'hbs');
app.use(express.static('public'));

app.get('/',function (request, response){
    response.render('home',{name: 'John Doe'});
});

app.listen(port);
console.log('server is listerning on port 3000');