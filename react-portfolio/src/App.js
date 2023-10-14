// import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layouts'
import Home from './components/Home'
// import './App.scss';

function App() {
  return (
  <>
  <Routes>
    <Route path="/" element={<Layout />} />
    <Route index element={<Home />} />
  </Routes>
  </>
  )
}

export default App;


