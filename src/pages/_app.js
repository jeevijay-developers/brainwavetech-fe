import 'bootstrap/dist/css/bootstrap.min.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'animate.css';
import '@/styles/responsive.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '@/styles/main.scss'
import { useEffect } from 'react';

const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wow.js') : null

export default function App({ Component, pageProps }) {
  useEffect(() => {
    new WOW().init();
  }, [])
  return <Component {...pageProps} />
}
