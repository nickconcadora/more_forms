import React, {useState} from 'react';
import UserForm from './components/UserForm';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confPassword: "",

  })
  const handleSubmit = e => {
    e.preventDefault();

    setUser({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confPassword: "",

    })
  }
  const handleUserChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }
  return (
    <div className="App">
      <UserForm 
        inputs={user}
        handleChange = {handleUserChange}
        handleSubmit = {handleSubmit}
      />

    </div>
  );
}

export default App;

