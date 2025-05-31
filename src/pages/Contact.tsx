import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import Button from '../components/ui/Button';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission to a backend
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    
    // Reset submission status after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black pt-16 lg:pt-20">
      {/* Hero Section */}
      <div className="bg-gray-100 dark:bg-black py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Contact Us
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl">
            Have questions or ready to start your project? Our team is here to help. Reach out to us for inquiries about our products, services, or to schedule a consultation.
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Send Us a Message
              </h2>
              
              {formSubmitted && (
                <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg">
                  <p className="font-medium">Thank you for your message!</p>
                  <p>We'll get back to you as soon as possible.</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-600"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-600"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-600"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-600"
                    >
                      <option value="">Select a subject</option>
                      <option value="Product Inquiry">Product Inquiry</option>
                      <option value="Custom Order">Custom Order</option>
                      <option value="Consultation Request">Consultation Request</option>
                      <option value="General Question">General Question</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-600"
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  variant="primary"
                  className="flex items-center"
                >
                  <Send size={18} className="mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h2>
              
              <div className="bg-white dark:bg-black rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-800">
                <div className="aspect-video relative">
                  <img 
                    src="https://img.freepik.com/free-photo/3d-rendering-modern-luxury-hotel-office-reception-meeting-lounge_105762-2023.jpg?ga=GA1.1.1184042227.1748181306&semt=ais_hybrid&w=740"
                    alt="Marble&Stone showroom" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-semibold mb-2">Visit Our Showroom</h3>
                    <p>Explore our collection in person and speak with our experts</p>
                  </div>
                </div>
                
                <div className="p-6 space-y-6">
                  <div className="flex items-start">
                    <MapPin size={24} className="text-amber-600 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white mb-1">Address</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        133/281 A-M Block Kidwai Nagar,<br />
                        Kanpur Nagar, UttarPradesh(208023)
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone size={24} className="text-amber-600 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white mb-1">Phone</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        <a href="tel:+919235879986" className="hover:text-amber-600 transition-colors">
                          +91 9235879986
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail size={24} className="text-amber-600 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white mb-1">Email</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        <a href="mailto:contact@kdmarble.com" className="hover:text-amber-600 transition-colors">
                          contact@kdmarble.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock size={24} className="text-amber-600 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white mb-1">Business Hours</h3>
                      <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                        <li className="flex justify-between">
                          <span>Monday - Friday:</span>
                          <span>9:00 AM - 6:00 PM</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Saturday:</span>
                          <span>10:00 AM - 4:00 PM</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Sunday:</span>
                          <span>Closed</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-gray-50 dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Find answers to common questions about our products and services.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "Do you offer free consultations?",
                  answer: "Yes, we offer complimentary consultations to discuss your project needs and help you select the right materials. You can schedule a consultation by phone, email, or using the form on this page."
                },
                {
                  question: "Can I request samples before making a purchase?",
                  answer: "Absolutely! We offer sample services for most of our products. Small samples are available at no cost, while larger samples may require a nominal fee that can be applied to your purchase if you decide to order."
                },
                {
                  question: "Do you provide installation services?",
                  answer: "Yes, we have a team of experienced installers who can professionally install your marble, granite, or tile products. We also work with trusted contractor partners if your project requires additional construction services."
                },
                {
                  question: "What is your return policy?",
                  answer: "Custom-cut stone products cannot be returned as they are specifically fabricated for your project. Stock tiles can be returned within 30 days in original packaging, subject to a 20% restocking fee. Please contact us for specific details about your order."
                },
                {
                  question: "How should I maintain my natural stone surfaces?",
                  answer: "Natural stone requires proper care to maintain its beauty. We recommend using pH-neutral cleaners specifically designed for natural stone. Avoid acidic or abrasive cleaners. Sealing your stone every 6-12 months is also recommended for most applications."
                }
              ].map((faq, index) => (
                <details 
                  key={index}
                  className="group bg-white dark:bg-black rounded-lg shadow-sm border border-gray-200 dark:border-gray-800"
                >
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6">
                    <span className="text-gray-900 dark:text-white">{faq.question}</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" width="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="text-gray-500 dark:text-gray-400">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600 dark:text-gray-400">
                    <p>{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;