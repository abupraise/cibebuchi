//links
import Link from "next/link";

//icons
import {RiInstagramLine,
  RiFacebookLine,
  RiLinkedinLine,
} from 'react-icons/ri';

import { 
FaResearchgate,
} from "react-icons/fa";

import GoogleScholarIcon from './GoogleScholarIcon';


const Socials = () => {
  return ( 
  <div className="flex items-center gap-x-5 text-lg">
    <Link href={'https://www.facebook.com'} className='hover:text-accent transition-all duration-300'>
      <RiFacebookLine />
      </Link>
    <Link href={'https://www.instagram.com/chuby_199/'} className='hover:text-accent transition-all duration-300'>
      <RiInstagramLine />
    </Link>
    <Link href={'https://www.linkedin.com/in/chibuike-chiedozie-ibebuchi-dr-rer-nat-9008b5229/'} className="hover:text-accent transition-all duration-300">
      <RiLinkedinLine />
    </Link>
    <Link href={'https://www.researchgate.net/profile/Chibuike-Ibebuchi'} className="hover:text-accent transition-all duration-300">
      <FaResearchgate />
    </Link>
    <Link href={'https://scholar.google.com/citations?user=8fgqZwUAAAAJ&hl=en&oi=ao'} className="hover:text-accent transition-all duration-300">
      <GoogleScholarIcon />
    </Link>
  </div>
  );
};

export default Socials;
