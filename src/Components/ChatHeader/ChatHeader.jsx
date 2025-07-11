import React, { useContext } from 'react'
import { Link, useParams } from 'react-router';
import { ContactContext } from '../../Context/ContactContext';
import './ChatHeader.css';
import { MdVideoCameraBack } from "react-icons/md";
import { HiMiniVideoCamera } from "react-icons/hi2";
import { BsFillTelephonePlusFill } from "react-icons/bs";
import { IoArrowUndo } from "react-icons/io5";
import { IoMdMore } from "react-icons/io";




export default function ChatHeader() {
    const { contact_id } = useParams(); 
    const { contacts } = useContext(ContactContext);
    
    
    const currentContact = contacts.find(contact => contact.id === parseInt(contact_id));
    
    return (
        <div className='container-chat-header'>
            <header className='chat-header'>
                    <div className='container-btn-go-home'>
                        <Link to={'/'}><IoArrowUndo /></Link> 
                    </div>
                <Link to={`/contacts/${contact_id}/detail`}>
                <div className='container-contact-information'>
                    <img src={currentContact.img} alt={currentContact.name} className='img-contact-item-header' />
                        <div className='container-contact-connection'>
                            <h3 className='contact-name'>{currentContact.name}</h3>
                            <span>{` Last seen ${currentContact.last_time_connected}`}</span>
                        </div>
                </div>
                </Link>
                <div className='container-multimedia-icon'>
                    <button className='container-call-video-icon'>
                        <BsFillTelephonePlusFill />
                    </button>
                    <button className='container-call-video-icon'>
                        <HiMiniVideoCamera />
                    </button>
                    <button className='container-call-video-icon'>
                        <IoMdMore />
                    </button>
                </div>
            </header>
        </div>
    )
}

