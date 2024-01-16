import './App.css';
import {  Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import NavbarComp from './components/NavbarComp';


function App() {
  return (
    <>
    <BrowserRouter>
      <NavbarComp>
        <Container>
            <Routes>
              <Route path='/' element={<HomePage />} />
            </Routes>
        </Container>
      </NavbarComp>
    </BrowserRouter>
    </>
  );
}

export default App;
