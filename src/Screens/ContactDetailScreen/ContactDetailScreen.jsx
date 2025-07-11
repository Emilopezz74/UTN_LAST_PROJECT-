import React, { useContext, useEffect } from 'react'
import { Link, useParams } from 'react-router'
import { ContactDetailContext } from '../../Context/ContactDetailContext'
import LoaderSpinner from '../../Components/LoaderSpinner/LoaderSpinner'
import './ContactDetailScreen.css'
import { IoArrowUndo } from "react-icons/io5"; 
import { PiPhoneCallFill } from "react-icons/pi"; 



export default function ContactDetailScreen() {
    const {contact_id} = useParams()
    const {loadContact , contact_detail, isLoadingContactDetail} = useContext(ContactDetailContext)
    useEffect(
        () => {
            loadContact(contact_id)
        },
        [contact_id]
    )
    if(isLoadingContactDetail){
        return (
        <LoaderSpinner/>
        )
    }
    return (
        <div className='container-general-contact-detail'>
            <header className='header-contact-detail'>
                <Link to={`/contacts/${contact_id}/messages`}><IoArrowUndo /></Link>
                <h1 className='name-contact'>{contact_detail.name}</h1>
            </header>
            <div className='container-detail'>
                <div className='container-img-detail'>
                    <img src={contact_detail.img} alt={`${contact_detail.name} image profile`} className='img-contact' />
                </div>
                <h3 className='number-phone-contact'><PiPhoneCallFill />Phone number:
                    <div className='container-phone-icon'></div>
                    {contact_detail.number_phone}
                </h3>
            </div>
        </div>
    )
}
