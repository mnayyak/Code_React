let express = require('express');

let app = new express();

app.use(express.static('public'));

app.listen(3000, () => {
    console.log('Server is running in port 3000');
})

