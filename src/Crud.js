import React, { useState } from 'react';

const App = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', email: '' });
  const [editingUserId, setEditingUserId] = useState(null);

  const handleInputChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleAddUser = () => {
    if (editingUserId !== null) {
     
      setUsers(users.map(user => (user.id === editingUserId ? { ...user, ...newUser } : user)));
      setEditingUserId(null);
    } else {
   
      setUsers([...users, { id: users.length + 1, ...newUser }]);
    }

    setNewUser({ name: '', email: '' });
  };

  const handleEditUser = (id) => {
    const userToEdit = users.find(user => user.id === id);
    if (userToEdit) {
      setNewUser({ name: userToEdit.name, email: userToEdit.email });
      setEditingUserId(id);
    }
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  console.log('Current Users:', users);

  return (
    <div>
      <h1>CRUD Operations in React</h1>
      <div>
        <h2>Add/Edit User</h2>
        <label>Name:</label>
        <input type="text" name="name" value={newUser.name} onChange={handleInputChange} />
        <label>Email:</label>
        <input type="text" name="email" value={newUser.email} onChange={handleInputChange} />
        <button onClick={handleAddUser}>{editingUserId !== null ? 'Edit User' : 'Add User'}</button>
      </div>
      <div>
        <h2>User List</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} ({user.email}){' '}
              <button onClick={() => handleEditUser(user.id)}>Edit</button>{' '}
              <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;