import { useEffect, useState } from "react";

  
 export default function SelectedContact({selectedContactId, setSelectedContactId}) { 
    const [contact, setContact] = useState({});
    useEffect(() => {
        async function fetchSingleContact(contact) {
            try {
            const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`)
            const singleContact = await response.json()
            setContact(singleContact);
    
            } catch(error) {
            console.error(`trouble getting ${contact}`)
            }
        }
        fetchSingleContact()
        }, [])
    
        return (
            

            <div>
                <p>
                    <b>Name:</b> {contact.name}
                </p>
                <p>
                    <b>Email:</b> {contact.email}
                </p>
                <div>
                    <b>Address:</b> 
                    <p>{contact.address?.street}</p>
                    <p>{contact.address?.city}</p>
                    <p>{contact.address?.zipcode}</p>
                </div>
            </div>
            
            

        )
    }