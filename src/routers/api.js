// Configurar  Rutas 

const { Router } = require('express')
const app = Router()



const lists = require('../controllers/lists/lists')
const cards = require('../controllers/cards/cards')

// ************Lists****************

// Retrieve all Lists
app.get('/lists', lists.index);
// Retrieve a single List by Id
app.get('/lists/:id', lists.find);
// Create a new List
app.post('/lists', lists.create);
// Update a List with Id
app.put('/lists/:id', lists.update);
// Delete a List with Id
app.delete('/lists/:id', lists.delete);

//**********************Cards************************
// Retrieve all cards
app.get('/lists/:listId/cards', cards.index);
// Retrieve a single cards by Id
app.get('/lists/:listId/cards/:cardId', cards.find);
// Create a new cards
app.post('/lists/:listId/cards', cards.create);
// Update a Cards with Id
app.put('/lists/:listId/cards/:cardId', cards.update);
// Delete a List with Id
app.delete('/lists/:listId/cards/:cardId', cards.delete);


module.exports = app; 