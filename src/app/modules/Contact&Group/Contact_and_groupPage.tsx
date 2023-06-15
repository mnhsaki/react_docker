import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contact_and_GroupLayout from './Contact_and_GroupLayout'
import Contact_and_Group from './Contact_and_Group'


const Contact_and_groupPage = () => {
  return (
    <Routes>
    <Route element={<Contact_and_GroupLayout />}>
      <Route path='404' element={<Contact_and_Group />} />
    
      <Route index element={<Contact_and_Group />} />
    </Route>
  </Routes>
  )
}

export default Contact_and_groupPage