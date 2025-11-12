
import React, { useState, FormEvent } from 'react';

const Contact: React.FC = () => {
    const [status, setStatus] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setStatus('Thank you for your message! We will get back to you shortly.');
        const form = e.target as HTMLFormElement;
        form.reset();
    };

  return (
    <div className="py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Get In <span className="text-cyan-400">Touch</span>
        </h1>
        <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
          We'd love to hear from you. Whether you have a question about our products, services, or anything else, our team is ready to answer all your questions.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 bg-gray-800/50 p-8 rounded-lg shadow-lg">
        <div className="space-y-8">
            <div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-2">Contact Information</h3>
                <p className="text-gray-300">Fill up the form and our team will get back to you within 24 hours.</p>
            </div>
            <div className="flex items-center space-x-4">
                <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <span className="text-gray-300">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-4">
                <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <span className="text-gray-300">contact@optimusai.com</span>
            </div>
            <div className="flex items-center space-x-4">
                <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <span className="text-gray-300">123 Robot Lane, Tech City, 90210</span>
            </div>
        </div>
        <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-gray-300">Full Name</label>
                <input type="text" id="name" name="name" required className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"/>
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-gray-300">Email Address</label>
                <input type="email" id="email" name="email" required className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"/>
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                <textarea id="message" name="message" rows={4} required className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-colors">
                  Send Message
                </button>
              </div>
              {status && <p className="text-center text-green-400">{status}</p>}
            </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
