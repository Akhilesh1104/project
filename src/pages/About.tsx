import React from 'react';
import { MapPin, Award, Users, Clock } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black pt-16 lg:pt-20">
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://img.freepik.com/free-photo/luxury-hotel-reception-hall-lounge-restaurant-with-high-ceiling_105762-1771.jpg?ga=GA1.1.1184042227.1748181306&semt=ais_hybrid&w=740" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl max-w-2xl">
            Dedicated to excellence in natural stone since 1995
          </p>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Story</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Marble&Stone was founded in 1995 by Antonio Rossi, a third-generation stonemason with a passion for natural stone and its timeless beauty. What began as a small workshop has grown into a premier destination for marble, granite, and tile products.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                For over 25 years, we've been dedicated to sourcing the finest materials from quarries around the world. Our commitment to quality, craftsmanship, and customer satisfaction has made us the trusted choice for homeowners, designers, and architects.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Today, we continue to honor our tradition of excellence while embracing innovation in stone fabrication and installation techniques. Each project we undertake reflects our heritage and our promise to deliver exceptional products that stand the test of time.
              </p>
            </div>
            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/5723564/pexels-photo-5723564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Marble craftsman at work" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute bottom-[-20px] right-[-20px] w-40 h-40 bg-amber-600 rounded-lg z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Values</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              At Marble&Stone, our values guide everything we do. They reflect our commitment to excellence and our dedication to our customers and craft.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-black p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-800">
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mb-4">
                <Award className="text-amber-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Quality</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We source only the finest materials and maintain rigorous quality standards at every step of our process.
              </p>
            </div>

            <div className="bg-white dark:bg-black p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-800">
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mb-4">
                <Users className="text-amber-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Craftsmanship</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our artisans combine traditional techniques with modern technology to create exceptional finished products.
              </p>
            </div>

            <div className="bg-white dark:bg-black p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-800">
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mb-4">
                <MapPin className="text-amber-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Sustainability</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We're committed to responsible sourcing and environmentally conscious practices throughout our operations.
              </p>
            </div>

            <div className="bg-white dark:bg-black p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-800">
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mb-4">
                <Clock className="text-amber-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Service</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We provide personalized attention and expertise to ensure our customers find the perfect materials for their projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Team</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Meet the dedicated professionals who make Marble&Stone exceptional. Our team combines decades of experience with a passion for natural stone.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[
              {
                name: "Antonio Rossi",
                title: "Founder & CEO",
                image: "https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              },
              {
                name: "Maria Silva",
                title: "Design Consultant",
                image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              },
              {
                name: "James Chen",
                title: "Master Craftsman",
                image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              },
              {
                name: "Sophia Martinez",
                title: "Project Manager",
                image: "https://images.pexels.com/photos/3771807/pexels-photo-3771807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              }
            ].map((member, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-black rounded-lg overflow-hidden shadow-md border border-gray-200 dark:border-gray-800"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{member.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{member.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We're proud to have helped countless clients transform their spaces with beautiful natural stone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Working with Marble&Stone was an absolute pleasure. Their expertise helped us select the perfect marble for our kitchen renovation, and the results exceeded our expectations.",
                author: "Jennifer & David Smith",
                project: "Kitchen Renovation"
              },
              {
                quote: "The quality of their granite is unmatched. Our countertops are not only beautiful but have withstood years of heavy use in our busy restaurant kitchen.",
                author: "Michael Johnson",
                project: "Commercial Restaurant"
              },
              {
                quote: "The team at Marble&Stone guided us through the entire process, from selection to installation. Their attention to detail and craftsmanship transformed our bathroom into a spa-like retreat.",
                author: "Sarah Williams",
                project: "Bathroom Remodel"
              }
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-black p-8 rounded-lg shadow-md border border-gray-200 dark:border-gray-800"
              >
                <svg className="text-amber-600 mb-4" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.6667 13.3333H5.33333V8H10.6667V13.3333ZM26.6667 13.3333H21.3333V8H26.6667V13.3333ZM10.6667 29.3333H5.33333V24H10.6667V29.3333ZM26.6667 29.3333H21.3333V24H26.6667V29.3333Z" fill="currentColor"/>
                </svg>
                <p className="text-gray-600 dark:text-gray-400 mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{testimonial.project}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;