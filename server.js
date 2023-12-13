const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;
const dataURLtoFile = require('./utils/utils');
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.set("view engine", "ejs");


app.get("/", (req, res) => {
    res.render("index", { title: 'EJS Template'});
})

app.post('/upload', (req, res) => {
  const jsonParsed = JSON.parse(req.body.jsonData);
  dataURLtoFile(jsonParsed.thumbnail);
  res.json({ success: true, message: 'File uploaded successfully' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});