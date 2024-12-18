import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
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


        <section class="ftco-section ftco-about-section ftco-no-pt ftco-no-pb">
            <div class="container-xl">
                <div class="row">
                    <div class="col-lg-6 col-xl-7 order-lg-last py-5 heading-section" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                        <div class="py-md-5 px-lg-5">
                            <span class="subheading">About Us</span>
                            <h2 class="mb-4">Sambodhi Retreat Centre - <span>Meditation & Yoga</span> Workout Training Center</h2>
                            <p>The incredibly beautiful Sambodhi Retreat Centre, an inspiring oasis of tranquil contemplation, is situated in a secluded corner of the transformative Mahabodhi International Meditation Centre campus.
                            </p>
                            <ul>
                                <li><a href="#"><span class="ion-ios-arrow-round-forward"></span> Meditation & Calmness</a></li>
                                <li><a href="#"><span class="ion-ios-arrow-round-forward"></span> Yoga & Workout</a></li>
                                <li><a href="#"><span class="ion-ios-arrow-round-forward"></span> Personal Training</a></li>
                                <li><a href="#"><span class="ion-ios-arrow-round-forward"></span> Experienced Instructors</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-6 col-xl-5 d-flex align-items-end">
                        <div class="img w-100 pt-lg-5">
                            <img src="/images/about.jpg" class="img-fluid" alt="" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000" />
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section class="ftco-section ftco-counter-section ftco-no-pb ftco-no-pt">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="counter-section">
                            <div class="row g-0">
                                <div class="col-md-6 col-lg d-flex align-items-stretch">
                                    <div class="counter-wrap" data-aos="fade-up" data-aos-duration="1000">
                                        <div class="text">
                                            <span class="d-block number gradient-text"><span id="count1" class="counter" data-count="30">0</span>+</span>
                                            <p>Years of experienced</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg d-flex align-items-stretch">
                                    <div class="counter-wrap even" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                                        <div class="text">
                                            <span class="d-block number gradient-text"><span id="count2" class="counter" data-count="20">0</span>+</span>
                                            <p>Mediation Instructors</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg d-flex align-items-stretch">
                                    <div class="counter-wrap" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                                        <div class="text">
                                            <span class="d-block number gradient-text"><span id="count2" class="counter" data-count="10">0</span>+</span>
                                            <p>Courses Available</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg d-flex align-items-stretch">
                                    <div class="counter-wrap even" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                                        <div class="text">
                                            <span class="d-block number gradient-text"><span id="count2" class="counter" data-count="10">0</span>k+</span>
                                            <p>Satisfied Clients</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>





       


        


        


        <br />
        <br />
        <br />
        <section class="ftco-section testimony-section bg-light">
            <div class="container-xl">
                <div class="row justify-content-center pb-4">
                    <div class="col-md-7 text-center heading-section" data-aos="fade-up" data-aos-duration="1000">
                        <span class="subheading">Testimonial</span>
                        <h2 class="mb-3">Happy People</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                        <div class="carousel-testimony">
                            <div class="item">
                                <div class="testimony-wrap">
                                    <div class="icon d-flex align-items-center justify-content-center"><span class="fa fa-quote-left"></span></div>
                                    <div class="text">
                                        <p class="mb-4 msg">The energy and enthusiasm of Ven. Sanghasena is boundless. His dedication to teach Buddhism and Meditation will surely make the centre internationally reputed. </p>
                                        <div class="d-flex align-items-center">
                                            <div class="user-img" style="background-image: url(images/person_1.jpg)"></div>
                                            <div class="ps-3 tx">
                                                <p class="name">Miriam Lieberman</p>
                                                <span class="position">Australia</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="testimony-wrap">
                                    <div class="icon d-flex align-items-center justify-content-center"><span class="fa fa-quote-left"></span></div>
                                    <div class="text">
                                        <p class="mb-4 msg">The energy and enthusiasm of Ven. Sanghasena is boundless. His dedication to teach Buddhism and Meditation will surely make the centre internationally reputed.</p>
                                        <div class="d-flex align-items-center">
                                            <div class="user-img" style="background-image: url(images/person_2.jpg)"></div>
                                            <div class="ps-3 tx">
                                                <p class="name">Chris Chong </p>
                                                <span class="position">Canada</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="testimony-wrap">
                                    <div class="icon d-flex align-items-center justify-content-center"><span class="fa fa-quote-left"></span></div>
                                    <div class="text">
                                        <p class="mb-4 msg">The energy and enthusiasm of Ven. Sanghasena is boundless. His dedication to teach Buddhism and Meditation will surely make the centre internationally reputed.</p>
                                        <div class="d-flex align-items-center">
                                            <div class="user-img" style="background-image: url(images/person_3.jpg)"></div>
                                            <div class="ps-3 tx">
                                                <p class="name">Vickrant Mahajan</p>
                                                <span class="position">India</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="testimony-wrap">
                                    <div class="icon d-flex align-items-center justify-content-center"><span class="fa fa-quote-left"></span></div>
                                    <div class="text">
                                        <p class="mb-4 msg">The energy and enthusiasm of Ven. Sanghasena is boundless. His dedication to teach Buddhism and Meditation will surely make the centre internationally reputed.</p>
                                        <div class="d-flex align-items-center">
                                            <div class="user-img" style="background-image: url(images/person_1.jpg)"></div>
                                            <div class="ps-3 tx">
                                                <p class="name">Miriam Lieberman</p>
                                                <span class="position">United Kingdom</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="testimony-wrap">
                                    <div class="icon d-flex align-items-center justify-content-center"><span class="fa fa-quote-left"></span></div>
                                    <div class="text">
                                        <p class="mb-4 msg">The energy and enthusiasm of Ven. Sanghasena is boundless. His dedication to teach Buddhism and Meditation will surely make the centre internationally reputed.</p>
                                        <div class="d-flex align-items-center">
                                            <div class="user-img" style="background-image: url(images/person_2.jpg)"></div>
                                            <div class="ps-3 tx">
                                                <p class="name">Roger Scott</p>
                                                <span class="position">Marketing Manager</span>
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



        <section class="ftco-section">
            <div class="container-xl">
                <div class="row justify-content-center mb-5">
                    <div class="col-md-7 heading-section text-center" data-aos="fade-up" data-aos-duration="1000">
                        <span class="subheading">News</span>
                        <h2>Latest News</h2>
                    </div>
                </div>
                <div class="row g-md-0">
                    <div class="col-md-6 col-lg-3 d-flex">
                        <div class="blog-entry justify-content-end" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                            <a href="blog-single.html" class="block-20 img d-flex align-items-end" style="background-image: url('images/image_1.jpg');">
                            </a>
                            <div class="text">
                                <p class="meta"><span>Dec. 10, 2024</span><a href="#">3 Comments</a></p>
                                <h3 class="heading mb-3"><a href="#">Meditation - Sambodhi Retreat Center</a></h3>
                                <p>The centre is dominated by Rocky Mountains on one side and golden sand dunes on the other. </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3 d-flex">
                        <div class="blog-entry justify-content-end d-md-flex flex-md-column-reverse" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                            <a href="blog-single.html" class="block-20 img d-flex align-items-end" style="background-image: url('images/image_1.jpg');">
                            </a>
                            <div class="text">
                                <p class="meta"><span>Mar. 20, 2023</span><a href="#">3 Comments</a></p>
                                <h3 class="heading mb-3"><a href="#">Meditation - Sambodhi Retreat Center</a></h3>
                                <p>The centre is dominated by Rocky Mountains on one side and golden sand dunes on the other. </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3 d-flex">
                        <div class="blog-entry justify-content-end" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                            <a href="blog-single.html" class="block-20 img d-flex align-items-end" style="background-image: url('images/image_1.jpg');">
                            </a>
                            <div class="text">
                                <p class="meta"><span>Jun. 02, 2023</span><a href="#">3 Comments</a></p>
                                <h3 class="heading mb-3"><a href="#">Meditation - Sambodhi Retreat Center</a></h3>
                                <p>The centre is dominated by Rocky Mountains on one side and golden sand dunes on the other. </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3 d-flex">
                        <div class="blog-entry justify-content-end d-md-flex flex-md-column-reverse" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                            <a href="blog-single.html" class="block-20 img d-flex align-items-end" style="background-image: url('images/image_1.jpg');">
                            </a>
                            <div class="text">
                                <p class="meta"><span>Oct. 12, 2023</span><a href="#">3 Comments</a></p>
                                <h3 class="heading mb-3"><a href="#">Meditation - Sambodhi Retreat Center</a></h3>
                                <p>The centre is dominated by Rocky Mountains on one side and golden sand dunes on the other. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section class="ftco-section img ftco-no-pb" style="background-image: url(images/bg_4.jpg)">
            <div class="container">
                <div class="row mb-5">
                    <div class="col-md-7 heading-section heading-section-white" data-aos="fade-up" data-aos-duration="1000">
                        <span class="subheading">Brilliant things happen in calm minds.</span>
                        <h2>Register <span>Now!</span></h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                        <div class="ftco-search d-flex justify-content-center">
                            <div class="row">
                                <div class="col-md-12 nav-link-wrap d-flex">
                                    <div class="nav nav-pills text-center" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                        <a class="nav-link active" id="v-pills-1-tab" data-toggle="pill" href="#v-pills-1" role="tab" aria-controls="v-pills-1" aria-selected="true">Meditation</a>
                                        <a class="nav-link" id="v-pills-2-tab" data-toggle="pill" href="#v-pills-2" role="tab" aria-controls="v-pills-2" aria-selected="false">Course</a>
                                    </div>
                                </div>
                                <div class="col-md-12 tab-wrap">
                                    <div class="tab-content" id="v-pills-tabContent">
                                        <div class="tab-pane fade show active" id="v-pills-1" role="tabpanel" aria-labelledby="v-pills-nextgen-tab">
                                            <form action="#" class="search-property-1">
                                                <div class="row g-0">
                                                    <div class="col-md-12 d-flex">
                                                        <div class="form-group mb-3">
                                                            <label for="#">Your Name</label>
                                                            <div class="form-field d-flex">
                                                                <input type="text" class="form-control me-2" placeholder="FisrtName" />
                                                                <input type="text" class="form-control ms-2" placeholder="LastName" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12 d-flex">
                                                        <div class="form-group mb-3">
                                                            <label for="#">Your Email ID</label>
                                                            <div class="form-field">
                                                                <input type="text" class="form-control" placeholder="Email ID" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12 d-flex">
                                                        <div class="form-group d-flex w-100">
                                                            <div class="form-field w-100 align-items-center d-flex">
                                                                <input type="submit" value="Register Now!" class="align-self-stretch form-control btn btn-primary me-2" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div class="tab-pane fade" id="v-pills-2" role="tabpanel" aria-labelledby="v-pills-performance-tab">
                                            <form action="#" class="search-property-1">
                                                <div class="row g-0">
                                                    <div class="col-md-12 d-flex">
                                                        <div class="form-group mb-3">
                                                            <label for="#">Your Full Name</label>
                                                            <div class="form-field">
                                                                <input type="text" class="form-control" placeholder="Full Name" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12 d-flex">
                                                        <div class="form-group mb-3">
                                                            <label for="#">Your Email ID</label>
                                                            <div class="form-field">
                                                                <input type="text" class="form-control" placeholder="Email ID" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12 d-flex">
                                                        <div class="form-group d-flex w-100">
                                                            <div class="form-field w-100 align-items-center d-flex">
                                                                <input type="submit" value="Register Now!" class="align-self-stretch form-control btn btn-primary me-2" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Welcome Sambodhi Retreat Centre',
  meta: [
    {
      name: 'description',
      content: 'Sambodhi Retreat Centre site description',
    },
  ],
};
