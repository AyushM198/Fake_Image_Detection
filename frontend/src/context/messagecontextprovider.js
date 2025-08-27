import React, { useState } from 'react'
import messageContext from './messagecontext'

const MessageContextProvider = ({children}) => {
    const[profile, setProfile] = useState(false);
    const [open, setOpen] = useState(false);
    
  return (
    <messageContext.Provider value={{open, setOpen, hamburger, setHamburger, profile, setProfile}}>
        {children}
    </messageContext.Provider>
  )
}

export default MessageContextProvider