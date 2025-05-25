import React from 'react';
import Button from '../ui/Button';

const AboutPreview: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            className="relative"
            data-aos="fade-right"
          >
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/3220846/pexels-photo-3220846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Craftsman working with marble" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 hidden lg:block">
              <div className="bg-amber-600 text-white p-6 rounded-lg shadow-lg max-w-xs">
                <p className="text-2xl font-bold mb-1">25+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </div>
          </div>
          
          <div
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-dark-text mb-6">
              Crafting Excellence in Natural Stone
            </h2>
            <p className="text-gray-600 dark:text-dark-muted mb-6">
              Since 1995, KD Marble & Granite has been dedicated to sourcing and providing the finest natural stone products from around the world. Our commitment to quality and craftsmanship has made us the preferred choice for homeowners, architects, and designers.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mt-1">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3L4.5 8.5L2 6" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-dark-text">Premium Selection</h3>
                  <p className="text-gray-600 dark:text-dark-muted">Curated collection of the highest quality natural stone from ethical sources worldwide.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mt-1">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3L4.5 8.5L2 6" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-dark-text">Expert Craftsmanship</h3>
                  <p className="text-gray-600 dark:text-dark-muted">Skilled artisans with decades of experience in cutting, polishing, and installing natural stone.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mt-1">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3L4.5 8.5L2 6" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-dark-text">Personalized Service</h3>
                  <p className="text-gray-600 dark:text-dark-muted">Tailored solutions and expert guidance for your specific project needs.</p>
                </div>
              </div>
            </div>
            <Button 
              href="/about"
              variant="primary"
            >
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;