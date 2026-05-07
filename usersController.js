const userModel = require('./usersModel');
//const users = [ { id: 1, name: 'Hadi Soufan' }, { id: 2, name: 'Melia Malik' }, { id: 3, name: 'Zayn Cerny' }];
// @desc    Get user
// @route   GET /api/v1/users/:id
// @access  Public
exports.getUser = async (req, res) => {
  const users = await userModel.find({id: req.params.id}, {_id:0, id:1, name:1});
//  const user = users[req.params.id];
  res.status(200).json({ success: true, count: users.length, data: users});
};
// @desc    Get all users
// @route   GET /api/v1/users
// @access  Public
exports.getUsers = async (req, res) => {
  const users = await userModel.find({},{id:1, name:1, _id:0});
  res.status(200).json({ success: true, count: users.length, data: users});
};
// @desc    Create new user
// @route   POST /api/v1/create
// @access  Public
exports.createUser = async (req, res) => {
  const {_id,name} = await userModel.create(req.body);  
//  const name = req.body.name;
//  const id = users.length + 1;
//  users.push({ id, name });
  res.status(201).json({ success: true, user: { _id, name }, message: 'User created successfully' });
};
// @desc    Update a user
// @route   PATCH /api/v1/users/:id
// @access  Public
exports.updateUser = async (req, res) => {
  const idU = req.params.id;
  const nameU = req.body.name;
//  const user = users.find(user => user.id == id);
  const user = await userModel.findOneAndUpdate({id: idU}, {name: nameU})
  if (user) {
//   user.name = name;
    res.json({ message: 'User updated successfully', user });
  } else {
    res.status(404).json({ message: `User with ID ${idU} not found` });
  }
};
// @desc    Delete a user
// @route   DELETE /api/v1/users/:id
// @access  Public
exports.deleteUser = (req, res) => {
  const id = req.params.id;
  const index = users.findIndex(user => user.id == id);
  if (index != -1) {
    users.splice(index, 1);
    res.json({ message: 'User deleted successfully' });
  } else {
    res.status(404).json({ message: `User with ID ${id} not found` });
  }
};
