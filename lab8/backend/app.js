const express = require('express');
const cors = require('cors');
const authRouter = require('./routes/authRouter');
const cookieParser = require('cookie-parser');
const authChecker = require('./middlewares/auth');
const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());
app.use(cookieParser());
require('dotenv').config();

app.use(authChecker);
app.use('/auth', authRouter);

app.get('/', (req, res) => {
    res.status(200);
    res.send('Welcome to root URL of Server');
});

app.listen(PORT, (error) => {
    if (!error)
        console.log(
            'Server is Successfully Running, and App is listening on port ' +
                PORT
        );
    else console.log("Error occurred, server can't start", error);
});
