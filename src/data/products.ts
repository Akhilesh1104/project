import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "Carrara White Marble",
    type: "marble",
    price: 79.99,
    unit: "sq ft",
    image: "https://img.freepik.com/free-photo/stone-texture-background-copy-space_1194-602038.jpg?ga=GA1.1.1184042227.1748181306&semt=ais_hybrid&w=740",
    description: "Classic Italian Carrara marble with a bright white background and soft gray veining. Perfect for kitchen countertops, bathrooms, and flooring.",
    details: {
      origin: "Italy",
      finish: "Polished",
      recommended: ["Countertops", "Bathrooms", "Flooring"],
      dimensions: "12\" x 24\" x 3/8\"",
      inStock: true
    },
    featured: true
  },
  {
    id: 2,
    name: "Nero Marquina Marble",
    type: "marble",
    price: 89.99,
    unit: "sq ft",
    image: "https://images.pexels.com/photos/3220846/pexels-photo-3220846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Luxurious black marble with striking white veins. This Spanish marble adds dramatic contrast and sophistication to any space.",
    details: {
      origin: "Spain",
      finish: "Polished",
      recommended: ["Feature Walls", "Vanity Tops", "Flooring"],
      dimensions: "12\" x 24\" x 3/8\"",
      inStock: true
    },
    featured: true
  },
  {
    id: 3,
    name: "Calacatta Gold Marble",
    type: "marble",
    price: 129.99,
    unit: "sq ft",
    image: "https://images.pexels.com/photos/1267327/pexels-photo-1267327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Premium Italian marble with distinctive gold and gray veining on a bright white background. The epitome of luxury.",
    details: {
      origin: "Italy",
      finish: "Polished",
      recommended: ["Luxury Countertops", "Statement Walls", "Flooring"],
      dimensions: "12\" x 24\" x 3/8\"",
      inStock: true
    },
    featured: true
  },
  {
    id: 4,
    name: "Baltic Brown Granite",
    type: "granite",
    price: 69.99,
    unit: "sq ft",
    image: "https://images.pexels.com/photos/5603868/pexels-photo-5603868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Durable Finnish granite with a rich brown base and black and burgundy mineral deposits. Known for its strength and unique pattern.",
    details: {
      origin: "Finland",
      finish: "Polished",
      recommended: ["Kitchen Countertops", "Outdoor Kitchens", "Commercial Spaces"],
      dimensions: "24\" x 24\" x 3/4\"",
      inStock: true
    },
    featured: false
  },
  {
    id: 5,
    name: "Blue Pearl Granite",
    type: "granite",
    price: 89.99,
    unit: "sq ft",
    image: "https://images.pexels.com/photos/6508968/pexels-photo-6508968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Stunning Norwegian granite with iridescent blue undertones and black mineral deposits. Creates a uniquely elegant look.",
    details: {
      origin: "Norway",
      finish: "Polished",
      recommended: ["Kitchen Islands", "Bathroom Vanities", "Accent Walls"],
      dimensions: "24\" x 24\" x 3/4\"",
      inStock: true
    },
    featured: true
  },
  {
    id: 6,
    name: "Absolute Black Granite",
    type: "granite",
    price: 79.99,
    unit: "sq ft",
    image: "https://images.pexels.com/photos/9799332/pexels-photo-9799332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Pure black granite from India with a consistent color and minimal pattern. The perfect choice for a sleek, modern aesthetic.",
    details: {
      origin: "India",
      finish: "Honed",
      recommended: ["Modern Kitchens", "Commercial Spaces", "Flooring"],
      dimensions: "24\" x 24\" x 3/4\"",
      inStock: true
    },
    featured: false
  },
  {
    id: 7,
    name: "Travertine Classic",
    type: "tiles",
    price: 59.99,
    unit: "sq ft",
    image: "https://images.pexels.com/photos/5178080/pexels-photo-5178080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Natural beige travertine tiles with subtle texture and color variations. Brings warmth and timeless elegance to any space.",
    details: {
      origin: "Turkey",
      finish: "Honed",
      recommended: ["Living Areas", "Entryways", "Bathrooms"],
      dimensions: "18\" x 18\" x 1/2\"",
      inStock: true
    },
    featured: false
  },
  {
    id: 8,
    name: "Porcelain Wood-Look Tiles",
    type: "tiles",
    price: 49.99,
    unit: "sq ft",
    image: "https://images.pexels.com/photos/6958527/pexels-photo-6958527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Modern porcelain tiles with realistic wood grain appearance. Combines the beauty of hardwood with the durability of ceramic.",
    details: {
      origin: "Spain",
      finish: "Textured",
      recommended: ["Living Areas", "Kitchens", "High-Traffic Areas"],
      dimensions: "8\" x 48\" x 3/8\"",
      inStock: true
    },
    featured: false
  },
  {
    id: 9,
    name: "Hexagon Mosaic Tiles",
    type: "tiles",
    price: 69.99,
    unit: "sq ft",
    image: "https://images.pexels.com/photos/4992444/pexels-photo-4992444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Contemporary hexagon mosaic tiles in varying shades of gray. Perfect for creating statement walls and unique design features.",
    details: {
      origin: "Italy",
      finish: "Matte",
      recommended: ["Backsplashes", "Shower Floors", "Accent Walls"],
      dimensions: "2\" hexagons",
      inStock: true
    },
    featured: true
  },
  {
    id: 10,
    name: "Statuario Marble",
    type: "marble",
    price: 119.99,
    unit: "sq ft",
    image: "https://images.pexels.com/photos/7031877/pexels-photo-7031877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Premium Italian marble with bold gray veining on a bright white background. Adds timeless luxury to any space.",
    details: {
      origin: "Italy",
      finish: "Polished",
      recommended: ["Luxury Bathrooms", "Kitchen Countertops", "Feature Walls"],
      dimensions: "12\" x 24\" x 3/8\"",
      inStock: true
    },
    featured: false
  },
  {
    id: 11,
    name: "Tan Brown Granite",
    type: "granite",
    price: 74.99,
    unit: "sq ft",
    image: "https://images.pexels.com/photos/4992438/pexels-photo-4992438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Indian granite with a warm brown base and black mineral deposits. Durable and resistant to stains and scratches.",
    details: {
      origin: "India",
      finish: "Polished",
      recommended: ["Kitchen Countertops", "Outdoor Areas", "Commercial Spaces"],
      dimensions: "24\" x 24\" x 3/4\"",
      inStock: true
    },
    featured: false
  },
  {
    id: 12,
    name: "Subway Ceramic Tiles",
    type: "tiles",
    price: 39.99,
    unit: "sq ft",
    image: "https://images.pexels.com/photos/5490670/pexels-photo-5490670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Classic white ceramic subway tiles with a glossy finish. Timeless, versatile, and perfect for traditional or modern spaces.",
    details: {
      origin: "United States",
      finish: "Glossy",
      recommended: ["Kitchen Backsplashes", "Shower Walls", "Bathroom Walls"],
      dimensions: "3\" x 6\" x 1/4\"",
      inStock: true
    },
    featured: false
  }
];

export const categories = [
  { id: "all", name: "All Products" },
  { id: "marble", name: "Marble" },
  { id: "granite", name: "Granite" },
  { id: "tiles", name: "Tiles" }
];