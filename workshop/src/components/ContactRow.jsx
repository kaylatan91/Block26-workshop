import React from "react"
import { useState } from "react"
import App from "../App"


// add onClick function that navigates to separate view
// it should show selected contact and details about them

export default function ContactRow({setSelectedContactId, contact}) {
    return(
        <tr onClick={() => 
            {setSelectedContactId(contact.id)}
        } key={contact.id}>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
        </tr>
    )}
