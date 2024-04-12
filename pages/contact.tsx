import ContactForm from 'components/contactForm'
import Header from 'components/header'
import React from 'react'

const contact = () => {
  return (
    <div>
    <Header currentPage={'/contact'} />
    <ContactForm/>
 </div>
  )
}

export default contact