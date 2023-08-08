import { useState } from 'react'
import './App.css'
import ContactList from './components/ContactList'
import SelectedContact from './components/SelectedContact';




export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  

  return (
    <>
      {/* note: this is a ternary vvv*/}
      {selectedContactId ? (<SelectedContact selectedContactId= 
      {selectedContactId} setSelectedContactId={setSelectedContactId}/>) 
      :(<ContactList setSelectedContactId={setSelectedContactId}/>)
      }
    </>
  )
}


