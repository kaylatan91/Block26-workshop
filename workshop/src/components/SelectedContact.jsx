import { useEffect, useState } from "react";
import App from "../App";

import ContactRow from "./ContactRow";
  
 export default function SelectedContact({selectedContactId, setSelectedContactId}) { 
    const [contact, setContact] = useState(null);
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
        })
    
        return (
            <table>
                <thead>
                    <tr>
                        <th colSpan={3}>Contact List</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {/* < ContactRow /> */}
                    </tr>
                </tbody>

            </table>
            

        )
    }