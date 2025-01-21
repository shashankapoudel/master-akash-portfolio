import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header'
import Home from './pages/homePage'
import Footer from './components/footer'
import Services from './pages/services'
import Gallery from './pages/gallery'
import Testimonials from './pages/testimonials'
import Contact from './pages/contact'
import SchedueleMeeting from './pages/schedueleMeeting'


function App() {

  return (
    <div className='bg-[#A8B391] min-h-screen'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/gallery' element={< Gallery />} />
          <Route path='/testimonials' element={<Testimonials />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/contact/schedule-meeting' element={<SchedueleMeeting />} />
        </Routes>
        <Footer />
      </BrowserRouter >
    </div>
  )
}

export default App
