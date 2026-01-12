'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { useRef, useState } from 'react';
import { toast } from 'sonner';
import { TbLoader2 } from 'react-icons/tb';
import axios from 'axios';

const info = [
  {
    id: 1,
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '+977-9860137124',
  },
  {
    id: 2,
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'basanta.shrestha055@gmail.com',
  },
  {
    id: 3,
    icon: <FaMapMarkerAlt />,
    title: 'Address',
    description: 'Budhanilkantha - 10, Kapan',
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef();

  const handleSendMail = async (e) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);
      await axios.post('/api/contact', formData);
      toast.success('Message sent successfully.');
    } catch (error) {
      console.error('Error sending message:', error.message);
      toast.error('Failed to send message. Please try again.');
    } finally {
      form.current.reset();
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className='py-6'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-7.5'>
          {/* form */}
          <div className='xl:w-[54%] order-2 xl:order-0'>
            <form
              ref={form}
              onSubmit={handleSendMail}
              className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'
            >
              <h3 className='text-4xl text-accent'>Contact Me</h3>
              <p className='text-white/60'>
                Looking for a motivated intern or junior developer? Let’s
                connect and see how I can contribute while learning and growing
                along the way.
              </p>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <Input
                  type='firstname'
                  placeholder='Firstname'
                  value={formData.firstname}
                  onChange={(e) =>
                    setFormData({ ...formData, firstname: e.target.value })
                  }
                />
                <Input
                  type='lastname'
                  placeholder='Lastname'
                  value={formData.lastname}
                  onChange={(e) =>
                    setFormData({ ...formData, lastname: e.target.value })
                  }
                />
                <Input
                  type='email'
                  placeholder='Email address'
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                <Input
                  type='phone'
                  placeholder='Phone number'
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>

              <Textarea
                className='h-50'
                placeholder='Type your message here.'
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />

              <Button type='submit' size='md' className='max-w-40'>
                {isSubmitting ? (
                  <TbLoader2 className='size-6 animate-spin' />
                ) : (
                  'Send message'
                )}
              </Button>
            </form>
          </div>

          {/* info */}
          <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-0 mb-8 xl:mb-0'>
            <ul className='flex flex-col gap-10'>
              {info.map((item) => {
                return (
                  <li key={item.id} className='flex items-center gap-6'>
                    <div className='w-13 h-13 xl:w-18 xl:h-18 bg-[#27272c] text-accent rounded-md flex items-center justify-center'>
                      <div className='text-[28px]'>{item.icon}</div>
                    </div>
                    <div className='flex-1'>
                      <p className='text-white/60'>{item.title}</p>
                      <h3 className='text-xl'>{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
