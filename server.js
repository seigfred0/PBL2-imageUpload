const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

const upload = require('./upload');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploadedFiles', express.static(path.join(__dirname, 'uploadedFiles')));

app.get('/', (req, res) => {
  
})

app.post('/upload', upload.single('file'), (req, res) => {
    console.log(req.file)
    const imageUrl = `http://localhost:3000/${req.file.path}`;
    console.log(imageUrl)
    res.json({ imageUrl });
    
})

app.listen(port, () => {
    console.log('Server is UP and RUNNING')
})