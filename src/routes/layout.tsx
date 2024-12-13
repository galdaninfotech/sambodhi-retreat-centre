import { component$, Slot, useStyles$ } from '@builder.io/qwik';
import type { RequestHandler } from '@builder.io/qwik-city';

import Header from '../components/starter/header/header';
import Footer from '../components/starter/footer/footer';

import styles from './styles.css?inline';

export const onGet: RequestHandler = async ({ cacheControl }) => {
    // Control caching for this request for best performance and to reduce hosting costs:
    // https://qwik.dev/docs/caching/
    cacheControl({
      // Always serve a cached response by default, up to a week stale
      staleWhileRevalidate: 60 * 60 * 24 * 7,
      // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
      maxAge: 5,
    });
  };


export default component$(() => {
  useStyles$(styles);
    return (
        <>



            <Header />
            <main>
                <Slot />
            </main>
            <Footer />



            <script src="/js/bootstrap.bundle.min.js"></script>
            <script src="/js/tiny-slider.js"></script>
            <script src="/js/glightbox.min.js"></script>
            <script src="/js/rellax.min.js"></script>
            <script src="/js/aos.js"></script>
            <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&amp;sensor=false"></script>
            <script src="/js/google-map.js"></script>
            <script src="/js/main.js"></script>
            
        
        </>
    );
});
