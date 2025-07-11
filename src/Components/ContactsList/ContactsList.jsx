import React, { useContext, useState } from "react";
import ContactItem from "../ContactItem/ContactItem";
import { ContactContext } from "../../Context/ContactContext";
import LoaderSpinner from "../LoaderSpinner/LoaderSpinner";
import './ContactsList.css';
import { RiChatNewFill } from "react-icons/ri";
import { IoMdMore } from "react-icons/io";
import { HiUserCircle } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import { SiCircle } from "react-icons/si";
import { LuMessageCircleCode } from "react-icons/lu";
import { LuMessagesSquare } from "react-icons/lu";





const ContactsList = () => {
    const { contacts, isLoadingContacts } = useContext(ContactContext);
    const [searchTerm, setSearchTerm] = useState('');

    const visibleContacts = contacts.filter(person =>
        person.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (isLoadingContacts) {
        return <LoaderSpinner />;
    }

    return (
        <div className="container-contact-list">
<div className="wsp-container-box">
    <header className="whatsapp-header">

    <h1 className="title-header">WhatsApp HBO</h1>
    <div className="container-wsp-icon">
            <IoMdMore style={{ fontSize: "40px", color: "#21c063" }} />
    <RiChatNewFill style={{ fontSize: "40px", color: "#21c063" }} />
    </div>
    </header>

    <form className="search-bar">
    <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="input"
    />
    </form>
</div>


<div className="content-wrapper">

    <div className="aside-contact-info">


        
        <div className="aside-container">
    <h2 className="aside-title">Active User</h2>

        <img src="/profilePhotoo.png" alt="User Avatar" className="user-avatar" />
        <p className="user-name">You are online</p>
        <div className="container-main-icons">
        <div className="Container-main-options">

<SiCircle size={45} color="#a3a3a3" style={{ cursor: "pointer" }} />
<LuMessageCircleCode  
    size={45} 
    color="#a3a3a3" 
    style={{ cursor: "pointer" }} 
/>
<LuMessagesSquare 
    size={45} 
    color="#a3a3a3" 
    style={{ cursor: "pointer" }} 
/>
</div>
        
        <div className="Container-icons-settings">  
        <HiUserCircle 
            size={45}
            color="#a3a3a3"
            style={{ marginTop: "20px" }}
            
        />
        <IoSettingsOutline 
    size={45}            
    color="#a3a3a3"       
/></div>
</div>


    </div>
    </div>

    <div className="contacts-wrapper">
    {visibleContacts.map((contact) => (
        <ContactItem key={contact.id} {...contact} />
    ))}
    </div>
</div>
</div>

    );
};

export default ContactsList;
