import React from 'react'
import ContactList from './components/ContactList'
import ChatRoom from './components/ChatRoom'

const App = () => {
  return (
    <div className='min-h-screen flex flex-col md:flex-row 
    justify-center items-center space-y-10 md:space-y-0 md:space-x-10 
    bg-gray-200'>

      <ContactList />
      <ChatRoom />
    </div>
  )
}

export default App