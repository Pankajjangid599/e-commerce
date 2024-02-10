import './App.css'
import CardDetails from './Components/CardDetails';
import Carts from './Components/Carts';
import Header from './Components/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {


  return (
    <>
       <BrowserRouter>
       <Header></Header>
      <Routes>
       <Route path='/' element={<CardDetails/>} />
       <Route path='/carts/:id' element={<Carts/>} />
        
      </Routes>
    </BrowserRouter>
    
      
    </>
  )
}

export default App
