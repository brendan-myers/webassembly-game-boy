const express = require('express');
const app = express();
app.use(express.static('../dist'));

app.get('/', (req, res) =>
  res.redirect('/dist')
);

app.listen(3000, () =>
  console.log('Game Boy server running on port 3000!')
);
