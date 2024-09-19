

import { Routes, Route } from "react-router-dom";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Bio from "./pages/bio/Bio";
import Links from './pages/links/Links';
import './styles/globals.scss';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/bio" element={<Bio />}/>
        <Route exact path="/links" element={<Links />}/>
        <Route path="*" element={<Home />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App;
