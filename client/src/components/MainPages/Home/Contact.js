import React, {useState} from "react";
import axios from 'axios';
import bitcoin from "../videos/bitcoin-1.mp4";
import "./home.css";

const Contact = () => {

    const [contact, setContact] = useState({
        name: '',
        email: '',
        message: ''
    })

    const onInputChange = (e) => {
        const {name, value} = e.target;

        setContact({...contact, [name]:value})
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            
            await axios.post('/contact/create', {...contact})

            window.location.href = '/'

        } catch (error) {
            alert(error.response.data.msg)
        }
    }

    return (
        <div className="contact">
            <h1>Contact Us</h1>
            <div className="contact-form">

                <div className="video-contact">
                    <video src={bitcoin} autoPlay loop muted />
                </div>

                <form onSubmit={onSubmit}>

                    <h2>Write here</h2>

                    <div className="rows">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" placeholder="Name" value={contact.name} onChange={onInputChange} />
                    </div>
                    
                    <div className="rows">
                        <label htmlFor="name">Email</label>
                        <input type="text" name="email" placeholder="Email" value={contact.email} onChange={onInputChange} />
                    </div>
                    
                    <div className="rows">
                        <label htmlFor="name">Message</label>
                        <textarea type="text" name="message" placeholder="Message" value={contact.message} onChange={onInputChange} rows="5" />
                    </div>

                    <button type="submit">Send</button>
                
                </form>
            </div>
        </div>
    )
}

export default Contact
