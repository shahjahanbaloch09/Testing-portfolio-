import React, { useState } from 'react';
import Section from './Section';
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from './icons/SocialIcons';
import useFadeIn from '../useFadeIn';

const socialLinks = [
  { href: '#', icon: <LinkedinIcon />, name: 'LinkedIn' },
  { href: '#', icon: <TwitterIcon />, name: 'Twitter/X' },
  { href: '#', icon: <InstagramIcon />, name: 'Instagram' },
  { href: '#', icon: <FacebookIcon />, name: 'Facebook' },
];

const Contact: React.FC = () => {
  const [ref, isVisible] = useFadeIn<HTMLDivElement>();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Section id="contact" title="Get In Touch">
      <div ref={ref} className={`fade-in ${isVisible ? 'visible' : ''} max-w-4xl mx-auto grid md:grid-cols-2 gap-12 bg-white p-8 md:p-12 rounded-2xl shadow-xl`}>
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-3xl font-bold text-slate-800 mb-4">Let's Connect</h3>
            <p className="text-slate-600 mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of something meaningful. Feel free to reach out.
            </p>
          </div>
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.href} aria-label={link.name} className="text-slate-500 hover:text-sky-600 transition-colors duration-300">
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700">Name</label>
            <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="mt-1 block w-full px-4 py-3 bg-slate-100 border border-slate-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
            <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="mt-1 block w-full px-4 py-3 bg-slate-100 border border-slate-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message</label>
            <textarea name="message" id="message" rows={4} required value={formData.message} onChange={handleChange} className="mt-1 block w-full px-4 py-3 bg-slate-100 border border-slate-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"></textarea>
          </div>
          <button type="submit" className="w-full bg-sky-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-colors duration-300">
            Send Message
          </button>
        </form>
      </div>
    </Section>
  );
};

export default Contact;