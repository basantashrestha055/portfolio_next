import Photo from '@/components/Photo';
import Social from '@/components/Social';
import Stats from '@/components/Stats';
import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi';

const Home = () => {
  return (
    <section className='h-full'>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
          <div className='text-center xl:text-left order-2 xl:order-0'>
            <span className='text-xl'>Full Stack Developer</span>
            <h1 className='h1 mb-6'>
              Hello I'm <br />{' '}
              <span className='text-accent'>Basanta Raj Shrestha</span>
            </h1>
            <p className='max-w-full mb-9 text-white/80'>
              I am a passionate full stack developer with expertise in building
              dynamic and responsive web applications. I love to create
              efficient and scalable solutions that deliver exceptional user
              experiences.
            </p>

            {/* Socials */}
            <div className='flex flex-col xl:flex-row items-center gap-8'>
              <a
                href='https://drive.google.com/file/d/1N7rjtIGlqdo8mK-10XW5U-42p2iW8bey/view?usp=sharing'
                target='_blank'
              >
                <Button
                  variant='outline'
                  size='lg'
                  className='uppercase flex items-center gap-2 cursor-pointer'
                >
                  <span>Download CV</span>
                  <FiDownload className='text-xl' />
                </Button>
              </a>
              <div className='mb-8 xl:mb-0'>
                <Social
                  containerStyles='flex gap-6'
                  iconStyles='w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500'
                />
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className='order-1 xl:order-0 mb-8 xl:mb-0'>
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
