

import { Routes, Route } from "react-router-dom";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Links from './pages/links/Links';
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
