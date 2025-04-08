
import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const ContactSection = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const phoneNumber = "8106868686";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = form.elements.namedItem('email') as HTMLInputElement;
    
    // Set form as submitted to display success message and phone number
    setFormSubmitted(true);
    
    // In a real application, you'd handle the form submission to a backend service
    // For now, we'll just demonstrate with a mailto link
    window.location.href = `mailto:sangeethaholidayspvtltd@gmail.com?subject=Travel%20Inquiry&body=Hello,%20I%20would%20like%20more%20information%20about...%0A%0AFrom:%20${email.value}`;
  };

  return (
    <section id="contact" className="section bg-gray-100">
      <div className="container mx-auto">
        <h2 className="section-title text-gray-900">
          Get in <span className="text-ocean-500">Touch</span>
        </h2>
        <p className="section-subtitle">
          Have questions about a destination or need help planning your trip? We're here to assist you.
        </p>
        
        <div className="flex flex-col lg:flex-row gap-12 max-w-5xl mx-auto">
          <div className="lg:w-1/2">
            <div className="bg-white p-8 rounded-lg shadow-md h-full">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 text-ocean-500 mr-3">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">Email Us</h4>
                    <a href="mailto:sangeethaholidayspvtltd@gmail.com" className="text-gray-600 hover:text-ocean-500 transition-colors">
                      sangeethaholidayspvtltd@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 text-ocean-500 mr-3">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">Call Us</h4>
                    <p className="text-gray-600">{phoneNumber}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 text-ocean-500 mr-3">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">Visit Us</h4>
                    <p className="text-gray-600">
                      Hyderabad<br />
                      India
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-medium mb-3">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-600 hover:text-ocean-500 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-ocean-500 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-ocean-500 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-ocean-500 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-white p-8 rounded-lg shadow-md">
              {formSubmitted ? (
                <div className="text-center py-8">
                  <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-6">
                    <h3 className="text-2xl font-bold mb-3">Message Sent Successfully!</h3>
                    <p className="mb-4">Thank you for reaching out to us. One of our travel experts will get back to you shortly.</p>
                    <div className="flex items-center justify-center mt-4">
                      <Phone size={24} className="text-ocean-500 mr-2" />
                      <p className="text-xl font-bold">{phoneNumber}</p>
                    </div>
                    <p className="mt-2">Call us directly for immediate assistance</p>
                  </div>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="bg-ocean-500 hover:bg-ocean-600 text-white px-6 py-3 rounded-md transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-gray-700 mb-2">Your Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent"
                        required
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="inline-flex items-center bg-ocean-500 hover:bg-ocean-600 text-white px-6 py-3 rounded-md transition-colors"
                    >
                      <Send size={18} className="mr-2" />
                      Send Message
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
