const express = require('express');
const app = express();
const PORT = 5000;
const allGroupRouter = require('./Routes/routes.group')
const MSSVRouter = require('./Routes/routes.19110380')
const messageRouter = require('./Routes/routes.message')

app.use(express.json());

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
})

app.use('/', allGroupRouter);
app.use('/19110380', MSSVRouter);
app.use('/message', messageRouter);

app.listen(PORT)