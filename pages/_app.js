import '../styles/globals.css';
import Head from 'next/head'; // Import the Head component

//components
import Layout from '../components/Layout';
import Transition from '../components/Transition';

// router
import { useRouter } from 'next/router';

// framer motion
import { AnimatePresence, motion } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Dr. Chibuike Ibebuchi || Portfolio Website</title> {/* Set the title here */}
        {/* Add the favicon */}
        <link rel="icon" href="/icon.png" type="image/png" />
      </Head>
      <Layout> 
        <AnimatePresence mode='wait'>
          <motion.div key={router.route} className='h-full'>
            <Transition />
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </>
  );
}

export default MyApp;
