import React from 'react';
import { Scissors, Truck, Shovel, TreePine, Contact, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import ContactForm from './pages/ContactForm';
import Logo from './components/Logo';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        {/* Top Bar */}
        <div className="bg-green-900 text-white py-2">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Serving Alabaster, Hoover & Pelham, AL
                </span>
                <span className="hidden md:flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Mon-Sat: 7am-6pm
                </span>
              </div>
              <div className="flex items-center gap-4">
                <a href="tel:5551234567" className="flex items-center gap-2 hover:text-green-200">
                  <Phone className="h-4 w-4" />
                  (555) 123-4567
                </a>
                <a href="mailto:info@bosslawngroup.com" className="hidden md:flex items-center gap-2 hover:text-green-200">
                  <Mail className="h-4 w-4" />
                  info@bosslawngroup.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="bg-green-800 text-white shadow-lg sticky top-0 z-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <Link to="/" className="hover:text-green-200 transition">
                <Logo />
              </Link>
              <div className="hidden md:flex space-x-8">
                <Link to="/" className="hover:text-green-200 transition font-medium">Home</Link>
                <Link to="/gallery" className="hover:text-green-200 transition font-medium">Gallery</Link>
                <Link to="/contact" className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition">
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>

        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="mb-4">
                  <Logo />
                </div>
                <p className="text-gray-400">
                  Professional lawn care services in Central Alabama. Transforming properties in Alabaster, Hoover, and Pelham since 2020.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Service Area</h3>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Alabaster, Alabama
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Hoover, Alabama
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Pelham, Alabama
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Contact</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="tel:5551234567" className="flex items-center gap-2 hover:text-white">
                      <Phone className="h-4 w-4" />
                      (555) 123-4567
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@bosslawngroup.com" className="flex items-center gap-2 hover:text-white">
                      <Mail className="h-4 w-4" />
                      info@bosslawngroup.com
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Hours</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>Monday - Friday: 7am - 6pm</li>
                  <li>Saturday: 8am - 4pm</li>
                  <li>Sunday: Closed</li>
                </ul>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
              © {new Date().getFullYear()} Boss Lawn Group. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;