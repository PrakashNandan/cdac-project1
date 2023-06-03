import React, { useState } from 'react';
import './AddAndDisplayUserPage.css';

const AddAndDisplayUserPage = () => {
      const [isFormVisible, setIsFormVisible] = useState(false);
      const handleH2Click = () => {
            setIsFormVisible(!isFormVisible);
          };
  const [user, setUser] = useState({
    name: '',
    age: '',
    email: ''
  });
  const [users, setUsers] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUsers([...users, user]);
    setUser({
      name: '',
      age: '',
      email: ''
    });
  };

  return (
      
    <div className="container1">
        
      <button className="heading-btn" onClick={handleH2Click}>Add User</button>
      { isFormVisible &&(
      <form onSubmit={handleSubmit} >
        <div className="form-group1">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={user.name}
            onChange={handleInputChange}
            placeholder="Enter name"
            required
          />
        </div>
        <div className="form-group1">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            name="age"
            id="age"
            value={user.age}
            onChange={handleInputChange}
            placeholder="Enter age"
            required
          />
        </div>
        <div className="form-group1">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={user.email}
            onChange={handleInputChange}
            placeholder="Enter email"
            required
          />
        </div>

        
        <button type="submit" className="btn-submit1">Submit</button>
      </form>)}

      <div className="user-list">
        <h3>User List</h3>
        {users.length > 0 ? (
          <ul>
            {users.map((user, index) => (
              <li key={index}>
                <p>
                  <strong>Name:</strong> {user.name}
                </p>
                <p>
                  <strong>Age:</strong> {user.age}
                </p>
                <p>
                  <strong>Email:</strong> {user.email}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No users added yet.</p>
        )}
      </div>
    </div>
  );
};

export default AddAndDisplayUserPage;

