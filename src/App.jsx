import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Applayout from './layouts/Applayout'
import StudentScreen from './screens/StudentScreen'
import DashboardScreen from './screens/DashboardScreen'
import TeacherScreen from './screens/TeacherScreen'
import StaffScreen from './screens/StaffScreen'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Applayout />}>
          <Route index element={<DashboardScreen />}/>
          <Route path='students' element={<StudentScreen />}/>
          <Route path='teacher' element={<TeacherScreen />}/>
          <Route path='staff' element={<StaffScreen />}/>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
