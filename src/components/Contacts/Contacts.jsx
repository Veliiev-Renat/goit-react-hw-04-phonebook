import PropTypes from 'prop-types';
import style from '../Contacts/Contacts.module.css'

export default function Contact({contacts,deleteContact}){

        return(
    <ul className={style.list}>
        {contacts.map((contact)=>(
        <li key={contact.id} className={style.item}>
           <p className={style.text}>{contact.name} : {contact.number}</p> 
           <button type="button" onClick={deleteContact} id={contact.id} className={style.button}>delete</button>
        </li>
        ))}    
    </ul>
   )     
}

Contact.propTypes = {
    deleteContact:PropTypes.func,
    contacts:PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
}