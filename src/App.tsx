import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";

import "./App.css";
import BalloonGallery from "./components/BalloonGallery";
import BottleArtGallery from "./components/BottleArtGallery";
import FacePaintingGallery from "./components/Funactivities/Facepainting";
import BraceltMaking from "./components/Funactivities/BraceltMaking";
import KeyChainMaking from "./components/Funactivities/Keychainmaking";
import JewelryMaking from "./components/Funactivities/Jewellarymaking";
import PebblesArt from "./components/Funactivities/PebblesArt";
import HairBraiding from "./components/Funactivities/HairBraidingimages";
import PotMaking from "./components/Funactivities/PotMaking";
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-sky-50 via-sky-100 to-sky-200">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/decorations/balloons" element={<BalloonGallery/>} />
          <Route path="/activities/bottle-art" element={<BottleArtGallery/>} />
          <Route path="/activities/face-painting" element={<FacePaintingGallery />} />
          <Route path="/activities/bracelet-making" element={<BraceltMaking />} />
          <Route path="/activities/key-chain-making" element={<KeyChainMaking/>} />
          <Route path="/activities/jewelry" element={<JewelryMaking/>} />
          <Route path="/activities/pebble-art" element={<PebblesArt/>} />
          <Route path="/activities/hair-braiding" element={<HairBraiding />} />
          <Route path="/activities/pot-making" element={<PotMaking/>} />  
        </Routes>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
