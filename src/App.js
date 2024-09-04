import './App.css';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Edit from './pages/Edit';
import NotFound from './pages/NotFound';

import Header from './components/Header'
import Footer from './components/Footer'

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
     
        <BrowserRouter>
        <Header/>

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/resume" element={<Resume />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signUp" element={<SignUp />}></Route>
            
            <Route path="/edit" element={<Edit />}></Route>
            
            <Route path="*" element={<NotFound />}></Route>
          </Routes>

          <Footer/>
        </BrowserRouter>
    </>
  );
}

export default App;
