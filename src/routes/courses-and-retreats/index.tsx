import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';
import styles from './index.css?inline';
import Sidebar1 from '~/components/sidebar1/sidebar1';
export default component$(() => {
    useStylesScoped$(styles);

  return (
    <>
    <section class="hero-wrap hero-wrap-2" style="background-image: url('/images/courses-and-retreats-bg.jpg'); height: 450px;">
        <div class="overlay"></div>
        <div class="container">
            <div class="row no-gutters slider-text align-items-end justify-content-center" style="height: 450px;">
                <div class="col-md-9 mb-5 text-center">
                    <p class="breadcrumbs"><span class="me-2"><a href="index.html">Home <i class="fa ion-ios-arrow-round-forward"></i></a></span> <span>Courses & Retreats <i class="fa ion-ios-arrow-round-forward"></i></span></p>
                    <h1 class="mb-0 bread">Courses & Retreats</h1>
                </div>
            </div>
        </div>
    </section>       

    <section class="ftco-section ftco-about-section ftco-no-pt ftco-no-pb viewed">
        <div class="container-xl">
            <div class="row">
                <div class="col-md-9 py-5 heading-section aos-init aos-animate" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                    <div class="py-md-5 px-lg-5">
                        <span class="subheading">Courses & Retreats</span>
                        <h1 class="mb-4">Sambodhi Retreat Centre</h1>

                        <p>The Sambodhi Retreat Centre offers both <strong>short and longer</strong> duration meditation courses.</p>

                        <p>The tremendously popular and highly successful <strong>three-day meditation courses</strong> are regularly scheduled throughout the su<strong>mmer months</strong>, and we receive incredibly positive and encouraging feedback from all those attending them.</p>

                        <p>The simple, yet timeless, teachings of the enlightened Buddha are taught with precise accuracy and insightful clarity at the Sambodhi Retreat Centre. Both <strong>Samatha and Vipassana meditation practices</strong>, the very heartwood of the Buddha's unsurpassed contemplative teachings, are taught in direct, engaging and highly relevant ways, enabling sincere practitioners to open and expand their innate inner qualities of wisdom, compassion, power and purity.</p>
                        <br /><br />


                        <h2>Yoga Instructor Course YIC</h2>
                        <p><strong>One-Month Yoga Instructor Course</strong> in the Serene Land of Leh Ladakh, Seekers of Inner Harmony.</p>

                        <p>Experience the spiritual allure of Leh Ladakh while immersing yourself in the profound teachings of yoga with Mahabodhi International Meditation Centre's (MIMC) exclusive one-month Yoga Instructor Course.</p>

                        <p>Nestled amidst the majestic Himalayas, this program promises a transformative experience that blends ancient wisdom with modern-day instruction. Discover tranquillity amid the breath-taking landscapes of Leh Ladakh, fostering an ideal setting for self-reflection and deepening your practice.</p>

                        <p><strong>Curriculum</strong>: Immerse yourself in a comprehensive curriculum covering various yoga styles. Meditation techniques, philosophy, anatomy and teaching methodologies under the guidance of seasoned instructors.</p>

                        <p><strong>Cultural Immersion</strong>: Embrace the rich cultural heritage of Ladakh through integrated sessions that explore local customs, meditation practices, and spiritual traditions.</p>

                        <br /><br /><br />


                        <h2>Why Choose MIMC's Course?</h2>
                        <ol>
                            <li><p><strong>Legacy of Excellence</strong>: Benefit from MIMC's rich legacy of meditation and spiritual teachings, providing a holistic approach to yoga instruction.</p></li>
                            <li><p><strong>Experiential Learning</strong>: Engage in practical, hands-on sessions coupled with theoretical knowledge, ensuring a well-rounded understanding of yoga's essence.</p></li>
                            <li><p><strong>Serene Environment</strong>: Experience the serenity of Leh Ladakh, fostering a conducive atmosphere for self-discovery and personal growth.</p></li>
                        </ol>
                        <br /><br /><br />


                        <h2>Who Should Attend?</h2>
                        <p>This course welcomes individuals at all levels, from dedicated practitioners seeking deoper Insight to those aspiring to become certified instructors. No matter your background or experience, our program caters to your journey towards becoming a confident and Knowledgeable yoga instructor.</p>

                        <p>One Month Yoga Instructor Course will run from 15th May to 15th June at the Mahabodhi Campus. Mahabodhi International Yoga and Meditation Centre received prestigious recognition from the YOGA CERTIFICATION BOARD @ministryofayush, Government of India, thus bestowing upon MIMC the honor of becoming the First Certified and Government -recognized Yoga Institution in ladakh. Ven. Bhikkhu Sanghasena is also the proud recipient of the Prestigious Prime Minister's Yoga Award, which is indeed a moment of pride for each and every one in Ladakh.</p>

                        <p>Join Us in Uniting Body, Mind, and Spirit. Secure your place amidst the serene valleys and mystical mountains of Leh Ladakh. Limited spaces are available for this enriching one-month yoga instructor course. For registration and inquiries, reach out to us. Elevate Your Practice with MIMC, and.</p>

                        <p>Discover the Path to Inner Peace.</p>




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
  title: 'Courses & Retreats - Sambodhi Retreat Centre',
  meta: [
    {
      name: 'description',
      content: 'Courses & Retreats - Sambodhi Retreat Centre',
    },
  ],
};