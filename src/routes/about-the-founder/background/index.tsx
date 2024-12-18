import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';
import styles from './index.css?inline';
export default component$(() => {
    useStylesScoped$(styles);

  return (
    <>
    <section class="hero-wrap hero-wrap-2" style="background-image: url('/images/about-bg.jpg'); height: 450px;">
        <div class="overlay"></div>
        <div class="container">
            <div class="row no-gutters slider-text align-items-end justify-content-center" style="height: 450px;">
                <div class="col-md-9 mb-5 text-center">
                    <p class="breadcrumbs">
                        <span class="me-2"><a href="index.html">Home <i class="fa ion-ios-arrow-round-forward"></i></a></span> 
                        <span class="me-2"><a href="index.html">About The Fouder <i class="fa ion-ios-arrow-round-forward"></i></a></span> 
                        <span>Background <i class="fa ion-ios-arrow-round-forward"></i></span>
                    </p>
                    <h1 class="mb-0 bread">Background</h1>
                </div>
            </div>
        </div>
    </section>       

    <section class="ftco-section ftco-about-section ftco-no-pt ftco-no-pb viewed">
        <div class="container-xl">
            <div class="row">
                <div class="col-lg-6 col-xl-7 order-lg-first py-5 heading-section aos-init aos-animate" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                    <div class="py-md-5 px-lg-5">
                        <span class="subheading">Background</span>
                        <h2 class="mb-4">About The Founder</h2>

                        <p>The Mahabodhi International Meditation Centre (MIMC) had humble origins in a rented room in Leh city in 1986. Venerable Bhikkhu Sanghasena recognized the pressing need for humanitarian and spiritual services in Ladakh. Starting in a small room, the center later shifted to the expansive 200-acre Devachan campus in Choglamsar in 1991. Overcoming challenges like lack of water and proper roads in the harsh desert environment, Venerable Sanghasena and his team demonstrated tenacity, compassion, and resourcefulness as the Mahabodhi Devachan campus blossomed.</p>

                        <p>Identifying illiteracy as a root cause of poverty and social unrest, Venerable Sanghasena initiated the first residential school for underprivileged children in Ladakh. This educational effort marked the beginning of a broader vision for the Devachan campus, expanding to include a home for the aged, facilities for the visually impaired, a monastery, a nunnery, a meditation and yoga center, and more.</p>

                        <p>The campus evolved into a multifaceted hub addressing various humanitarian needs, realizing Venerable Sanghasena's dream.</p>

                    </div>
                </div>
                <div class="col-lg-6 col-xl-5 d-flex align-items-start">
                    <div class="img w-100 pt-lg-5">
                        <img src="/images/about.jpg" class="img-fluid aos-init aos-animate" alt="" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    <br /> <br /> <br /> <br />

    
  </>
  );
});

export const head: DocumentHead = {
  title: 'Background - About The Founder',
  meta: [
    {
      name: 'description',
      content: 'Background - About The Founder',
    },
  ],
};