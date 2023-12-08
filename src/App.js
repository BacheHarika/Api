//Introduction: Understanding APIs
// 1.Definition of API:
// 2.Types of API
// 3.How API works 
// 4.API components 

//CRUD OPERATIONS//

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const UserList = () => {
//   const [users, setUsers] = useState([]);
//   const [newUserName, setNewUserName] = useState('');
//   const [editingUserId, setEditingUserId] = useState(null);
//   const [editedUserName, setEditedUserName] = useState('');

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     try {
//       const response = await axios.get('https://jsonplaceholder.typicode.com/users');
//       setUsers(response.data);
//     } catch (error) {
//       console.error('Error fetching users:', error);
//     }
//   };

//   const handleAddUser = async () => {
//     try {
//       const response = await axios.post('https://jsonplaceholder.typicode.com/users', {
//         name: newUserName,
//       });
//       setUsers([...users, response.data]);
//       setNewUserName('');
//     } catch (error) {
//       console.error('Error adding user:', error);
//     }
//   };

//   const handleEditUser = async () => {
//     try {
//       await axios.put(`https://jsonplaceholder.typicode.com/users/${editingUserId}`, {
//         name: editedUserName,
//       });
//       setUsers(users.map(user => (user.id === editingUserId ? { ...user, name: editedUserName } : user)));
//       setEditingUserId(null);
//       setEditedUserName('');
//     } catch (error) {
//       console.error('Error editing user:', error);
//     }
//   };

//   const handleDeleteUser = async (userId) => {
//     try {
//       await axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`);
//       setUsers(users.filter(user => user.id !== userId));
//     } catch (error) {
//       console.error('Error deleting user:', error);
//     }
//   };

//   const handleStartEdit = (userId, userName) => {
//     setEditingUserId(userId);
//     setEditedUserName(userName);
//   };

//   return (
//     <div>
//       <h2>User List</h2>
//       <ul>
//         {users.map(user => (
//           <li key={user.id}>
//             {editingUserId === user.id ? (
//               <div>
//                 <input
//                   type="text"
//                   value={editedUserName}
//                   onChange={(e) => setEditedUserName(e.target.value)}
//                 />
//                 <button onClick={handleEditUser}>Save</button>
//               </div>
//             ) : (
//               <div>
//                 {user.name}
//                 <button onClick={() => handleStartEdit(user.id, user.name)}>Edit</button>
//                 <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
//               </div>
//             )}
//           </li>
//         ))}
//       </ul>
//       <div>
//         <input
//           type="text"
//           placeholder="Enter new user name"
//           value={newUserName}
//           onChange={(e) => setNewUserName(e.target.value)}
//         />
//         <button onClick={handleAddUser}>Add User</button>
//       </div>
//     </div>
//   );
// };

// export default UserList;



import React from 'react'
import { useEffect,useState } from 'react'

const App = () => {
  const [data,setData]=useState([]);
  useEffect(()=>{
    fetch("https://64dda9f8825d19d9bfb15916.mockapi.io/api").then(
      response=>response.json()
    ).then(json=>setData(json))
  },[])
  return (
    <>
    <h1>API'S</h1>
    {data.map(item=>
<li key={ item.id}>{item.name}</li>     
      )}

    </>

  )
}
export default App;






   





