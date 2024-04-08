import { Route, Routes } from "react-router-dom";
import './App.css';
import Layout from './Layout.jsx';
import IndexPage from './pages/IndexPage.jsx';
import LoginPage from './pages/LoginPage.jsx';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<IndexPage/>} />
      <Route path="/login" element={<LoginPage/>} />
      </Route>
    </Routes>
    
  )
}

export default App
