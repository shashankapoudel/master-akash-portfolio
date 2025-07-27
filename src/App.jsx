



import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
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
// import SoundHealingTherapy from './pages/PrivateSession';
import SpiritualEvents from './pages/SpiritualEvents';
import YogaAndEnergy from './pages/YogaAndEnergy';
import HealingAndWelness from './pages/HealingAndWelness';
import SoundBaths from './pages/SoundBaths';
import FAQ from './pages/FAQ';
import MoveToTop from './components/MoveToTop';
import PrivateSession from './pages/PrivateSession';
import SoundHealing from './pages/SoundHealing';
import SoundHealingWorkshop from './pages/SoundHealingWorkshop';
import AdvSoundHealingCourse from './pages/AdvSoundHealingCourse';
import { useState } from 'react';
import AdminLogin from './pages/admin/AdminLogin';
import AdminLayout from './layouts/AdminLayout';
import BlogsAdmin from './pages/admin/BlogsAdmin';

function App() {

  const location = useLocation()
  const [admin, setAdmin] = useState(false)
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">

      {
        !isAdminRoute && (

          <>
            <MoveToTop />
            <Header />
          </>
        )
      }
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />

          <Route path="/services/meditation&mindfulness" element={<MeditationAndMindfulness />} />

          <Route path="/services/soundhealing" element={<SoundHealing />} />

          <Route path="/services/soundbaths" element={<SoundBaths />} />
          <Route path="/services/private-session" element={<PrivateSession />} />

          <Route path="/services/healingworkshop" element={<SoundHealingWorkshop />} />

          <Route path="/services/yoga&energy" element={<YogaAndEnergy />} />

          <Route path="/services/spiritualevents" element={<SpiritualEvents />} />




          <Route path="/services/advsoundhealingcourse" element={<AdvSoundHealingCourse />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact/schedule-meeting" element={<SchedueleMeeting />} />



          <Route path="/admin" element={admin ? <AdminLayout setAdmin={setAdmin} /> : <AdminLogin setAdmin={setAdmin} />}>

            <Route path="blogs" element={<BlogsAdmin />} />
          </Route>


        </Routes>
      </main>
      {!isAdminRoute && (

        <>
          <Chatbot />
          <ScrollToTop />
          <Footer />
        </>
      )
      }

    </div>
  );
}

export default App;

