const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

const upload = require('./upload');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  
})

app.post('/upload', upload.single('file'), (req, res) => {
    console.log('received')
    res.json({ message: 'File uploaded successfully!' });
    
})

app.listen(port, () => {
    console.log('Server is UP and RUNNING')
})