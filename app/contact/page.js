'use client';

import { useState } from 'react';
import Link from 'next/link';

const brandColors = {
  primary: '#1a2238', // deep blue
  accent: '#9daaf2', // soft blue
  highlight: '#ff6a3d', // orange
  background: '#f4f6fb', // light background
  card: '#232946', // card bg
  text: '#121629', // dark text
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState(''); // 'sending', 'success', 'error'

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     setStatus('sending');

  //     try {
  //       const response = await fetch('/api/contact', {
  //         method: 'POST',
  //         headers: { 'Content-Type': 'application/json' },
  //         body: JSON.stringify(formData),
  //       });

  //       if (response.ok) {
  //         setStatus('success');
  //         setFormData({ name: '', email: '', service: '', message: '' });
  //       } else {
  //         setStatus('error');
  //       }
  //     } catch (error) {
  //       setStatus('error');
  //     }
  //   };

  //   Since we're going static, the API route needs to become a separate Lambda. Update your contact page to call the Lambda directly
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot check: if filled, silently fail
    if (honeypot) {
      return;
    }

    setStatus('sending');

    try {
      const apiUrl =
        process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api/contact';

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', service: '', message: '' });
        setHoneypot('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div
      className='container mx-auto px-4 py-16 max-w-2xl'
      style={{ background: brandColors.background, borderRadius: 16 }}
    >
      <Link
        href='/'
        className='inline-block mb-6 font-semibold'
        style={{ color: brandColors.primary }}
      >
        ← Back to Home
      </Link>
      <h1
        className='text-4xl font-bold mb-8'
        style={{ color: brandColors.highlight }}
      >
        Get in Touch
      </h1>

      <div
        className='mb-8 p-4 border border-gray-200 rounded-lg'
        style={{ background: brandColors.card }}
      >
        <div
          className='mb-2 font-semibold'
          style={{ color: brandColors.accent }}
        >
          Contact Information
        </div>
        <div style={{ color: brandColors.accent }}>Evan Marshall</div>
        <div style={{ color: brandColors.accent }}>
          Phone:{' '}
          <a
            href='tel:+19025551234'
            style={{
              color: brandColors.highlight,
              textDecoration: 'underline',
            }}
          >
            (902) 555-1234
          </a>
        </div>
        <div style={{ color: brandColors.accent }}>
          Email:{' '}
          <a
            href='mailto:me@evanmarshall.dev'
            style={{
              color: brandColors.highlight,
              textDecoration: 'underline',
            }}
          >
            me@evanmarshall.dev
          </a>
        </div>
      </div>

      {status === 'success' && (
        <div className='bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4'>
          Thanks! I&apos;ll get back to you within 24 hours.
        </div>
      )}

      {status === 'error' && (
        <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4'>
          Something went wrong. Please email me directly at{' '}
          <a href='mailto:me@evanmarshall.dev' className='underline'>
            me@evanmarshall.dev
          </a>
        </div>
      )}

      <form onSubmit={handleSubmit} className='space-y-6'>
        <div>
          <label
            className='block text-sm font-medium mb-2'
            style={{ color: brandColors.primary }}
          >
            Name
          </label>
          <input
            type='text'
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className='w-full px-4 py-2 border rounded-lg focus:ring-2'
            style={{
              borderColor: brandColors.accent,
              color: brandColors.text,
              background: 'white',
            }}
          />
        </div>

        <input
          type='text'
          name='website'
          style={{ display: 'none' }}
          tabIndex='-1'
          autoComplete='off'
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />

        <div>
          <label
            className='block text-sm font-medium mb-2'
            style={{ color: brandColors.primary }}
          >
            Email
          </label>
          <input
            type='email'
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className='w-full px-4 py-2 border rounded-lg focus:ring-2'
            style={{
              borderColor: brandColors.accent,
              color: brandColors.text,
              background: 'white',
            }}
          />
        </div>

        <div>
          <label
            className='block text-sm font-medium mb-2'
            style={{ color: brandColors.primary }}
          >
            Service Interested In
          </label>
          <select
            required
            value={formData.service}
            onChange={(e) =>
              setFormData({ ...formData, service: e.target.value })
            }
            className='w-full px-4 py-2 border rounded-lg focus:ring-2'
            style={{
              borderColor: brandColors.accent,
              color: brandColors.text,
              background: 'white',
            }}
          >
            <option value=''>Select a service</option>
            <option value='tech-support'>General Tech Support</option>
            <option value='media-centre'>Media Centre Setup</option>
            {/* <option value='pc-building'>Custom PC Building</option> */}
            <option value='gaming-setup'>Gaming System Setup</option>
          </select>
        </div>

        <div>
          <label
            className='block text-sm font-medium mb-2'
            style={{ color: brandColors.primary }}
          >
            Message
          </label>
          <textarea
            required
            rows='5'
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className='w-full px-4 py-2 border rounded-lg focus:ring-2'
            style={{
              borderColor: brandColors.accent,
              color: brandColors.text,
              background: 'white',
            }}
          />
        </div>

        <button
          type='submit'
          disabled={status === 'sending'}
          className='w-full py-3 rounded-lg font-semibold transition'
          style={{ background: brandColors.primary, color: 'white' }}
        >
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}
