require('./config');
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;
require('./db/database');

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use('/api/utilisateur', require('./router/utilisateurs'));
app.use('/api/stage', require('./router/stages'));
app.use('/api/activite', require('./router/secteurActivite'));
app.use('/api/demandes', require('./router/demandeDeStage'));
app.use('/api/entreprise', require('./router/entreprise'));
app.use('/api/region', require('./router/region'));

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});