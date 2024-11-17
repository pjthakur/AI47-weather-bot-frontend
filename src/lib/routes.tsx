import ProtectedRoute from "@/components/layouts/ProtectedRoute"
import AccountSettings from "@/pages/accountSettings"
import AllUsers from "@/pages/AllUsers"
import Login from "@/pages/Login"
import { Home } from "lucide-react"

import { Routes, Route } from "react-router-dom"
const BotRoutes = () => {
  return (
    <Routes>

        <Route path='/' element={<Login/>}/>
          <Route path='/allUsers' element={
            <ProtectedRoute>
              <AllUsers/>
            </ProtectedRoute>
            }/>
          <Route path='/account' element={
            <ProtectedRoute>
              <AccountSettings/>
            </ProtectedRoute>
            }/>
        {/* <Route path='movie/:id' element = {<MoviePage/>}/>
        <Route path='*' element={<Error/>}/> */}
    </Routes>
  )
}

export default BotRoutes