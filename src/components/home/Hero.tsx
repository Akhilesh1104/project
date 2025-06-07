import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/2341290/pexels-photo-2341290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Luxury marble kitchen" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl text-white">
          <div
            className="overflow-hidden mb-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              <span className="block">Transform Your Space</span>
              <span className="block text-amber-500">With Natural Beauty</span>
            </h1>
          </div>
          
          <div
            className="overflow-hidden mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <p className="text-lg md:text-xl text-gray-200 max-w-lg">
              Discover our premium collection of marble, granite, and tiles to elevate your home with timeless elegance.
            </p>
          </div>
          
          <div
            className="flex flex-wrap gap-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Button
              href="/shop"
              variant="primary"
              size="lg"
              className="group"
            >
              Explore Collection 
              <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button
              href="/contact"
              variant="outline"
              size="lg"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white flex items-start justify-center p-1">
          <div className="w-1 h-3 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;