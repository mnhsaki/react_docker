import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contact_and_GroupLayout from './Contact_and_GroupLayout'



const Contact_and_groupPage = () => {
  return (
    <Routes>
    <Route element={<Contact_and_GroupLayout />}>
      
    </Route>
  </Routes>
  )
}

export default Contact_and_groupPage