import React from 'react'

interface IProps {
    name: string, 
    email: string,
    handleRemove: (email: string) => void
}


const Contact = ({name, email = "N/A", handleRemove}: IProps) : JSX.Element => {
    // return undefined;
    return (
  
        <div style={{backgroundColor: 'gray', margin:"20px", padding: '20px', borderRadius: '10px'}}>
            <p>
                <strong>Name: </strong> {name}
            </p>
            <p>
                <strong>Email: </strong> {email}
            </p>
            <button onClick={() => handleRemove(email)}>Remove</button>
        </div>
    
    )
}; 

export const ContactDemo : React.FunctionComponent<IProps> = ({name, email = "N/A"}: IProps) => {
    return (
        // return undefined; 
  
        <div style={{backgroundColor: 'gray', margin:"20px", padding: '20px', borderRadius: '10px'}}>
            <p>
                <strong>Name: </strong> {name}
            </p>
            <p>
                <strong>Email: </strong> {email}
            </p>
        </div>
    
    )
}; 





export default Contact

