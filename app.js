const express = require('express');
const app = express();
const http = require('http').createServer(app);
const apisRoute = require('./app/api/apis');
const route = require('./app/routes/route');

app.use('/api', apisRoute);
app.use('/route', route);

http.listen(3000 ,() => {
    // console.log(`link: http://localhost:${app.get('port')}/api/... => Apis of DoraemonCare`);
    console.log('server was started!');
});