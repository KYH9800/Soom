const express = require('express');
const app = express();

const handleListen = () => console.log(`Listening in http://localhost:3000/`);
app.listen(3000, handleListen);
