import { component$ } from '@builder.io/qwik';

export default component$(() => {

  return (
    <section class="slider-hero">
        <div class="overlay"></div>
        <div class="hero-slider">
            <div class="item">
                <div class="work">
                    <div class="img img2 d-flex align-items-center js-fullheight" style="background-image: url(images/slider/slider1.jpg);">
                        <div class="container-xl">
                            <div class="row">
                                <div class="col-md-12 col-lg-10">
                                    <div class="row">
                                        <div class="col-md-8 col-lg-6">
                                            <div class="text mt-md-5" data-aos="fade-up" data-aos-duration="1000">
                                                <h2>comfortable with yourself</h2>
                                                <p class="mb-5">To know one's own mind is nothing short of life-changing.</p>
                                                <p><a href="#" class="btn btn-primary px-4 py-3">Take A Tour Now <span class="ion ion-ios-arrow-round-forward"></span></a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="work">
                    <div class="img d-flex align-items-center justify-content-center js-fullheight" style="background-image: url(images/slider/slider2.jpg);">
                        <div class="container-xl">
                            <div class="row">
                                <div class="col-md-12 col-lg-10">
                                    <div class="row">
                                        <div class="col-md-8 col-lg-6">
                                            <div class="text mt-md-5" data-aos="fade-up" data-aos-duration="1000">
                                                <h2>We can't control the sea</h2>
                                                <p class="mb-5">But we can learn how to surf the waves.</p>
                                                <p><a href="#" class="btn btn-primary px-4 py-3">Take A Tour Now <span class="ion ion-ios-arrow-round-forward"></span></a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="work">
                    <div class="img d-flex align-items-center justify-content-center js-fullheight" style="background-image: url(images/slider/slider3.jpg);">
                        <div class="container-xl">
                            <div class="row">
                                <div class="col-md-10">
                                    <div class="row">
                                        <div class="col-md-6 col-xl-6">
                                            <div class="text mt-md-5" data-aos="fade-up" data-aos-duration="1000">
                                                <h2>You Only Fail, When You Stop Trying</h2>
                                                <p class="mb-5">True freedom is when we are equally content, no matter what arises in the mind.</p>
                                                <p><a href="#" class="btn btn-primary px-4 py-3">Take A Tour Now <span class="ion ion-ios-arrow-round-forward"></span></a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>    
  );
});
