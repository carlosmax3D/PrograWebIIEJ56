const express = require('express');
const router = express.Router()
const { getUser, getUsers, createUser, updateUser, deleteUser } = 
require('./usersController.js');
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})
router.get('/', (req, res) => {
  res.send('Users home page')
})
router.get('/about', (req, res) => {
  res.send('About users')
})
router.route('/users').get(getUsers); // Read: Get all users
router.route('/create').post(createUser); // Create: Create a new user  
router.route('/users/:id')
  .get(getUser)
  .patch(updateUser) // Update: Update a user by ID
  .delete(deleteUser); // Delete: Delete a user by ID

module.exports = router
