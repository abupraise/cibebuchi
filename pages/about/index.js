import React, { useState } from 'react';

// icons
import {
  FaPython,
  FaRProject,
  FaLinux,
  FaFileWord,
  FaCloudRain,
  FaRainbow,
  FaCloudSunRain,
  FaResearchgate,
} from "react-icons/fa";

import {
  SiTensorflow,
  SiPytorch,
  SiZotero,
} from "react-icons/si";


// about data
export const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Deep Learning',
        icons: [
          <FaPython key="python" />,
          <SiTensorflow key="tensorflow" />,
          <SiPytorch key="pytorch" />,
        ],
      },
      {
        title: 'Climate Modeling',
        icons: [
        <FaCloudRain key="cloudrain" />,
        <FaRainbow key="rainbow" />,
        <FaCloudSunRain key="cloudsunrain" />,
        ],
      },

      {
        title: 'Data Science & Analysis',
        icons: [
        <FaRProject key="rproject" />,
        <FaLinux key="linux" />,
      ],
      },

      {
        title: 'Research Ideation',
        icons: [
        <FaFileWord key="fileword" />,
        <SiZotero key="zotero" />,
        <FaResearchgate key="researchgate" />,
      ],
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Climate Laboratory Manager & Postdoctoral Researcher - ClimRise Lab, Kent State University',
        stage: '2023 - Present',
      },
      {
        title: 'Research Project - Institute of Physical Geography, Würburg Universität',
        stage: '2020 - 2023',
      },
      {
        title: 'Research Assistant - Institute of Meterology, Technical University of Dresden',
        stage: '2018 - 2019',
      },
    ],
  },
  {
    title: 'Qualifications',
    info: [
      {
        title: 'Statistical Climatology - Technische Universität Dresden, Germany', 
        stage: "Master's",
      },
      {
        title: 'Physical Geography - The Julius Maximilians University of Würzburg, Germany',
        stage: 'Dr. rer. nat.',
      },
    ],
  },
];

// components
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// counter
import CountUp from 'react-countup';

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className='h-full sm:h-screen sm:overflow-y-auto bg-primary/30 py-32 text-center xl:text-left'>
  <Circles />
  {/* avatar img */}
  <motion.div 
  variants={fadeIn('right', 0.2)} 
  initial='hidden' 
  animate='show' 
  exit='hidden' 
  className='hidden xl:flex absolute bottom-0 -left-[370px]'
  >
    <Avatar />
  </motion.div>
  <div className='container mx-auto h-full flex flex-col items-center xl:flex-row  
  gap-x-6'>
    {/* text */}
    <div className='flex-1 flex-col justify-center'>
      <motion.h2 
       variants={fadeIn('right', 0.2)} 
       initial='hidden' 
       animate='show' 
       exit='hidden' 
       className='h2'>
        About Me<span className='text-accent'>.</span>
        </motion.h2>
      <motion.p 
       variants={fadeIn('right', 0.4)} 
       initial='hidden' 
       animate='show' 
       exit='hidden' 
      className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>
       I am a researcher in climate science. Currently, I am working on the application of Artificial Intelligence in climate sciences. The unique combination of mathematics and atmospheric science has enabled me to make significant contributions in advancing climate science with over 20 first authored scholarly publications.
        </motion.p>
       </div>
    {/* info */}
    <motion.div 
      variants={fadeIn('right', 0.2)} 
      initial='hidden' 
      animate='show' 
      exit='hidden' 
      className='flex flex-col w-full xl:max-w-[48%] h-[480px]'>
      <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
        {aboutData.map((item, itemIndex) => {
          return (
          <div key={itemIndex}
          className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
          } cursor-pointer capitalize xl:text-lg relative after:w-8
          after:h-[2px] after:bg-white after:absolute after:-bottom-1
          after:left-0`}
          onClick={() => setIndex(itemIndex)}
          > 
          {item.title}
          </div>
          );
        })}
        </div>
        <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
          {aboutData[index].info.map((item, itemIndex)=> {
            return (
            <div key={itemIndex} className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'>
              {/* title */}
              <div className='font-light mb-2 md'>{item.title}</div> 
              <div className='hidden md:flex'>-</div>
              <div>{item.stage}</div>
              <div className='flex gap-x-4'>
              {/* icons */}
              {item.icons?.map((icon, iconIndex) => {
              return (<div key={iconIndex} className='text-2xl text-white'>{icon}</div>);
              })}

              </div>
              </div>
            );
          })}
        </div>
      </motion.div>
     </div>
  </div>
  );
};

export default About;
