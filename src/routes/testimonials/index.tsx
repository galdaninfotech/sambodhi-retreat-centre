import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';
import styles from './index.css?inline';
import Sidebar1 from '~/components/sidebar1/sidebar1';
export default component$(() => {
    useStylesScoped$(styles);

  return (
    <>
    <section class="hero-wrap hero-wrap-2" style="background-image: url('/images/bg_1.webp'); height: 450px;">
        <div class="overlay"></div>
        <div class="container">
            <div class="row no-gutters slider-text align-items-end justify-content-center" style="height: 450px;">
                <div class="col-md-9 mb-5 text-center">
                    <p class="breadcrumbs"><span class="me-2"><a href="index.html">Home <i class="fa ion-ios-arrow-round-forward"></i></a></span> <span>Testimonials <i class="fa ion-ios-arrow-round-forward"></i></span></p>
                    <h1 class="mb-0 bread">Testimonials</h1>
                </div>
            </div>
        </div>
    </section>       

    <section class="ftco-section ftco-about-section ftco-no-pt ftco-no-pb viewed">
        <div class="container-xl">
            <div class="row">
                <div class="col-md-9 py-5 heading-section aos-init aos-animate" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                    <div class="py-md-5 px-lg-5">
                        <span class="subheading">Sambodhi Retreat Centre</span>
                        <h1 class="mb-4">Experience of Meditators</h1>

                        <div class="item">
                            <div class="testimony-wrap">
                                <div class="icon d-flex align-items-center justify-content-center"><span class="fa fa-quote-left"></span></div>
                                <div class="text">
                                    <p class="mb-4 msg">
                                        The 3 day Meditation course was such a wonderfully supportive way to be introduced to meditation practice. It has opened my eyed and my mind. I am 10oking forward to continue these wonderful teachings in my life. I am taking these jewels back home.
                                    </p>
                                    <div class="d-flex align-items-center">
                                        <div class="user-img" style="background-image: url(/images/person_1.jpg)"></div>
                                        <div class="ps-3 tx">
                                            <p class="name">Jennifer Piccolo</p>
                                            <span class="position">USA</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="divider" style="width: 80%; border-bottom: 1px dotted #ff5300; margin: 0 auto;"></div>

                        <div class="item">
                            <div class="testimony-wrap">
                                <div class="icon d-flex align-items-center justify-content-center"><span class="fa fa-quote-left"></span></div>
                                <div class="text">
                                    <p>
                                        Thanks for sharing such a wise and practical teachings, it has been such a privilege to be here in the tranquility on the roof of top of the world learning such a valuable tools from Ven. Sanghasena.
                                    </p>
                                    <div class="d-flex align-items-center">
                                        <div class="user-img" style="background-image: url(/images/person_1.jpg)"></div>
                                        <div class="ps-3 tx">
                                            <p class="name">Miriam Lieberman</p>
                                            <span class="position">Australia</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="divider" style="width: 80%; border-bottom: 1px dotted #ff5300; margin: 0 auto;"></div>


                        <div class="item">
                            <div class="testimony-wrap">
                                <div class="icon d-flex align-items-center justify-content-center"><span class="fa fa-quote-left"></span></div>
                                <div class="text">
                                    <p>
                                        The energy and enthusiasm of Ven. Sanghasena is boundless. His dedication to teach Buddhism and Meditation will surely make the centre internationally reputed. I am overwhelmed to see his Compassion in action, Meditation in action.
                                    </p>
                                    <div class="d-flex align-items-center">
                                        <div class="user-img" style="background-image: url(/images/person_1.jpg)"></div>
                                        <div class="ps-3 tx">
                                            <p class="name">Chris Chong </p>
                                            <span class="position">Canada</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="divider" style="width: 80%; border-bottom: 1px dotted #ff5300; margin: 0 auto;"></div>


                        <div class="item">
                            <div class="testimony-wrap">
                                <div class="icon d-flex align-items-center justify-content-center"><span class="fa fa-quote-left"></span></div>
                                <div class="text">
                                    <p>
                                        It was once life time experience, exhilarating, splendid, beautiful, evocative and soulful. When I came for the retreat first time, I was expecting to be more evolved and needless to say it surpassed my expectations. Everything about the program was perfect and tailored to brilliance. The retreat was heaven not just metaphynal but literally.
                                    </p>

                                    <p>
                                        Nestled in the Himalayas, it is a picture perfect setting, ideal for connecting with oneself. Spending time with Guruji is the closest anyone can come to enrolment. I am truly blessed and would like to come back again and again and this is my third time to this beautiful centre.
                                    </p>
                                    <div class="d-flex align-items-center">
                                        <div class="user-img" style="background-image: url(/images/person_1.jpg)"></div>
                                        <div class="ps-3 tx">
                                            <p class="name">Vickrant Mahajan</p>
                                            <span class="position">India</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="divider" style="width: 80%; border-bottom: 1px dotted #ff5300; margin: 0 auto;"></div>

                        <div class="item">
                            <div class="testimony-wrap">
                                <div class="icon d-flex align-items-center justify-content-center"><span class="fa fa-quote-left"></span></div>
                                <div class="text">
                                    <p>
                                        The retreat showed me the gate to mindfulness. I loved the beautiful Mahabodhi Centre, The lovely people and the great teacher. I have a new and better vision from now. Thank you for the valuable experience.
                                    </p>
                                    <div class="d-flex align-items-center">
                                        <div class="user-img" style="background-image: url(/images/person_1.jpg)"></div>
                                        <div class="ps-3 tx">
                                            <p class="name">Yael</p>
                                            <span class="position">Isreal</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="divider" style="width: 80%; border-bottom: 1px dotted #ff5300; margin: 0 auto;"></div>

                        <div class="item">
                            <div class="testimony-wrap">
                                <div class="icon d-flex align-items-center justify-content-center"><span class="fa fa-quote-left"></span></div>
                                <div class="text">
                                    <p>
                                        Thank you for the wonderful experience in such unique place of the world. This is my second time. I came two years before and I had been practicing since then. This practice has given a new life to live. Thank you Ven. Sanghasena and all the wonderful staff. 
                                    </p>
                                    <div class="d-flex align-items-center">
                                        <div class="user-img" style="background-image: url(/images/person_1.jpg)"></div>
                                        <div class="ps-3 tx">
                                            <p class="name">Chris Chong </p>
                                            <span class="position">Canada</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        


                        

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
  title: 'Testimonials',
  meta: [
    {
      name: 'description',
      content: 'Testimonials',
    },
  ],
};