'use client';

import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import Link from 'next/link';
import Image from 'next/image';
import SliderButtons from '@/components/SliderButtons';

const projects = [
  {
    id: 1,
    num: '01',
    category: 'Frontend',
    title: 'Amazon Clone',
    description:
      'An Amazon-inspired e-commerce web app where I practiced core JavaScript concepts by implementing features like product listings, a shopping cart, and a simple checkout flow.',
    stack: [
      {
        id: 1,
        name: 'Html 5',
      },
      {
        id: 2,
        name: 'Css 3',
      },
      {
        id: 3,
        name: 'Javascript',
      },
    ],
    image: '/assets/projects/amazon.png',
    live: 'https://javascript-amazon-clone-alpha.vercel.app/',
    github: 'https://github.com/basantashrestha055/javascript-amazon-clone',
  },
  {
    id: 2,
    num: '02',
    category: 'Fullstack',
    title: 'Binkeyit',
    description:
      'I built an e-commerce web app using the MERN stack, recreating core features to practice full-stack development in a real-world setting. The project helped me connect frontend, backend, and database seamlessly while also deploying it for live use.',
    stack: [
      {
        id: 1,
        name: 'React.js',
      },
      {
        id: 2,
        name: 'Node.js',
      },
      {
        id: 3,
        name: 'Express.js',
      },
      {
        id: 4,
        name: 'MongoDB',
      },
      {
        id: 5,
        name: 'Tailwind.css',
      },
      {
        id: 6,
        name: 'Cloudinary',
      },
      {
        id: 7,
        name: 'Stripe',
      },
    ],
    image: '/assets/projects/blinkit.png',
    live: 'https://blinkit-x4ew.onrender.com/',
    github: 'https://github.com/basantashrestha055/blinkit',
  },
  {
    id: 3,
    num: '03',
    category: 'Fullstack',
    title: 'Streamify',
    description:
      'Streamify is a project I built to bring people closer through real-time chat and video calls. I used the Stream API to make conversations feel instant and seamless, whether it’s sending a quick message or jumping on a face-to-face call. The idea was to create something practical, interactive, and easy to use, while helping me explore how modern APIs power real-time communication.',
    stack: [
      {
        id: 1,
        name: 'React.js',
      },
      {
        id: 2,
        name: 'Node.js',
      },
      {
        id: 3,
        name: 'Express.js',
      },
      {
        id: 4,
        name: 'MongoDB',
      },
      {
        id: 5,
        name: 'Tailwind.css',
      },
      {
        id: 6,
        name: 'Tanstack Query',
      },
      {
        id: 7,
        name: 'Stream',
      },
    ],
    image: '/assets/projects/streamify.png',
    live: 'https://streamify-b2y6.onrender.com/',
    github: 'https://github.com/basantashrestha055/streamify',
  },
  {
    id: 4,
    num: '04',
    category: 'Fullstack',
    title: 'Chatify',
    description:
      'Chatify is a real-time messaging app built with the MERN stack. I used Socket.io to handle live messaging between users, and tools like Zustand, Cloudinary, and Tailwind to manage state, media, and design. I focused on keeping the design simple and clean, while also learning how real-time features work behind the scenes.',
    stack: [
      {
        id: 1,
        name: 'React.js',
      },
      {
        id: 2,
        name: 'Node.js',
      },
      {
        id: 3,
        name: 'Express.js',
      },
      {
        id: 4,
        name: 'MongoDB',
      },
      {
        id: 5,
        name: 'Tailwind.css',
      },
      {
        id: 6,
        name: 'Cloudinary',
      },
      {
        id: 7,
        name: 'Zustand',
      },
      {
        id: 8,
        name: 'Arcjet',
      },
      {
        id: 9,
        name: 'Socket.io',
      },
    ],
    image: '/assets/projects/chatify.png',
    live: 'https://chatify-1-t07b.onrender.com/',
    github: 'https://github.com/basantashrestha055/chatify',
  },
  {
    id: 5,
    num: '05',
    category: 'Fullstack',
    title: 'Snapcart [COMING SOON]',
    description:
      'A grocery delivery website with real-time map tracking. The project focuses on real-time location updates and map integration.',
    stack: [],
    image: '/assets/coming_soon.jpg',
  },
];

const Projects = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row xl:gap-7.5'>
          <div className='w-full xl:w-[50%] xl:h-115 flex flex-col xl:justify-between order-2 xl:order-0'>
            <div className='flex flex-col gap-7.5'>
              <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
                {project.num}
              </div>
              <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>
                {project.category} project
              </h2>
              <p className='text-white/60'>{project.description}</p>
              <ul className='flex flex-wrap gap-3'>
                {project.stack.map((item, index) => {
                  return (
                    <li key={item.id} className='text-xl text-accent'>
                      {item.name}
                      {index !== project.stack.length - 1 && ','}
                    </li>
                  );
                })}
              </ul>
              <div className='border border-white/20'></div>
              <div className='flex items-center gap-4'>
                {/* Live project */}
                {project.live && (
                  <Link href={project.live} target='_blank'>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className='w-17.5 h-17.5 rounded-full bg-white/5 flex justify-center items-center cursor-pointer group'>
                          <BsArrowUpRight className='text-white text-3xl group-hover:text-accent' />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}

                {/* Github */}
                {project.github && (
                  <Link href={project.github} target='_blank'>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className='w-17.5 h-17.5 rounded-full bg-white/5 flex justify-center items-center cursor-pointer group'>
                          <BsGithub className='text-white text-3xl group-hover:text-accent' />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github repo</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className='w-full xl:w-[50%]'>
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className='xl:h-130 mb-12'
              onSlideChange={handleSlideChange}
            >
              {projects.map((project) => {
                return (
                  <SwiperSlide key={project.id} className='w-full'>
                    <div className='h-115 relative group flex justify-center items-center bg-pink-50/20'>
                      {/* Overlay */}
                      <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'></div>

                      {/* Image */}
                      <div className='relative w-full h-full'>
                        <Image
                          src={project.image}
                          fill
                          className='object-cover'
                          alt={`${project.name}.img`}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}

              {/* Slider buttons */}
              <SliderButtons
                containerStyles='flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none'
                btnStyles='bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all cursor-pointer'
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
