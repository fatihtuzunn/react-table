import { useState } from 'react';
import './App.css';
import  data  from "./data.json";
import { nanoid } from "nanoid";

function App() {
const [contacts, setContacts] = useState(data);
const [addFormData, setAddFormData] = useState({
  fullName: '',
  address: '',
  phone: '',
  email: ''

});

  const handleAddFormChange = (event) =>{
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = {...addFormData};
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  }

  const handleAddFormSubmit = (event)=>{
    event.preventDefault();

    const newContact={
      id: nanoid(), 
      fullName: addFormData.fullName,
      address: addFormData.address,
      phone: addFormData.phone,
      email: addFormData.email
    }

    const newContacts = [...contacts, newContact]
    setContacts(newContacts);
  }

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Adress</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
        </thead>

        {contacts.map((contact)=>(
          <tbody>
          <tr>
            <td>{contact.fullName}</td>
            <td>{contact.adress}</td>
            <td>{contact.phone}</td>
            <td>{contact.email}</td>
          </tr>
        </tbody>
        ))}
        
      </table>

      <form onSubmit={handleAddFormSubmit} action="">
          <input 
          type="text" 
          name="fullName" 
          required="required"
          placeholder='enter a name'
          onChange={handleAddFormChange}  />
          <input 
          type="text" 
          name="address" 
          required="required"
          placeholder='enter a address' 
          onChange={handleAddFormChange} />
          <input 
          type="text" 
          name="phone" 
          required="required"
          placeholder='enter a phone' 
          onChange={handleAddFormChange} />
          <input 
          type="text" 
          name="email" 
          required="required"
          placeholder='enter a email' 
          onChange={handleAddFormChange} />
          <button type='submit'>ADD</button>

      </form>
    </div>
  );
}

export default App;
