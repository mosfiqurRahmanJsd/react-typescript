import React, { useState } from 'react'
import Contact, {ContactDemo} from './Contact'

interface IContact {
    name: string, 
    email : string
}

const Contacts = () => {
    const [contact, setContact] = useState<IContact>({} as
        IContact); 
    const [contactList, setContactList] = useState<IContact[]>([]); 

    const onClick = () => {
        setContactList([...contactList, contact])
        setContact({
            name: "", 
            email: ""
        }); 
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setContact({...contact, [e.target.name]: e.target.value});


    console.log("contactList", contactList);



    console.log(contact); 
    return (
        <div>
            <h1>Contact List</h1>
            <div className="form">
                <input 
                value={contact.name}
                onChange={onChange}
                name="name" 
                type="text" 
                placeholder="Contact Name" 
                />
                <input 
                value={contact.email}
                onChange={onChange}
                name="email" 
                type="email" 
                placeholder="Contact Email" 
                />
                
                <button onClick={onClick}>Add</button>
            </div>
            {
                contactList.map((con) => <Contact name= {con.name} key={con.name} email={con.email}></Contact>)
            }

            
            
            
                        
            
            <ContactDemo name= "Someone 2"></ContactDemo>

        </div>
    )
}

export default Contacts
