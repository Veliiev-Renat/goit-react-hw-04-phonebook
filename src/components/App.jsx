import { useState,useEffect } from 'react'
import Contact from './Contacts/Contacts'
import Filter from './Filter/Filter'
import { nanoid } from 'nanoid'
import Form from './Form/Form'

export function App(){
  const [contacts,setContacts] = useState([])
  const [filter,setfilter] = useState('')

  const handleChangeFilter = (e) =>{
    const target = e.target
    const{value}=target
    setfilter(value)
    }
  const handleSubmit = e =>{
    const form =e.currentTarget.elements
    e.preventDefault()
    if(contacts.find((contact)=>contact.name===form.name.value)){
      alert(`${form.name.value} is alredy in you contacts`)
      return
    }
    else{setContacts(prev=>(
    [...prev,{
      name:form.name.value,
      number:form.number.value,
      id:nanoid()
    }]
    ))}
  }

  useEffect(()=>{
  const contact =localStorage.getItem('contacts')
  const contactParce = JSON.parse(contact)
  if(contactParce){
    setContacts(contactParce)
  }},[])

  useEffect(()=>{
    if(contacts!==setContacts){
      localStorage.setItem('contacts',JSON.stringify(contacts))
    }
  },[contacts])

  const deleteContact=e=>{
    const del =contacts.filter((contact)=> contact.id !== e.target.id)
    setContacts(del)
    }


  const filteredArray=filter?contacts.filter(contact=>contact.name.toLowerCase().includes(filter.toLowerCase())):contacts

    

    return(<>
      <Form submit={handleSubmit} />
      <Filter seartch={handleChangeFilter} />
      <Contact  contacts={filteredArray}  deleteContact={deleteContact}/>
      </>
      )
}