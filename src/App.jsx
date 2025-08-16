 
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Jobs from './components/Jobs'
import ProtectedRouter from './components/ProtectedRoute'
import DetailsinfoJobs from './components/DetailsinfoJobs'
import Notpagefound from './components/NotpageFound'

function App() {
  

  return (
    
    <>
    <BrowserRouter>
      <Routes>
         <Route path='/login' element={<Login/>}></Route>
        <Route path='/' element={<ProtectedRouter Compment={Home}/>}></Route>
        <Route path='/jobs' element={<ProtectedRouter Compment={Jobs}/>}></Route>
         <Route path='/jobs/datails/:id' element={<ProtectedRouter Compment={DetailsinfoJobs}/>}></Route>
          <Route path='/*' element={<ProtectedRouter Compment={Notpagefound}/>}></Route>
      </Routes>
    </BrowserRouter>
     </>
  )
}

export default App
