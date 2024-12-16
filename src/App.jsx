import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import FormStep0 from './components'
//import TestForm from './components/TestForm'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormStep0 />} />
        {/* Adicione outras rotas aqui, se necessário */}
      </Routes>
    </Router>
  )
}
    
export default App
