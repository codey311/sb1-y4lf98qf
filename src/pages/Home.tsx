import React from 'react';
import { Trees as Tree, Scissors, Truck, Shovel, TreePine, Contact, MapPin, Star, Shield, Clock, Leaf, Award, ThumbsUp, Zap, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <Scissors className="h-12 w-12" />,
    title: "Lawn Cutting",
    description: "Professional lawn maintenance keeping your yard looking pristine year-round."
  },
  {
    icon: <Tree className="h-12 w-12" />,
    title: "Tree Trimming",
    description: "Expert tree care services to maintain health and appearance of your trees."
  },
  {
    icon: <Truck className="h-12 w-12" />,
    title: "Land Clearing",
    description: "Complete land clearing services for construction or property renovation."
  },
  {
    icon: <Shovel className="h-12 w-12" />,
    title: "Mulch Installation",
    description: "Quality mulch installation to enhance your property's appearance."
  },
  {
    icon: <Leaf className="h-12 w-12" />,
    title: "Pinestraw Installation",
    description: "Professional pinestraw installation for a natural, polished look."
  },
  {
    icon: <TreePine className="h-12 w-12" />,
    title: "Christmas Light Installation",
    description: "Professional holiday lighting installation to make your home festive."
  }
];

const features = [
  {
    icon: <Award className="h-8 w-8" />,
    title: "Quality Guaranteed",
    description: "Satisfaction guaranteed on every service"
  },
  {
    icon: <Star className="h-8 w-8" />,
    title: "Premium Service",
    description: "Attention to detail in every project"
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Fully Insured",
    description: "Your property is protected"
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: "Reliable",
    description: "On-time service, every time"
  }
];

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div 
        className="relative h-[600px] bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1557429287-b2e26467fc2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <div className="mb-6 inline-block bg-green-600 px-4 py-2 rounded-full text-sm font-semibold">
              Serving Alabaster, Hoover & Pelham, Alabama
            </div>
            <h1 className="text-6xl font-bold mb-6 leading-tight">Transform Your Outdoor Space</h1>
            <p className="text-xl mb-8 text-gray-200">Experience premium lawn care services from the most trusted team in Central Alabama</p>
            <div className="flex gap-4">
              <Link
                to="/contact"
                className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition transform hover:scale-105"
              >
                Get a Free Quote
              </Link>
              <Link
                to="/gallery"
                className="bg-white text-green-800 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition transform hover:scale-105"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-4 p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition">
                <div className="text-green-600">{feature.icon}</div>
                <div>
                  <h3 className="font-bold text-lg">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">Professional Lawn Care Services</h2>
            <p className="text-xl text-gray-600">
              From regular maintenance to complete property transformations, we deliver excellence in every service
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
                <div className="text-green-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  to="/contact"
                  className="text-green-600 font-semibold hover:text-green-700 flex items-center gap-2"
                >
                  Request Service <span className="text-xl">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Area Section */}
      <div className="py-16 bg-green-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Proudly Serving Central Alabama</h2>
            <p className="text-xl mb-8">
              Our service area includes Alabaster, Hoover, Pelham, and surrounding communities. We're your local lawn care experts, 
              committed to making your property the envy of the neighborhood.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-green-800 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition transform hover:scale-105"
            >
              <Contact className="mr-2 h-5 w-5" />
              Schedule Your Service
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Property?</h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Join our satisfied customers in Alabaster, Hoover, and Pelham. Contact us today for a free consultation and estimate.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition transform hover:scale-105"
          >
            <Contact className="mr-2 h-5 w-5" />
            Get Started Today
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;