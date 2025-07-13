



import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/homePage';
import Footer from './components/footer';
import Services from './pages/services';
import Gallery from './pages/gallery';
import Testimonials from './pages/testimonials';
import Contact from './pages/contact';
import SchedueleMeeting from './pages/schedueleMeeting';
import BlogPage from './pages/blogs';
import About from './pages/About';
import Chatbot from './components/ChatBot';
import ScrollToTop from './components/ScrollToTop';
import MeditationAndMindfulness from './pages/MeditationAndMindfulness';
import SoundHealingTherapy from './pages/SoundHealingTherapy';
import SpiritualEvents from './pages/SpiritualEvents';
import YogaAndEnergy from './pages/YogaAndEnergy';
import HealingAndWelness from './pages/HealingAndWelness';
import SoundBaths from './pages/SoundBaths';
import FAQ from './pages/FAQ';
import MoveToTop from './components/MoveToTop';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <BrowserRouter>
        <Header />
        <MoveToTop />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/meditation&mindfulness" element={<MeditationAndMindfulness />} />
            <Route path="/services/soundhealingtherapy" element={<SoundHealingTherapy />} />
            <Route path="/services/spiritualevents" element={<SpiritualEvents />} />
            <Route path="/services/yoga&energy" element={<YogaAndEnergy />} />
            <Route path="/services/healing&welness" element={<HealingAndWelness />} />
            <Route path="/services/soundbaths" element={<SoundBaths />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blogs" element={<BlogPage />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact/schedule-meeting" element={<SchedueleMeeting />} />
          </Routes>
        </main>
        <Chatbot />
        <ScrollToTop />
        <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;

