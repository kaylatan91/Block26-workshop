import { useEffect } from "react";

  
 export default function SelectedContact() { 
    useEffect(() => {
        async function fetchSingleContact(contact) {
            try {
            const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`)
            const singleContact = await response.json()
            console.log(singleContact)
            } catch(error) {
            console.error(`trouble getting ${contact}`)
            }
        }
        fetchSingleContact()
        }, [])
    
        return (
            console.log('hi')
        
        )}