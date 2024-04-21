import AboutPage from 'components/aboutPage'
import Header from 'components/header'
import router from 'next/dist/client/router'
import React from 'react'

const about = () => {
  return (
    <div>
      <Header currentPage={'/about'} />
      <AboutPage/>
   </div>
  )
}

export default about