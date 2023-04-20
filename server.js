const express = require('express');
const router = require('./router.js');
const database = require('./backend/controller/sequelizeController.js');
const app = express();
const port = 3000;



app.use(router);

app.listen(port, () => console.log(`App listening on port ${port}!`))