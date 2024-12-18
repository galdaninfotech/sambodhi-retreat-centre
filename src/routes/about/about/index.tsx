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
                        <span class="me-2"><a href="index.html">About <i class="fa ion-ios-arrow-round-forward"></i></a></span>
                        <span>About us <i class="fa ion-ios-arrow-round-forward"></i></span>
                    </p>
                    <h1 class="mb-0 bread">About Us</h1>
                </div>
            </div>
        </div>
    </section>       

    <section class="ftco-section ftco-about-section ftco-no-pt ftco-no-pb viewed">
        <div class="container-xl">
            <div class="row">
                <div class="col-lg-6 col-xl-7 order-lg-first py-5 heading-section aos-init aos-animate" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                    <div class="py-md-5 px-lg-5">
                        <span class="subheading">About Us</span>
                        <h2 class="mb-4">Mahabodhi International Meditation Centre</h2>

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

    <section class="ftco-section ftco-about-section ftco-no-pt ftco-no-pb viewed">
        <div class="container-xl">
            <div class="row">
                <div class="col-lg-6 col-xl-5 d-flex align-items-start mt-md-">
                    <div class="img w-100 pt-lg-5">
                        <img src="/images/sambodhi.jpg" class="img-fluid aos-init aos-animate" alt="" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000" />
                    </div>
                </div>

                <div class="col-lg-6 col-xl-7 py-5 heading-section aos-init aos-animate" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                    <div class="py-md-5 px-lg-5">
                        <span class="subheading">About Us</span>
                        <h2 class="mb-4">Sambodhi Retreat Centre</h2>

                        <p>The incredibly beautiful Sambodhi Retreat Centre, an inspiring oasis of tranquil contemplation, is situated in a secluded corner of the transformative Mahabodhi International Meditation Centre campus.</p>

                        <p>The centre is dominated by Rocky Mountains on one side and golden sand dunes on the other. The sweet scent of fragrant and jewel-like flowers, which line the footpaths of the centre, play joyfully on the senses, while enigmatic stupas, reclusive meditation kuties, abundant prayer flags, and the most sacred and eye-catching Milarepa rock cave provide silent spiritual encouragement.</p>

                        <p>The Sambodhi Retreat Centre is exceptionally well designed and very thoughtfully appointed. In fact, our most revered spiritual guide and meditation teacher, Venerable Bhikkhu Sanghasena, has personally overseen all aspects of the centre's design, construction and management with a singularly humanitarian vision: to create a unique, world-renowned contemplative venue, which is appealing to all seekers of truth and lovers of peace, irrespective of their religious inclinations, caste or creed. As a consequence, the centre provides an incredibly warm welcome to all genuine seekers who are looking to incorporate timeless and universal spiritual truths into their daily lives.</p>

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
  title: 'About - Sambodhi Retreat Centre',
  meta: [
    {
      name: 'description',
      content: 'About - Sambodhi Retreat Centre',
    },
  ],
};