import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Employees from '../pages/Employees'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/employees" element={<Employees />} />
    </Routes>
  )
}

export default Router
