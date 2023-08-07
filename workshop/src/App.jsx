import { useState } from 'react'
import './App.css'
import ContactList from './components/ContactList'


export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  
  return (
    <>
      {selectedContactId ? (
        <div>{selectedContactId}</div>) : (
      <ContactList setSelectedContactId={setSelectedContactId}/>
)}
    </>
  )
}


