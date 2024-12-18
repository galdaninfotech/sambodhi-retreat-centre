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
                        <span>Vision <i class="fa ion-ios-arrow-round-forward"></i></span>
                    </p>
                    <h1 class="mb-0 bread">Vision</h1>
                </div>
            </div>
        </div>
    </section>       

    <section class="ftco-section ftco-about-section ftco-no-pt ftco-no-pb viewed">
        <div class="container-xl">
            <div class="row">
                <div class="col-lg-6 col-xl-7 order-lg-first py-5 heading-section aos-init aos-animate" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                    <div class="py-md-5 px-lg-5">
                        <span class="subheading">About The Founder</span>
                        <h2 class="mb-4">Vision</h2>

                        

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
  title: 'Vision - About The Founder',
  meta: [
    {
      name: 'description',
      content: 'Vision - About The Founder',
    },
  ],
};