"use client"
import { useState, createContext } from "react"

const SidebarContext = createContext()

const SidebarProvider = ({children}) => {
  const [isSidebarOpen,setIsSidebarOpen] = useState(false)  
  //
  return (
    <SidebarContext.Provider value={{setIsSidebarOpen, isSidebarOpen}} >
      {children}
    </SidebarContext.Provider>
  )
}

export { SidebarProvider, SidebarContext}