import { Route, Routes, BrowserRouter } from "react-router-dom"
import React from 'react'

import Home from "./components/Home"
import Login from "./components/auth/Login"
import Register from "./components/auth/Register"
import Accessories from "./components/aux/Accessories"
import Websites from "./components/aux/Websites"
import NavBar from "./components/common/NavBar"
import NotFound from "./components/common/NotFound"
import PlantAdd from "./components/plants/PlantAdd"
import PlantDetail from "./components/plants/PlantDetail"
import PlantEdit from "./components/plants/PlantEdit"
import PlantOverview from "./components/plants/PlantOverview"
import PlantRandom from "./components/plants/PlantRandom"
// import OtherProfile from "./components/profile/OtherProfile"
import OwnProfile from "./components/profile/OwnProfile"
import Searchpage from "./components/aux/Searchpage"


const App = () => {


  return (
    <main className="site-wrapper">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/plants' element={<PlantOverview />} />
          <Route path='/search/:searchInput' element={<Searchpage />} />
          <Route path='/plants/:id' element={<PlantDetail />} />
          <Route path='/plants/selector' element={<PlantRandom />} />
          <Route path='/plants/add' element={<PlantAdd />} />
          <Route path='/plants/:id/edit' element={<PlantEdit />} />
          <Route path='/profile/:userId' element={<OwnProfile />} /> 
          <Route path='/accessories' element={<Accessories />} /> 
          <Route path='/comparison' element={<Websites />} /> 
          <Route path='/register' element={<Register />} /> 
          <Route path='/login' element={<Login />} /> 
          <Route path='*' element={<NotFound />} /> 
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App