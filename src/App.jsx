

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import { Routes, Route } from "react-router-dom";
import Links from './pages/Links';
import './styles/globals.scss';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/links" element={<Links />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App;
