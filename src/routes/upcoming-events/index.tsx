import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';
import styles from './index.css?inline';
import Sidebar1 from '~/components/sidebar1/sidebar1';
export default component$(() => {
    useStylesScoped$(styles);

  return (
    <>
    <section class="hero-wrap hero-wrap-2" style="background-image: url('/images/upcoming-events-bg.jpg'); height: 450px;">
        <div class="overlay"></div>
        <div class="container">
            <div class="row no-gutters slider-text align-items-end justify-content-center" style="height: 450px;">
                <div class="col-md-9 mb-5 text-center">
                    <p class="breadcrumbs"><span class="me-2"><a href="index.html">Home <i class="fa ion-ios-arrow-round-forward"></i></a></span> <span>Upcoming Events <i class="fa ion-ios-arrow-round-forward"></i></span></p>
                    <h1 class="mb-0 bread">Upcoming Events</h1>
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
                        <h1 class="mb-4">Upcoming Events</h1>

                        
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
  title: 'Upcoming Events - Sambodhi Retreat Centre',
  meta: [
    {
      name: 'description',
      content: 'Upcoming Events - Sambodhi Retreat Centre',
    },
  ],
};