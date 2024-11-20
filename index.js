const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const router = require('./routes/router');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))
app.use("/", router)

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});