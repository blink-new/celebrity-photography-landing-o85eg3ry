import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import VideoSlider from './components/VideoSlider';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Gallery />
      <VideoSlider />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;