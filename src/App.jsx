import { createContext } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Layout from "./layouts/Layout"
import Home from "./pages/Home"
import Contacts from "./pages/Contacts"
import ContactsProvider from "./context/ContactsProvider"
import EditContact from "./pages/EditContact"


function App() {

  return (
    <ContactsProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/edit" element={<EditContact />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ContactsProvider>
  )
}

export default App
