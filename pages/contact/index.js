import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { BsArrowRight } from 'react-icons/bs';
import { fadeIn } from '../../variants';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [messageStatus, setMessageStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Ensure all data fields are filled
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert("All fields are required.");
      return;
    }
  
    const templateParams = {
      from_name: formData.name,
      to_name: "Dr Ibebuchi",
      from_email: formData.email,
      message: formData.message,
      subject: formData.subject
    };
  
    emailjs.send(
      'service_rq6qdbv',   // Your service ID
      'template_b3fvwnb',  // Your template ID
      templateParams,
      '_IyCa4zztzFJRcw-G'  // Your public key
    )
    .then(
      (result) => {
        console.log(result.text);
        // Handle successful submission (e.g., display a success message)
        setMessageStatus('Your message has been sent successfully!');
        // Reset the form if needed
        setFormData({ name: '', email: '', subject: '', message: '' });
      },
      (error) => {
        console.log(error.text);
        // Handle errors (e.g., display an error message)
        setMessageStatus('Failed to send message. Please try again.');
      }
    );
  };
  
  return (
    <div className='h-full bg-primary/30'>
      <style jsx>{`
        .input, .textarea {
          text-transform: none;
        }
      `}</style>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        <div className='flex flex-col w-full max-w-[700px]'>
          <motion.h2 
            variants={fadeIn('up', 0.2)} 
            initial='hidden' 
            animate='show' 
            exit='hidden' 
            className='h2 text-center mb-12'
          >
            Connect with <span className='text-accent'>me.</span>
          </motion.h2>

          {messageStatus && <div className="alert">{messageStatus}</div>}

          <motion.form 
            ref={formRef}
            onSubmit={handleSubmit}
            variants={fadeIn('up', 0.2)} 
            initial='hidden' 
            animate='show' 
            exit='hidden' 
            className='flex-1 flex flex-col gap-6 w-full mx-auto'
          >
            <div className='flex gap-x-6 w-full'>
              <input type='text' name='name' placeholder='Name' className='input' onChange={handleChange} />
              <input type='email' name='email' placeholder='Email' className='input' onChange={handleChange} />
            </div> 
            <input type='text' name='subject' placeholder='Subject' className='input' onChange={handleChange} />
            <textarea name='message' placeholder='Message' className='textarea' onChange={handleChange}></textarea>
            <button type='submit' className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>
                Let&apos;s talk
              </span>
              <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]'/>
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
