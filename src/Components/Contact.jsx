import { motion } from "framer-motion";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('Iamwarlord2903', 'template_sb6fle8', form.current, {
        publicKey: '89QckCPUo4NYcCpJG',
      })
      .then(
        () => {
            alert('Message sent successfully!');
        },
        (error) => {
            alert('Error sending message!', error.text);
        },
      );
  };

    return (
        <motion.div 
            whileInView={{ opacity: 1, x: 0 }} 
            initial={{ opacity: 0, x: 0 }} 
            transition={{ duration: 2.5, delay: 0.5 }} 
            className="border-b border-neutral-900 pb-20"
        >
            <h1 className="my-10 text-center text-4xl mb-24 ">Contact Me</h1>
            <div className="text-center tracking-tighter max-w-md items-center m-auto w-full bg-slate-800 rounded-lg p-8 shadow-md shadow-blue-900">
                <form ref={form} onSubmit={sendEmail}>
                    <div className="mb-4">
                        <label className="block text-left text-white text-lg font-medium mb-2" htmlFor="name">Your Name</label>
                        <input 
                            type="text" 
                            name="from_name" 
                            className="w-full px-3 py-2 border rounded-lg bg-gray-600 focus:border-blue-500 focus:outline-none" 
                            placeholder="Enter your Name" 
                            required 
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-left text-white text-lg font-medium mb-2" htmlFor="email">Email ID</label>
                        <input 
                            type="email" 
                            name="reply_to" 
                            className="w-full px-3 py-2 border rounded-lg bg-gray-600 focus:border-blue-500 focus:outline-none" 
                            placeholder="Enter your mail id" 
                            required 
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-left text-white text-lg font-medium mb-2" htmlFor="message">Your Message</label>
                        <textarea 
                            name="message" 
                            className="w-full px-3 py-2 border rounded-lg bg-gray-600 focus:border-blue-500 h-28 focus:outline-none" 
                            placeholder="Enter your message" 
                            required 
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="bg-slate-900 px-3 py-2 rounded-lg text-xl hover:outline-2 hover:outline"
                    >
                        Send Message
                    </button>
                    <span className="mx-4">
                        <button 
                            type="reset" 
                            className="bg-slate-900 px-3 py-2 rounded-lg text-xl hover:outline-2 hover:outline"
                        >
                            Reset
                        </button>
                    </span>
                </form>
            </div>
        </motion.div>
    );
}
