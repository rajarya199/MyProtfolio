"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState,useRef } from 'react';
import emailjs from '@emailjs/browser'
import { myinfo } from '@/constants/constant';

import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import ContactImg from '../public/assets/contact.jpg';
import { contactInfo,contInfo } from '@/constants/constant';

const Contact = () => {
    const [loading, setLoading] = useState(false);

    const [form,setForm]=useState({
        name:'',
        phone:'',
        subject:'',
        email:'',
        message:''
    })
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setForm({...form, [name]:value})

    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        setLoading(true);

        emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
            {
                from_name:form.name,
                to_name:'Rajan',
                from_email:form.email,
                message:form.message,
                subject:form.subject,
                phone:form.phone, 
            },
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        )
        .then(()=>{
            setLoading(false);
            alert("Thank you. I will get back to you as soon as possible.");
  
            setForm({
              name: "",
              email: "",
              message: "",
              subject:"",
              phone:""
            });
        },
    (error)=>{
        setLoading(false);
        console.error(error);
    
        alert("Ahh, something went wrong. Please try again.");
    })
    }
  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Contact
        </p>
        <h2 className='py-4'>Get In Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full '>
              <div>
                <Image
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                  src={ContactImg}
                  alt='/'
                />
              </div>
              <div>
                <h2 className='py-2'>Rajan Aryal</h2>
                <p> Computer Engineer,FullStack web Developer</p>
                <p className='py-4'>
                  I am available for freelance or full-time positions. Contact
                  me and let&apos;s talk.
                </p>
              </div>
              <div>
                <p className='uppercase pt-8'>Connect With Me</p>
                <div className='flex items-center justify-between py-4'>
                {contactInfo.map((contact, index) => (
              <a
                key={index}
                href={contact.url}
                target="_blank"
                rel="noreferrer"
                aria-label={contact.title}
              >
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <contact.icon className="w-6 h-6" />
                        </div>
                
              </a>
            ))}
            {contInfo.map((cont,index)=>(
              <Link
              key={index}
              href={cont.url}
              aria-label={cont.title}
            >
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                         <cont.icon   />
                      </div>
             
            </Link>
            ))}
                
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
              <form
                onSubmit={handleSubmit}
              >
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='name'
        
              value={form.name} 
              onChange={handleChange}
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>
                      Phone Number
                    </label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='phone'
                      value={form.phone}
                      onChange={handleChange}

                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='email'
                    name='email'
                    value={form.email}
                    onChange={handleChange}

                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Subject</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='text'
                    name='subject'
                    onChange={handleChange}
                    value={form.subject}

                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Message</label>
                  <textarea
                    className='border-2 rounded-lg p-3 border-gray-300'
                    rows='10'
                    name='message'
                    onChange={handleChange}
                        value={form.message}
                  ></textarea>
                </div>
                <button className='w-full p-4 text-gray-100 mt-4'>
                {loading ? "Sending..." : "Send message"}

                </button>
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
            
              <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <HiOutlineChevronDoubleUp
                  className='text-[#5651e5]'
                  size={30}
                />
              </div>
            
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;