'use client';

import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { motion } from 'framer-motion';

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import {
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiSocketdotio,
  SiExpress,
  SiTypescript,
  SiCloudinary,
} from 'react-icons/si';

const about = {
  title: 'About Me',
  description:
    'With a Bachelors degree in Information Technology, I am eager to begin my journey in web development. I enjoy creating web applications, solving real-world problems through code, and exploring new technologies. The MERN stack particularly excites me as it allows me to work on both front-end and back-end development.',
  info: [
    {
      id: 1,
      fieldName: 'Name',
      fieldValue: 'Basanta Raj Shrestha',
    },
    {
      id: 2,
      fieldName: 'Phone',
      fieldValue: '+977-9860137124',
    },
    {
      id: 3,
      fieldName: 'Email',
      fieldValue: 'basanta.shrestha055@gmail.com',
    },
    {
      id: 4,
      fieldName: 'Address',
      fieldValue: 'Budhanilkantha - 10, Kapan',
    },
  ],
};

const education = {
  title: 'My Education',
  items: [
    {
      id: 1,
      institution: 'Deerwalk Training Center',
      degree: 'Full Stack Web Development',
      duration: '2021',
    },
    {
      id: 2,
      institution: 'Purbanchal University',
      degree: 'Bachelor in Information Technology',
      duration: '2016 - 2022',
    },
  ],
};

const skills = {
  title: 'My Skills',
  description: 'A collection of my technical skills and expertise.',
  skillList: [
    {
      id: 1,
      icon: <FaHtml5 />,
      name: 'html 5',
    },
    {
      id: 2,
      icon: <FaCss3 />,
      name: 'css 3',
    },
    {
      id: 3,
      icon: <SiTailwindcss />,
      name: 'tailwind.css',
    },
    {
      id: 4,
      icon: <FaJs />,
      name: 'javascript',
    },
    {
      id: 5,
      icon: <SiTypescript />,
      name: 'typescript',
    },
    {
      id: 6,
      icon: <FaReact />,
      name: 'react.js',
    },
    {
      id: 7,
      icon: <SiMongodb />,
      name: 'mongodb',
    },
    {
      id: 8,
      icon: <SiExpress />,
      name: 'express.js',
    },
    {
      id: 9,
      icon: <FaNodeJs />,
      name: 'node.js',
    },
    {
      id: 10,
      icon: <SiNextdotjs />,
      name: 'next.js',
    },
    {
      id: 11,
      icon: <SiSocketdotio />,
      name: 'socket.io',
    },
    {
      id: 12,
      icon: <SiCloudinary />,
      name: 'cloudinary',
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
    >
      <div className='container mx-auto'>
        <Tabs
          defaultValue='about me'
          className='flex flex-col xl:flex-row gap-15'
        >
          <TabsList className='flex flex-col w-full max-w-95 mx-auto xl:mx-0 gap-6'>
            <TabsTrigger value='about me'>About me</TabsTrigger>
            <TabsTrigger value='education'>Education</TabsTrigger>
            <TabsTrigger value='skills'>Skills</TabsTrigger>
          </TabsList>

          {/* Content */}
          <div className='min-h-[70vh] w-full'>
            {/* About Me */}
            <TabsContent
              value='about me'
              className='w-full text-center xl:text-left'
            >
              <div className='flex flex-col gap-7.5'>
                <h3 className='text-4xl font-bold'>{about.title}</h3>
                <p className='max-w-210 text-white/60 mx-auto xl:mx-0'>
                  {about.description}
                </p>
                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-230 mx-auto xl:mx-0'>
                  {about.info.map((item) => {
                    return (
                      <li
                        key={item.id}
                        className='flex items-center justify-center xl:justify-start gap-4'
                      >
                        <span className='text-white/60'>{item.fieldName}</span>
                        <span className='text-xl'>{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* Education */}
            <TabsContent value='education' className='w-full'>
              <div className='flex flex-col gap-7.5 text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{education.title}</h3>
                <ScrollArea className='h-100'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-7.5'>
                    {education.items.map((item) => {
                      return (
                        <li
                          key={item.id}
                          className='bg-[#232329] h-46 py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'
                        >
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max-w-75 min-h-15 text-center lg:text-left'>
                            {item.degree}
                          </h3>
                          <div className='flex items-center gap-3'>
                            <span className='w-1.5 h-1.5 rounded-full bg-accent'></span>
                            <p className='text-white/60'>{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills */}
            <TabsContent value='skills' className='w-full h-full'>
              <div className='flex flex-col gap-7.5'>
                <div className='flex flex-col gap-7.5 text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>{skills.title}</h3>
                  <p className='max-w-150 text-white/60 mx-auto xl:mx-0'>
                    {skills.description}
                  </p>
                </div>
                <ScrollArea className='h-100'>
                  <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-7.5'>
                    {skills.skillList.map((skill) => {
                      return (
                        <li key={skill.id}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className='w-full h-37.5 bg-[#232329] rounded-xl flex justify-center items-center cursor-pointer group'>
                                <div className='text-6xl group-hover:text-accent transition-all duration-300'>
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className='capitalize'>{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
