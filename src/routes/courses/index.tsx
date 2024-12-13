import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';
import styles from './index.css?inline';
import Sidebar1 from '~/components/sidebar1/sidebar1';
export default component$(() => {
    useStylesScoped$(styles);

  return (
    <>
    <section class="hero-wrap hero-wrap-2" style="background-image: url('/images/courses-bg.jpg'); height: 450px;">
        <div class="overlay"></div>
        <div class="container">
            <div class="row no-gutters slider-text align-items-end justify-content-center" style="height: 450px;">
                <div class="col-md-9 mb-5 text-center">
                    <p class="breadcrumbs"><span class="me-2"><a href="index.html">Home <i class="fa ion-ios-arrow-round-forward"></i></a></span> <span>Courses <i class="fa ion-ios-arrow-round-forward"></i></span></p>
                    <h1 class="mb-0 bread">Courses</h1>
                </div>
            </div>
        </div>
    </section>       

    <section class="ftco-section ftco-about-section ftco-no-pt ftco-no-pb viewed">
        <div class="container-xl">
            <div class="row">
                <div class="col-md-9 py-5 heading-section aos-init aos-animate" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                    <div class="py-md-5 px-lg-5">
                        <span class="subheading">Information about Courses</span>
                        <h1 class="mb-4">Sambodhi Retreat Centre</h1>

                        <p>The Sambodhi Retreat Centre offers both short and longer duration meditation courses.</p>

                        <p>The tremendously popular and highly successful three-day meditation courses are regularly scheduled throughout the summer months, and we receive incredibly positive and encouraging feedback from all those attending them.</p>

                        <p>The simple, yet timeless, teachings of the enlightened Buddha are taught with precise accuracy and insightful clarity at the Sambodhi Retreat Centre. Both Samatha and Vipassana meditation practices, the very heartwood of the Buddha's unsurpassed contemplative teachings, are taught in direct, engaging and highly relevant ways, enabling sincere practitioners to open and expand their innate inner qualities of wisdom, compassion, power and purity.</p>
                        <br /><br />


                        <h2>Yoga Instructor Course YIC</h2>
                        <p>One-Month Yoga Instructor Course in the Serene Land of Leh Ladakh, Seekers of Inner Harmony.</p>

                        <p>Experience the spiritual allure of Leh Ladakh while immersing yourself in the profound teachings of yoga with Mahabodhi International Meditation Centre's (MIMC) exclusive one-month Yoga Instructor Course.</p>

                        <p>Nestled amidst the majestic Himalayas, this program promises a transformative experience that blends ancient wisdom with modern-day instruction. Discover tranquillity amid the breath-taking landscapes of Leh Ladakh, fostering an ideal setting for self-reflection and deepening your practice.</p>

                        <p>Curriculum: Immerse yourself in a comprehensive curriculum covering various yoga styles. Meditation techniques, philosophy, anatomy and teaching methodologies under the guidance of seasoned instructors.</p>

                        <p>Cultural Immersion: Embrace the rich cultural heritage of Ladakh through integrated sessions that explore local customs, meditation practices, and spiritual traditions.</p>


                    </div>
                </div>
                <div class="col-md-3">
                    <Sidebar1 />
                </div>
            </div>
        </div>
    </section>
  </>
  );
});

export const head: DocumentHead = {
  title: 'Courses',
  meta: [
    {
      name: 'description',
      content: 'Courses',
    },
  ],
};