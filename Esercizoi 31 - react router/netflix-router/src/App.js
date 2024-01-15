import './App.css';
import {  Container, Navbar } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';


function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar>
        <Container>
            <Routes>
              <Route path='/' element={<HomePage />} />
            </Routes>
        </Container>
      </Navbar>
    </BrowserRouter>
    </>
  );
}

export default App;
