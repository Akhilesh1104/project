import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'marble',
    name: 'Marble',
    description: 'Timeless elegance with unique veining and patterns',
    image: 'https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'granite',
    name: 'Granite',
    description: 'Durable and distinctive natural stone for any space',
    image: 'https://images.pexels.com/photos/9799332/pexels-photo-9799332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'tiles',
    name: 'Tiles',
    description: 'Versatile options for floors, walls, and creative designs',
    image: 'https://images.pexels.com/photos/7031606/pexels-photo-7031606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const CategorySection: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Explore Our Categories
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            From luxurious marble to durable granite and versatile tiles, discover the perfect materials for your project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link 
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative block h-96 overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img 
                src={category.image} 
                alt={category.name} 
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-semibold mb-2">{category.name}</h3>
                <p className="text-gray-200 mb-4">{category.description}</p>
                <span className="inline-flex items-center text-sm font-medium text-amber-400 group-hover:text-amber-300 transition-colors duration-300">
                  Shop Collection
                  <svg 
                    className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;